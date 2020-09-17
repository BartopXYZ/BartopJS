import * as Bartop from "../dist";

const auth = new Bartop.Auth(process.env.token);

Bartop.Drink.list({
  catagory: "Gin",
  subCatagories: ["London Dry Gin"],
}).then((drinkList) => {
  console.log(JSON.stringify(drinkList));
}).catch((e) => {
  console.error(e);
});
