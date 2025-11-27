import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindProductDto } from '@shared/dto/product/find-product.dto';
import { ProductDto } from '@shared/dto/product/product.dto';

@Controller('product')
export class ProductController {

  @Post('create')
  async create(@Body() dto:Omit<ProductDto, '_id'>) {

  } 
  
  @Get(':id')
  async get(@Param('id') id: string) {

  }  

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto:ProductDto) {
    
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto:FindProductDto) {

  } 
}
