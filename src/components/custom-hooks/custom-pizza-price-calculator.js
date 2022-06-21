import addItemMenuDatabase from "../../pages/pizza-maker/add-item-menu/add-item-menu-database";

const customPizzaPriceCalculator = (buildAPizzaUserSelectedObject) => {
  let userSelectedItemWithPrice = [];
  let possibleUserSelectedTypes = [
    "size",
    "crust",
    "sauce",
    "cheese",
    "veggies",
    "meats",
    "other",
  ];

  for (const type of possibleUserSelectedTypes) {
    // selecting the user data
    let userSelectedItem = buildAPizzaUserSelectedObject[type];
    // for loop retieves the price for the item the user selected
    for (const item of userSelectedItem) {
      let data = addItemMenuDatabase[type].data;
      // now we need to find the price fro the user selected item
      for (const dataItem of data) {
        if (dataItem.type === item) {
          userSelectedItemWithPrice.push({ item: item, price: dataItem.price });
          break;
        }
      }
    }
  }
  let totalPrice = 0;

  for (let item of userSelectedItemWithPrice) {
    const trimmedPrice = item.price.trim();
    const indexOfPriceSign = trimmedPrice.indexOf("$");

    let itemPrice = +trimmedPrice.slice(indexOfPriceSign + 1);

    if (trimmedPrice[0] === "+" || trimmedPrice[0] === "$") {
      totalPrice = totalPrice + itemPrice;
    } else {
      totalPrice = totalPrice - itemPrice;
    }
  }
  totalPrice = `${totalPrice}`;
  const indexOfDecimal = totalPrice.indexOf(".");
  totalPrice = totalPrice.slice(0, indexOfDecimal + 3);
  return [userSelectedItemWithPrice, totalPrice];
};
export default customPizzaPriceCalculator;
