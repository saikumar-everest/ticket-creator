import {InputType} from '@nestjs/graphql';
import {IsNotEmpty, IsEmail} from 'class-validator';

@InputType()
export class FreshdeskTicketInput {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  status: number;

  @IsNotEmpty()
  priority: number;
}
