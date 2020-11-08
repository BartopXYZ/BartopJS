import { InterfaceCocktail } from "../interfaces/Cocktail";
import { InterfaceCocktailComponentDrink } from "../interfaces/CocktailComponent";
import { InterfaceCocktailListOptions } from "../interfaces/CocktailListOptions";
import { PrepMethod } from "../types/prepMethod";
import { Drink } from "./Drink";
import { request } from "./Request";

export class Cocktail implements InterfaceCocktail {
    public static async list(options?: InterfaceCocktailListOptions): Promise<[Cocktail]> {
      if (options.drinks) {
        const drinks = JSON.parse(JSON.stringify(options.drinks));
        options.drinks = drinks.map( (drink) => typeof drink === "string" ? drink : drink.id );
      }

      const response = await request("/cocktails", options);
      return response.map(Cocktail.fromJSON);
    }

    public static async getById(id: string): Promise<Cocktail> {
      const response = await request(`/cocktails/${id}`);
      try {
        return Cocktail.fromJSON(response);
      } catch(e) {
        throw new Error("Couldn't parse cocktail");
      }
    }

    public static fromJSON(drinkJSON: InterfaceCocktail): Cocktail {
      const attributes = {};
      const wantedAttributes = ["id", "name", "method", "drinks", "ingredients", "steps"];
      for (const attribute of wantedAttributes) {
        attributes[attribute] = drinkJSON[attribute];
      }

      return Object.assign(new Cocktail(), attributes);
    }

    public id: string;
    public name: string;
    public method: PrepMethod;
    public drinks: InterfaceCocktailComponentDrink[];
    public ingredients: any[];
    public steps: string[];
  }
