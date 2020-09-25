import {Drink} from "../lib/Drink";

export interface InterfaceCocktailListOptions {
  drinks?: string[] | Drink[];
  excludeOtherDrinks?: boolean;
  allowAlternatives?: boolean;
  includeDrinkObjects: boolean = true;
}
