import {DrinkType} from "../types/DrinkType";

export interface InterfaceDrinkListOptions {
  /** Search by name (includes both brand and drink name) */
  name?: string;
  /**
   * The maximum number of items per page (0-100)
   * @default 50
   */
  pageLimit?: number;
  /**
   * A minimum ABV value. Ignored if abv is set
   */
  minABV?: number;
  /**
   * A maximum ABV value. Ignored if abv is set
   */
  maxABV?: number;
  /**
   * An exact abv value. Due to the prominence of decimal place ABVs
   * It is recomended you use min and maxABV instead
   */
  abv?: number;
  /**
   * Only return drnks of a specific catagory
   */
  catagory?: DrinkType;
  /**
   * Only return drinks of a specific subCatagories.
   * If a specific subCatagory is not a valid subCatagory for the given
   * catatagory then the search will come back empty
   */
  subCatagories?: string[];
}
