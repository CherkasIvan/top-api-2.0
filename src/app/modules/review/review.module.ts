import { Module } from '@nestjs/common';

import { ReviewController } from './controller/review.controller';
import { ReviewService } from './service/review.service';

@Module({
    providers: [ReviewService],
    controllers: [ReviewController],
})
export class ReviewModule {}
