import InterfaceDrink from "../interfaces/Drink";
import InterfaceDrinkListOptions from "../interfaces/DrinkListOptions";
import { request } from "./Request";

export class Drink implements InterfaceDrink {
    public static async list(options?: InterfaceDrinkListOptions): Promise<[Drink]> {
      const response = await request("v1/drinks", options);
      return response.map(Drink.fromJSON);
    }

    public static async getById(id: string): Promise<Drink> {
      const response = await request(`v1/drinks/${id}`);
      return Drink.fromJSON(response);
    }

    public static fromJSON(drinkJSON: InterfaceDrink): Drink {
      const attributes = {};
      const wantedAttributes = ["id", "name", "brand", "abv", "barcodes", "catagory", "subCatagories", "about"];
      for (const attribute of wantedAttributes) {
        attributes[attribute] = drinkJSON[attribute];
      }

      return Object.assign(new Drink(), attributes);
    }

    public id: string;
    public name: string;
    public brand: string;
    public abv: number;
    public barcodes: [string];
    public catagory;
    public subCatagories?: [string];
    public about?: string;
  }
