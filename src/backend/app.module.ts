import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
