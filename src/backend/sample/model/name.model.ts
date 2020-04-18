import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class Name {
  @Field(type => String)
  family: string;

  @Field(type => String)
  given: string;
}
