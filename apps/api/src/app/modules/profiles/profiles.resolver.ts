import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfilesService } from './profiles.service';
import { Profile } from './entities/profile.entity';
import { CreateOrUpdateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';

@Resolver(() => Profile)
export class ProfilesResolver {
  constructor(private readonly profilesService: ProfilesService) {}

  @Mutation(() => Profile)
  async createOrUpdateProfile(
    @Args('createOrUpdateProfileInput')
    createOrUpdateProfileInput: CreateOrUpdateProfileInput
  ) {
    return await this.profilesService.create(createOrUpdateProfileInput);
  }

  @Query(() => [Profile], { name: 'profiles' })
  findAll() {
    return this.profilesService.findAll();
  }

  @Query(() => Profile, { name: 'profile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.profilesService.findOne(id);
  }

  @Mutation(() => Profile)
  updateProfile(
    @Args('updateProfileInput') updateProfileInput: UpdateProfileInput
  ) {
    return this.profilesService.update(
      updateProfileInput.id,
      updateProfileInput
    );
  }

  @Mutation(() => Profile)
  removeProfile(@Args('id', { type: () => Int }) id: number) {
    return this.profilesService.remove(id);
  }
}
