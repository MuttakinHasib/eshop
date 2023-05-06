import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { createHash } from '../../utils/hash';

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

  async findOne(query: FindOptionsWhere<User>) {
    return await this.userRepository.findOne({ where: query });
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    // update user by id in typeorm posgres
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new ConflictException('User not found');

    const updatedUser = await this.userRepository.save({
      id,
      ...updateUserInput,
    });

    return updatedUser;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
