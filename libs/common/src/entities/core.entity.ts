import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export class CoreEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updated_at: Date;
}
