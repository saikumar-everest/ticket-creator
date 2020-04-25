import {InputType, Field} from '@nestjs/graphql';
import {ZendeskCommentInput} from './zendesk-comment-input.model';
import {IsNotEmpty} from 'class-validator';

@InputType()
export class ZendeskRequestInput {
  @Field()
  @IsNotEmpty()
  comment: ZendeskCommentInput;

  @Field()
  @IsNotEmpty()
  subject: string;

  @Field({nullable: true})
  status: string;
}
