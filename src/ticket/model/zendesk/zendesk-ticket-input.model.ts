import {InputType} from '@nestjs/graphql';
import {IsNotEmpty} from 'class-validator';
import {ZendeskRequestInput} from './zendesk-request-input.model';

@InputType()
export class ZendeskTicketInput {
  @IsNotEmpty()
  request: ZendeskRequestInput;
}
