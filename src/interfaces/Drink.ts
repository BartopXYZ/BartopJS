import DrinkType from "../types/DrinkType";

export interface InterfaceDrink {
  readonly id: string;
  readonly name: string;
  readonly brand: string;
  readonly abv: number;
  readonly catagory: DrinkType;
  readonly about?: string;
  readonly barcodes?: string[];
  readonly subCatagories ?: string[];
}
