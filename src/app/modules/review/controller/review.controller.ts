import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewDto } from '@shared/dto/review/review.dto';

@Controller('review')
export class ReviewController {

    @Post('create')
    async create(@Body() dto:Omit<ReviewDto, '_id'>) {
  
    } 

    @Delete(':id')
    async delete(@Param('id') id: string) {
  
    }

    @Get('byProduct/:productId') 
    async getByProduct(@Param('productId') productId: string) {
    
  }
}
