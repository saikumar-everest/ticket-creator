import {InputType, Field} from '@nestjs/graphql';
import {IsNotEmpty} from 'class-validator';

@InputType()
export class TicketInput {
  @Field(() => String)
  @IsNotEmpty()
  ticketManager: string;

  @Field(() => String)
  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @Field(() => String, {nullable: true})
  status?: string;

  @Field(() => String, {nullable: true})
  priority?: string;

  @Field(() => String, {nullable: true})
  email?: string;

  @Field(() => String, {nullable: true})
  type?: string;
}
