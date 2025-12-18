import { Module } from '@nestjs/common';

import { TopPageController } from './controller/top-page.controller';
import { TopPageService } from './service/top-page.service';

@Module({
    controllers: [TopPageController],
    providers: [TopPageService],
})
export class TopPageModule {}
