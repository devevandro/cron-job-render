import axios from 'axios';

import { Controller, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Cron('*/1 17-23 * * *')
  async getInfisical() {
    try {
      await axios.get(process.env.RENDER_INFISICAL_URL);
      this.logger.log('Tarefa executada pelo cron!');
    } catch (error) {
      this.logger.error('Erro ao executar a tarefa pelo cron!');
    }
  }
}
