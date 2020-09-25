import {Drink} from "../lib/Drink";

export interface InterfaceCocktailListOptions {
  drinks?: string[] | Drink[];
  excludeOtherDrinks?: boolean; // defaults to false
  allowAlternatives?: boolean; // defaults to false
  includeDrinkObjects?: boolean; // defaults to true
}
