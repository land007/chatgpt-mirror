import { Injectable, Logger, MessageEvent, OnModuleInit } from '@nestjs/common';
import { ChatGPTAPI, ChatMessage, ConversationResponseEvent } from 'chatgpt';
import fetch from './fetch.js';

import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import ProxyAgent from 'proxy-agent-v2';
import { ErrorMapping, OpenAiConfig } from './config/configuration.types.js';

@Injectable()
export class ChatGPTService implements OnModuleInit {
  private readonly logger = new Logger(ChatGPTService.name);

//  private api: ChatGPTAPI;
  private readonly apis: Map<string, ChatGPTAPI> = new Map();
  private proxyAgent: unknown;
  private readonly errorMapping: { keyword: string; message: string }[];
  private openaiConfig: OpenAiConfig;

  constructor(private readonly configService: ConfigService) {
    this.errorMapping = configService.get('openai.errorMapping') || [];
  }

  onModuleInit() {
    const { HTTP_PROXY } = process.env;
    if (HTTP_PROXY) {
      this.proxyAgent = new ProxyAgent(HTTP_PROXY);
    }
    this.openaiConfig = this.configService.get('openai') || {};
  }

  private proxyFetch = (url: string, options?: any) => {
    return fetch(url, {
      ...options,
      agent: this.proxyAgent,
    });
  };

  sendMessage(message: string, parentMessageId: string, apiKey: string, model: string): Observable<MessageEvent> {
    const { systemMessage, maxTokens, defaultModel = 'gpt-3.5-turbo' } = this.configService;
    const currentApiKey = apiKey || process.env.OPENAI_API_KEY; // 优先使用传入的 apiKey，如果为空则使用默认的
    const currentModel = model || defaultModel; // 优先使用传入的 model，如果为空则使用默认的
    let api = this.apis.get(currentApiKey);
    if (!api) {
	    api = new ChatGPTAPI({
	      apiKey: currentApiKey,
	      fetch: this.proxyFetch,
	      systemMessage,
	      maxModelTokens: maxTokens,
	      completionParams: {
	        model: currentModel,
	      },
	    });
	    this.apis.set(currentApiKey, api);
    }
    const observable = new Observable<MessageEvent>((subscriber) => {
      api
        .sendMessage(message, {
          parentMessageId,
          onProgress: (partialResponse) => {
            subscriber.next({
              type: 'add',
              data: this.buildMessageEvent(partialResponse),
            });
          },
        })
        .catch((err) => {
          this.logger.error('Error sending message', err);

          subscriber.next({
            type: 'add',
            data: {
              error: {
                message: this.buildErrorMessage(err),
              },
            },
          });
        })
        .finally(() => {
          subscriber.next({
            data: '[DONE]',
          });
        });
    });

    return observable;
  }

  private buildMessageEvent(chatMessage: ChatMessage): ConversationResponseEvent {
    const { id, role, text } = chatMessage;
    return {
      message: {
        id,
        role,
        user: null,
        create_time: null,
        update_time: null,
        end_turn: null,
        weight: 0,
        recipient: 'all',
        metadata: null,
        content: {
          content_type: 'text',
          parts: [text],
        },
        author: {
          role: 'assistant',
        },
      },
      error: null,
    } as ConversationResponseEvent;
  }

  private buildErrorMessage(err: { message?: string }): string {
    const { message } = err;
    const errorMapping = this.errorMapping.find((item) => message?.includes(item.keyword));
    return errorMapping?.message || message || 'Unknown error';
  }
}