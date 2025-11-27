import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindProductDto } from '@shared/dto/product/find-product.dto';
import { FindTopPageDto } from '@shared/dto/top-page/find-top-page.dto';
import { TopPageDto } from '@shared/dto/top-page/top-page.dto';

@Controller('top-page')
export class TopPageController {
    @Post('create')
    async create(@Body() dto:Omit<TopPageDto, '_id'>) {
  
    } 
    
    @Get(':id')
    async get(@Param('id') id: string) {
  
    }  
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
  
    }
  
    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto:TopPageDto) {
      
    }
  
    @HttpCode(200)
    @Post()
    async find(@Body() dto:FindTopPageDto) {
  
    } 
}
