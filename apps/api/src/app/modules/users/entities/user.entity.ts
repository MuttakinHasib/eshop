import * as bcrypt from 'bcrypt';
import { ObjectType, Field, OmitType, InputType } from '@nestjs/graphql';
import { Column, Entity, OneToOne } from 'typeorm';
import { CoreEntity } from '@eshop/common';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
@ObjectType()
@InputType('UserInputType', { isAbstract: true })
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

  @Column()
  @Field()
  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Column({ default: false })
  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  is_active: boolean;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: true,
    nullable: true,
  })
  @Field(() => Profile, { nullable: true })
  @ValidateNested({ each: true })
  @Type(() => Profile)
  profile?: Profile;

  @Column({ nullable: true })
  @Field({ nullable: true })
  profile_id?: string;

  async comparePassword(password: string): Promise<boolean> {
    const user = this as User;
    return await bcrypt.compare(password, user.password);
  }
}

@ObjectType()
export class UserWithoutPassword extends OmitType(User, ['password']) {}
