import {PrepMethod} from "../types/prepMethod";
import { InterfaceCocktailComponentDrink } from "./CocktailComponent";

export interface InterfaceCocktail {
  /**
   * The unique refrence to this cocktail
   */
  readonly id: string;
  /**
   * The most commonly used name for this cocktail
   */
  readonly name: string;
  /**
   * What sort of cocktail is this? (eg. shaken or stired)
   */
  readonly method: PrepMethod;
  /**
   * What drinks are needed to make this cocktail and how much
   */
  readonly drinks: InterfaceCocktailComponentDrink[];
  /**
   * What none alcoholic ingredients are needed to make this cocktail
   */
  readonly ingredients: any[];
  /**
   * More detailed instructions on the steps to create this cocktail
   */
  readonly steps: string[];
}
