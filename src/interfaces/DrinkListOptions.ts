export default interface InterfaceDrinkListOptions {
  name?: string;
  pageLimit?: number;
  minABV?: number;
  maxABV?: number;
  abv?: number;
  catagory?: "Gin" |
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
  subCatagories?: [string];
}
