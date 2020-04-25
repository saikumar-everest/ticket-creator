import {InputType, Field} from '@nestjs/graphql';
import {IsNotEmpty, IsEmail} from 'class-validator';

@InputType()
export class FreshdeskTicketInput {
  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsNotEmpty()
  subject: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field({nullable: true})
  status: number;
}
