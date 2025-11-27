import { Module } from '@nestjs/common';
import { ReviewService } from './service/review.service';
import { ReviewController } from './controller/review.controller';

@Module({
  providers: [ReviewService],
  controllers: [ReviewController]
})
export class ReviewModule {}
