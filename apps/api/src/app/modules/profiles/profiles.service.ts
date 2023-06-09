import { Injectable } from '@nestjs/common';
import { CreateOrUpdateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>
  ) {}

  async create(createProfileInput: CreateOrUpdateProfileInput) {
    const profile = this.profileRepository.create(createProfileInput);
    return await this.profileRepository.save(profile);
  }

  async update(id: string, updateProfileInput: UpdateProfileInput) {
    await this.profileRepository.save({ id, ...updateProfileInput });
    return `This action updates a #${id} profile`;
  }
}
