import addItemMenuDatabase from "../../pages/pizza-maker/add-item-menu/add-item-menu-database";
const customPepperoniPriceCalculator = (
  pepperoniLayoutDatabase,
  buildAPizzaUserSelectedObject,
  pepperoniPerCrustObject
) => {
  let additionalCostPepperoniLimit = 0;

  if (pepperoniLayoutDatabase.length !== 0) {
    additionalCostPepperoniLimit =
      +pepperoniPerCrustObject[buildAPizzaUserSelectedObject.size[0]];
  }

  let possibleUserSelectedTypes = ["size", "crust", "sauce", "cheese"];
  let userSelectedItemWithPrice = [];

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

  // handeling if the user created a custom peperoni pizza and if they wen over the limit to be charged

  if (additionalCostPepperoniLimit !== 0) {
    if (pepperoniLayoutDatabase.length > additionalCostPepperoniLimit) {
      const numberOfTimesToCharge =
        pepperoniLayoutDatabase.length - additionalCostPepperoniLimit;

      let amountToCharge = `${numberOfTimesToCharge * 0.2}`;
      if (amountToCharge.includes(".")) {
        const indexOfDecimal = amountToCharge.indexOf(".");
        amountToCharge = amountToCharge.slice(0, indexOfDecimal + 3);
      } else {
        amountToCharge = amountToCharge + `.00`;
      }

      userSelectedItemWithPrice.push({
        item: `Additional Pepperoni (${numberOfTimesToCharge})`,
        price: `$${amountToCharge}`,
      });
    }
  }

  // calculating the total price

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
  // trimming to two decimal places
  const indexOfDecimal = totalPrice.indexOf(".");
  totalPrice = totalPrice.slice(0, indexOfDecimal + 3);

  return [userSelectedItemWithPrice, totalPrice];
};
export default customPepperoniPriceCalculator;
