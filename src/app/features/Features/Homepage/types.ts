export interface SkillsDataState {
  category: string;
  isSelected: boolean;
  itemArray: Skills[];
}

export interface Skills {
  item: string;
  score: number;
}

export interface Experiences {
  positionName: string;
  startDate: string;
  endDate: string;
  location: string;
  achievements: string[];
}

export interface Projects {
  name: string;
  startDate: string;
  endDate: string;
  tools: string[];
  purpose: string;
  url: string;
}
