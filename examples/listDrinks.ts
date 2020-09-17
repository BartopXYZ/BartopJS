import * as Bartop from "../dist";

const auth = new Bartop.Auth(process.env.token);

Bartop.Drink.list().then((drinkList) => {
  console.log(JSON.stringify(drinkList));
}).catch((e) => {
  console.error(e);
});
