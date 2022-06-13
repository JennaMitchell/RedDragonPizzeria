import {
  TopContainer,
  BlackboardContainer,
  OrderedItemsContainer,
  HorizontalChalkUnderline,
  StyledTypography,
  ListItemContainer,
} from "./pepperoni-maker-order-review-board-styled-components";
import { useSelector } from "react-redux";
import chalkUnderline from "../../../../../img/line-art/underlines/chalk_underline_horizontal.png";
import addItemMenuDatabase from "../../../add-item-menu/add-item-menu-database";

const PepperoniMakerOrderReviewBoard = () => {
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const pepperoniLayoutDatabase = useSelector(
    (state) => state.pepperoniLayoutDatabase
  );
  const pepperoniPerCrustObject = useSelector(
    (state) => state.pepperoniPerCrustObject
  );
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
      // now we need to find the price fro the user selected itemF
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

  // getting the data render ready
  const renderReadyListData = userSelectedItemWithPrice.map((item, index) => {
    return (
      <ListItemContainer key={index}>
        <StyledTypography variant="h6" sx={{ textAlign: "left" }}>
          {item.item}
        </StyledTypography>
        <StyledTypography variant="h6">{item.price}</StyledTypography>
      </ListItemContainer>
    );
  });
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

  return (
    <TopContainer>
      <BlackboardContainer>
        <StyledTypography variant="h4" sx={{ marginTop: "10px" }}>
          Your Order
        </StyledTypography>
        <HorizontalChalkUnderline src={chalkUnderline} alt="chalk underline" />
        <OrderedItemsContainer>{renderReadyListData}</OrderedItemsContainer>
        <HorizontalChalkUnderline src={chalkUnderline} alt="chalk underline" />
        <ListItemContainer sx={{ width: "max(90%,90%)", marginTop: "10px" }}>
          <StyledTypography variant="h6">Total:</StyledTypography>
          <StyledTypography variant="h6">{`$${totalPrice}`}</StyledTypography>
        </ListItemContainer>
      </BlackboardContainer>
    </TopContainer>
  );
};
export default PepperoniMakerOrderReviewBoard;
