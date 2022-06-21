import {
  TopContainer,
  BlackboardContainer,
  OrderedItemsContainer,
  HorizontalChalkUnderline,
  StyledTypography,
  ListItemContainer,
} from "./build-a-pizza-order-review-board-styled-components";
import { useSelector } from "react-redux";
import chalkUnderline from "../../../../img/line-art/underlines/chalk_underline_horizontal.png";

import customPizzaPriceCalculator from "../../../../components/custom-hooks/custom-pizza-price-calculator";

const BuildAPizzaOrderReviewBoard = () => {
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );

  const [userSelectedItemWithPrice, totalPrice] = customPizzaPriceCalculator(
    buildAPizzaUserSelectedObject
  );

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
export default BuildAPizzaOrderReviewBoard;
