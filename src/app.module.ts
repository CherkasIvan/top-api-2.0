import { AuthModule } from '@core/auth/auth.module';
import { ProductModule } from '@modules/product/product.module';
import { ReviewModule } from '@modules/review/review.module';
import { TopPageModule } from '@modules/top-page/top-page.module';
import { Module } from '@nestjs/common';


@Module({
    imports: [AuthModule, ProductModule, TopPageModule, ReviewModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
