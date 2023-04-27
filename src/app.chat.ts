import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

@Controller({ path: '/c' })
export class ChatController {

  @Get(':id')
  async getIndex(@Res() res: Response) {
    const path = join(__dirname, '..', 'chat', 'index.html');
    const content = await fs.promises.readFile(path, 'utf-8');
    res.send(content);
  }

}
