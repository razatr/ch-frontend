export interface AminoAcids {
  a: number;
  b: number;
  c: number;
  d: number;
};

export interface Vitamins {
  a: number;
  b: number;
  c: number;
  d: number;
};

export interface IFood {
  vitamins: Vitamins;
  amino_acids: AminoAcids;
  name: string;
  calories: number;
  protein: number;
  fats: number;
  carb: number;
};

export interface IFoodHistory {
  foodHistoryId: number;
  food: IFood,
  time: number,
  state: string;
  comment: string,
  weight: number
};
