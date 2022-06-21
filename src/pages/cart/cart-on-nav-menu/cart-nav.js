import { useSelector } from "react-redux";
import addItemMenuDatabase from "../../pizza-maker/add-item-menu/add-item-menu-database";

const CartOnNavMenu = () => {
  const cartObject = useSelector((state) => state.cartObject);
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const deepCopyOfCartObject = JSON.parse(JSON.stringify(cartObject));
  /// Latest Item Name
  // since we are pushing the items the latest item is at the end of the cart object
  const latestItem = deepCopyOfCartObject[deepCopyOfCartObject.length];
  const latestTitle = latestItem.title;

  // Price of latest Item
  let possibleUserSelectedTypes = [];

  if (latestTitle === "Build a Pizza") {
    possibleUserSelectedTypes = [
      "size",
      "crust",
      "sauce",
      "cheese",
      "veggies",
      "meats",
      "other",
    ];
  } else {
    possibleUserSelectedTypes = ["size", "crust", "sauce", "cheese"];
  }
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
  const indexOfDecimal = totalPrice.indexOf(".");
  totalPrice = totalPrice.slice(0, indexOfDecimal + 3);
  // Total Price
  // Cart Button
};
export default CartOnNavMenu;
