import * as test from "tape";
import {Drink} from "../dist";
import {InterfaceDrink} from "../dist/interfaces/Drink";

interface IntefaceExampleDrink extends InterfaceDrink {
  businessCode: string;
}

test("Test Drink converts json as expected", (assert) => {
  assert.plan(7);
  const exampleDrink = {
    about: "This is not a real drink",
    abv: 14.2,
    brand: "Example",
    businessCode: "Random key that shouldn't show up",
    catagory: "Whiskey",
    id: "122ja1sasas",
    name: "Drink",
  } as IntefaceExampleDrink;

  const testDrink = Drink.fromJSON(exampleDrink);
  const drink = JSON.parse(JSON.stringify(testDrink));
  assert.equals(drink.businessCode, undefined, "The unexpected key (businessCode) has not been set");
  for (const key of Object.keys(exampleDrink)) {
   if (key !== "businessCode") {
    assert.equal(testDrink[key], exampleDrink[key], `${key} is set correctly`);
   }
 }
  assert.end();
});