import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TicketModule} from './ticket/ticket.module';

@Module({
  imports: [
    TicketModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
