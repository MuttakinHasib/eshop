import { InputType, PickType } from '@nestjs/graphql';
import { Profile } from '../entities/profile.entity';

@InputType()
export class CreateOrUpdateProfileInput extends PickType(
  Profile,
  ['avatar', 'bio', 'contact', 'socials'],
  InputType
) {}
