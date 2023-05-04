import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { createHash } from '../../utils/hash';
import { omit } from 'lodash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createUserInput: CreateUserInput) {
    const userExists = await this.userRepository.findOne({
      where: { email: createUserInput.email },
    });
    if (userExists) throw new ConflictException('User already exists');

    createUserInput.password = await createHash(createUserInput.password);
    const user = this.userRepository.create(createUserInput);
    await this.userRepository.save(user);
    return 'User has been registered';
  }

  async findAll() {
    return await this.userRepository.find({});
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
