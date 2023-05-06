import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, UserWithoutPassword } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateOrUpdateProfileInput } from '../profiles/dto/create-profile.input';
import { ProfilesService } from '../profiles/profiles.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly profilesService: ProfilesService
  ) {}

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

  @Mutation(() => UserWithoutPassword)
  async createOrUpdateProfile(
    @Args('createOrUpdateProfileInput')
    createOrUpdateProfileInput: CreateOrUpdateProfileInput
  ) {
    const profile = this.profilesService.create(createOrUpdateProfileInput);
  }
}
