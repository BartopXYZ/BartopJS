import { request } from "./Request";
export class Drink {
    static async list(options) {
        const response = await request("v1/drinks", options);
        return response.map(Drink.fromJSON);
    }
    static async getById(id) {
        const response = await request(`v1/drinks/${id}`);
        return Drink.fromJSON(response);
    }
    static fromJSON(drinkJSON) {
        const attributes = {};
        const wantedAttributes = ["id", "name", "brand", "abv", "barcodes", "catagory", "subCatagories", "about"];
        for (const attribute of wantedAttributes) {
            attributes[attribute] = drinkJSON[attribute];
        }
        return Object.assign(new Drink(), attributes);
    }
}
