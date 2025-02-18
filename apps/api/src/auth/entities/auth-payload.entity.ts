import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthPayload {
  @Field(() => Number)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  accessToken: string;
}
