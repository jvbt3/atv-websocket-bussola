import { Module } from '@nestjs/common';
import { AppGateway } from './app/app.gateway';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [ ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
  }),],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
