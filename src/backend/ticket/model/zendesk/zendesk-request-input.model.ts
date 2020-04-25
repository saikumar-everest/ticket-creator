import {InputType} from '@nestjs/graphql';
import {ZendeskCommentInput} from './zendesk-comment-input.model';
import {IsNotEmpty} from 'class-validator';

@InputType()
export class ZendeskRequestInput {
  @IsNotEmpty()
  comment: ZendeskCommentInput;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  priority: string;
}
