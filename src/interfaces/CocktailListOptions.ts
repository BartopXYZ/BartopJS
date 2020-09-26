import {Drink} from "../lib/Drink";

export interface InterfaceCocktailListOptions {
  /**
   * The drinks you wish to search by
   */
  drinks?: string[] | Drink[];
  /**
   * If set to true, the search will only include cocktails where all
   * the required drinks are part of your search
   * @default false
   */
  excludeOtherDrinks?: boolean;
  /**
   * If set to true, the search will include cocktails where a given
   * drink is included as an alternative for the recomended drink
   * @default false
   */
  allowAlternatives?: boolean;
  /**
   * Should Ids be replaced with the full drink object
   * @default true
   */
  includeDrinkObjects?: boolean;
}
