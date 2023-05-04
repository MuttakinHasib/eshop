import { CoreEntity } from '@eshop/common';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@ObjectType()
@InputType('ProfileInputType', { isAbstract: true })
export class Profile extends CoreEntity {
  @Column({ nullable: true })
  @Field()
  avatar?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  contact?: string;

  @Column({ type: 'array', nullable: true })
  @Field(() => [Social], { nullable: true })
  socials?: Social[];
}

@InputType('SocialInputType', { isAbstract: true })
@ObjectType()
export class Social {
  @Column()
  @Field()
  type: string;

  @Column()
  @Field()
  link: string;
}
