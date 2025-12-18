import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '@core/auth/auth.module';
import { ProductModule } from '@modules/product/product.module';
import { ReviewModule } from '@modules/review/review.module';
import { TopPageModule } from '@modules/top-page/top-page.module';
import { HealthModule } from '@modules/health/health.module';
import { getMongoConfig } from '@core/auth/configs/mongo.config';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: getMongoConfig, 
            inject: [ConfigService],
        }),
        HealthModule,
        AuthModule,
        ProductModule,
        TopPageModule,
        ReviewModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}