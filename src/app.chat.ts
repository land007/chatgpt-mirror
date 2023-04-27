import { Controller, Get, Res, Param } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

@Controller({ path: '/c' })
export class ChatController {

  @Get(':id')
  async getIndex(@Param('id') id: string, @Res() res: Response) {
    const path = join(__dirname, '..', 'chat', 'index_c.html');
    const content = await fs.promises.readFile(path, 'utf-8');
    const updatedContent = content.replace(/\${chatId}/g, id);
    res.send(updatedContent);
  }

}
