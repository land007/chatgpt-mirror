import { Injectable } from '@nestjs/common';
import { ChatGPTService } from './chatgpt.service.js';

@Injectable()
export class AppService {
  constructor(private readonly chatGPTService: ChatGPTService) {}

  sendMessage(message: string, parentMessageId: string, apiKey: string, model: string) {
    return this.chatGPTService.sendMessage(message, parentMessageId, apiKey, model);
  }
}
