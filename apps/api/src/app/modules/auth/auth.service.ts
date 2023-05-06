import { UsersService } from './../users/users.service';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginInput } from './dto/login.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validate(
    email: string,
    password: string
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOne({ email });
    if (!user) throw new NotFoundException('User does not exist');

    if (await user.comparePassword(password)) {
      delete user.password;
      return user;
    }
    throw new UnauthorizedException('Password is incorrect');
  }

  create(createAuthInput: LoginInput) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
