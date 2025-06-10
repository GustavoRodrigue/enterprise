import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    EnterpriseModule,
    MongooseModule.forRoot('mongodb://localhost:27017/enterprise'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
