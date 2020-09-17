export default interface InterfaceDrink {
  readonly id: string;
  readonly name: string;
  readonly brand: string;
  readonly abv: number;
  readonly catagory: "Gin" |
    "Whiskey" |
    "Rum" |
    "Beer" |
    "Wine" |
    "Brandy" |
    "Tequila" |
    "Vodka" |
    "Cider" |
    "Liqueurs" |
    "Bitters" |
    "Vermouth";
  readonly about?: string;
  readonly barcodes?: [string];
  readonly subCatagories ?: [string];
}
