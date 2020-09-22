import PrepMethod from "../types/prepMethod";
import { InterfaceCocktailComponentDrink } from "./CocktailComponent";

export interface InterfaceCocktail {
  readonly id: string;
  readonly name: string;
  readonly method: PrepMethod;
  readonly drinks: InterfaceCocktailComponentDrink[];
  readonly ingredients: any[];
  readonly steps: string[];
}
