import { Body, Headers, Controller, Get, MessageEvent, Post, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { AppService } from './app.service.js';
import { ConversationRequestBody, GenTitleRequestBody } from './app.types';

@Controller({ path: '/backend-api' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('moderations')
  moderations() {
    return {
      blocked: false,
      flagged: false,
      moderation_id: uuidv4(),
    };
  }

  @Get('conversations')
  conversations() {
    return {
      items: [],
      total: 0,
      limit: 20,
      offset: 0,
    };
  }

  @Post('conversation')
  @Sse()
  conversation(
    @Body() body: ConversationRequestBody,
    @Headers('X-Openai-Api-Key') apiKey: string,
    @Headers('X-Openai-Model') model: string,
  ): Observable<MessageEvent> {
    const { messages, parent_message_id } = body;
    const message = messages[0]?.content.parts[0] ?? '';
	console.log(apiKey, model); // 打印头信息
    return this.appService.sendMessage(message, parent_message_id, apiKey, model);
  }

  @Post('conversation/gen_title/')
  generateTitle(@Body() body: GenTitleRequestBody) {
    return {
      title: '',
    };
  }
}
