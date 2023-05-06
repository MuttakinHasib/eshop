import { UsersService } from './../users/users.service';
import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';

import { LoginInput, LoginResponse } from './dto/login.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { Auth } from './entities/auth.entity';
import { CurrentUser } from '@eshop/common';
import { UserWithoutPassword } from '../users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';
import { SessionAuthGuard } from './guards/session.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { Logout } from './guards/logout.guard';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Mutation(() => LoginResponse)
  @UseGuards(LocalAuthGuard, SessionAuthGuard)
  async login(
    @CurrentUser() user: UserWithoutPassword,
    @Args('loginInput') _loginInput: LoginInput
  ) {
    // console.log({ user });
    return { message: 'Login Success' };
  }

  @Query(() => UserWithoutPassword)
  @UseGuards(AuthenticatedGuard)
  whoAmI(@CurrentUser() user: UserWithoutPassword) {
    return user;
  }

  @UseGuards(Logout)
  @Query(() => String, { name: 'logout' })
  async logout() {
    return 'Logout Success';
  }

  @Query(() => [Auth], { name: 'auth' })
  findAll() {
    return this.authService.findAll();
  }

  @Query(() => Auth, { name: 'auth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authService.findOne(id);
  }

  @Mutation(() => Auth)
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
    return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Mutation(() => Auth)
  removeAuth(@Args('id', { type: () => Int }) id: number) {
    return this.authService.remove(id);
  }
}
