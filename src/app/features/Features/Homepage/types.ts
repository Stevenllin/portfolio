export interface SkillsDataState {
  category: string;
  isSelected: boolean;
  itemArray: Skills[];
}

export interface Skills {
  item: string;
  score: number;
}
