import {DrinkType} from "../types/DrinkType";

export interface InterfaceDrinkListOptions {
  name?: string;
  pageLimit?: number;
  minABV?: number;
  maxABV?: number;
  abv?: number;
  catagory?: DrinkType;
  subCatagories?: string[];
}
