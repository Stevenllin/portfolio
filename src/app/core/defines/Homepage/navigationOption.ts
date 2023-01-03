import Option from 'app/core/models/option';
import { NavigationTextEnum, NavigationValuesEnum } from 'app/core/enums';

export const NavigationOption: Option[] = [
  { text: NavigationTextEnum.About, value: NavigationValuesEnum.About },
  { text: NavigationTextEnum.Skills, value: NavigationValuesEnum.Skills },
  { text: NavigationTextEnum.Experiences, value: NavigationValuesEnum.Experiences },
  { text: NavigationTextEnum.Projects, value: NavigationValuesEnum.Projects },
  { text: NavigationTextEnum.Interests, value: NavigationValuesEnum.Interests }
]
