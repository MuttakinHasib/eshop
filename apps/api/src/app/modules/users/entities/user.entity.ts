import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CreateUserInput } from '../dto/create-user.input';

@Entity()
@ObjectType()
export class User extends CreateUserInput {
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
