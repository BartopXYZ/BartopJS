import { Drink } from "../lib/Drink";

export interface InterfaceCocktailComponentDrink {
  /**
   * The amount of ml used to make this cocktail when working with a standard UK jigger
   */
  mlMeasure: number;
  /**
   * The amount of ounces used to make this cocktail when working with a standard US jigger
   */
  ounceMeasure: number;
  /**
   * The Drink object or it's ID
   */
  drink: Drink | string;
  /**
   * The IDs of any drinks that this part of the cocktail could be substituted for
   */
  alternatives?: string[];
}
