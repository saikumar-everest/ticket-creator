import {InputType, Field} from '@nestjs/graphql';
import {IsNotEmpty} from 'class-validator';
import {ZendeskRequestInput} from './zendesk-request-input.model';

@InputType()
export class ZendeskTicketInput {
  @Field()
  @IsNotEmpty()
  request: ZendeskRequestInput;
}
