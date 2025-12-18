import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { FindTopPageDto } from '@modules/top-page/dto/find-top-page.dto';
import { TopPageDto } from '@modules/top-page/dto/top-page.dto';

@Controller('top-page')
export class TopPageController {
    @Post('create')
    async create(@Body() dto: Omit<TopPageDto, '_id'>) {}

    @Get(':id')
    async get(@Param('id') id: string) {}

    @Delete(':id')
    async delete(@Param('id') id: string) {}

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: TopPageDto) {}

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindTopPageDto) {}
}
