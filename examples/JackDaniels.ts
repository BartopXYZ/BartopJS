import * as Bartop from "../dist";

const auth = new Bartop.Auth(process.env.token);

Bartop.Drink.getById("5f11c00ac11e13f974af12d1").then((drinkList) => {
  console.log(JSON.stringify(drinkList));
}).catch((e) => {
  console.error(e);
});
