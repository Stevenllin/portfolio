import Option from 'app/core/models/option';
import { SkillsTextEnum, SkillsValuesEnum } from 'app/core/enums';

export const SkillsOption: Option[] = [
  { text: SkillsTextEnum.Front, value: SkillsValuesEnum.Front },
  { text: SkillsTextEnum.Back, value: SkillsValuesEnum.Back },
  { text: SkillsTextEnum.Others, value: SkillsValuesEnum.Others }
]
