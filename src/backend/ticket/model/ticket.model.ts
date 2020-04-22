import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class Ticket {
  @Field(() => String)
  id: string;

  @Field(() => String)
  subject: string;

  @Field(() => String)
  status: string;

  @Field(() => String, {nullable: true})
  priority: string;
}
