import {DrinkType} from "../types/DrinkType";

export interface InterfaceDrink {
  /**
   * The unique refrence to this drink
   */
  readonly id: string;
  /**
   * The name of the drink (not including brand name)
   */
  readonly name: string;
  /**
   * The brand name of the drink
   */
  readonly brand: string;
  /**
   * The alcohol by volume percentage
   */
  readonly abv: number;
  /**
   * The type of drink
   */
  readonly catagory: DrinkType;
  /**
   * Anything interesting about the drink. May not appear on all drinks
   */
  readonly about?: string;
  /**
   * All drinks should have at least one barcode. Usually the UK EAN-13.
   */
  readonly barcodes?: string[];
  /**
   * Any subcatagories of the drink
   */
  readonly subCatagories ?: string[];
}
