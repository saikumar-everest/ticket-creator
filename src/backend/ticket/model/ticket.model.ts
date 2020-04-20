import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class Ticket {
  @Field(type => String)
  id: string;

  @Field(type => String)
  subject: string;

  @Field(type => String)
  status: string;

  @Field(type => String, {nullable: true})
  priority: string;
}
