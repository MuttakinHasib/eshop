import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, UserWithoutPassword } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateOrUpdateProfileInput } from '../profiles/dto/create-profile.input';

import { CurrentUser } from '@eshop/common';
import { UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserWithoutPassword)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => [UserWithoutPassword], { name: 'users' })
  async findAll() {
    return await this.usersService.findAll();
  }

  @Query(() => UserWithoutPassword, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.findOne({ id });
  }

  @Mutation(() => UserWithoutPassword)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserWithoutPassword)
  removeUser(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.remove(id);
  }

  @Mutation(() => String)
  @UseGuards(AuthenticatedGuard)
  async createOrUpdateProfile(
    @CurrentUser() user: UserWithoutPassword,
    @Args('createOrUpdateProfileInput')
    createOrUpdateProfileInput: CreateOrUpdateProfileInput
  ) {
    return this.usersService.createOrUpdateProfile(
      user.id,
      createOrUpdateProfileInput
    );
  }
}
