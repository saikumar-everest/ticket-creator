import {InputType, Field} from '@nestjs/graphql';
import {IsNotEmpty} from 'class-validator';

@InputType()
export class ZendeskCommentInput {
  @Field()
  @IsNotEmpty()
  body: string;
}
