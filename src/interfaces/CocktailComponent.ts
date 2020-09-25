import { Drink } from "../lib/Drink";

export interface InterfaceCocktailComponentDrink {
  mlMeasure: number;
  ounceMeasure: number;
  drink: Drink | string;
  alternatives?: string[];
}
