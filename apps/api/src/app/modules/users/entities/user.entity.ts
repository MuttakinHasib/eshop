import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { CoreEntity } from '@eshop/common';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@Entity()
@ObjectType()
export class User extends CoreEntity {
  @Column()
  @Field()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

  @Column({ unique: true })
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column({ select: false })
  @Field()
  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;
}
