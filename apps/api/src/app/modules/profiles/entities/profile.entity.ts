import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Column, Entity, OneToOne } from 'typeorm';
import { CoreEntity } from '@eshop/common';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
@InputType('ProfileInputType', { isAbstract: true })
export class Profile extends CoreEntity {
  @Column({ nullable: true })
  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  avatar?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  bio?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  @IsPhoneNumber()
  @IsOptional()
  contact?: string;

  @Column({ type: 'simple-json', nullable: true })
  @Field(() => [Social], { nullable: true })
  @ValidateNested({ each: true })
  @Type(() => Social)
  socials?: Social[];

  @OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
  @Field(() => User, { nullable: true })
  user?: User;
}

@InputType('SocialInputType', { isAbstract: true })
@ObjectType()
export class Social {
  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  @IsUrl()
  link?: string;
}
