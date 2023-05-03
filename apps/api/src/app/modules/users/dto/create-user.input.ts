import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreateUserInput {
  @Column()
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ unique: true })
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @Field()
  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;
}
