import {
  FrontFacingCard,
  OrderButton,
} from "./order-items-specility-pizza-styled-components";
import { StyledTypography } from "../order-online-homepage-styled-components";

const OrderItemsSpecilityPizza = ({ index, data }) => {
  // title: "St. Louis Pizza",
  // description:
  //   "Thin crust pizza, served with fresh marinara sauce, provel cheese, spicy peperonni and green peppers",
  // price: "sm. $14.99, md. $15.99, lg. $16.99, xl. $18.99, xxl. $20.99 ",

  // FRONT SIDE

  // Title
  const title = data.title;

  // PriceRange

  // Step One: Find index of the sm.
  const trimmedPizzaPrice = data.price.trim();
  let indexOfSmall = trimmedPizzaPrice.indexOf("sm.");
  // this index starts at the s
  // to get around this by adding three to the indexOf Small
  indexOfSmall = indexOfSmall + 3;
  const indexOfFirstComma = trimmedPizzaPrice.indexOf(",");
  const lowEndPrice = trimmedPizzaPrice.slice(indexOfSmall, indexOfFirstComma);

  let indexOfXxLarge = trimmedPizzaPrice.indexOf("xxl.");
  // this index starts at the first x
  // to get around this by adding 4 to the index
  indexOfXxLarge = indexOfXxLarge + 4;
  const highEndPrice = trimmedPizzaPrice.slice(indexOfXxLarge);

  // Lastly we combined the array into a useable string range
  const priceRange = `${lowEndPrice} - ${highEndPrice}`;

  // Onclick Button To Order
  // Order Selection Popup
  // BackSide

  // Add to cart
  return (
    <FrontFacingCard>
      <StyledTypography variant="h5" sx={{ textAlign: "center" }}>
        {title}
      </StyledTypography>
      <StyledTypography varaint="p" sx={{ textAlign: "center" }}>
        {priceRange}
      </StyledTypography>
      <OrderButton>Order</OrderButton>
    </FrontFacingCard>
  );
};
export default OrderItemsSpecilityPizza;
