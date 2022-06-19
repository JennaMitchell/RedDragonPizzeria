import {
  TopContainer,
  StyledTypography,
  BlackboardTitleContainer,
  TitleContainer,
  GridContainer,
} from "./order-online-homepage-styled-components";
// import OrderTypePopup from "./popups/order-type-popup";
import OrderOnlineNavMenu from "./order-online-nav-menu";

import OrderOnlineMenuBlackboard from "./order-online-menu-blackboard";
import { useSelector } from "react-redux";

const OrderOnlineHomepage = () => {
  const onlineOrderClickedSection = useSelector(
    (state) => state.onlineOrderClickedSection
  );

  return (
    <TopContainer>
      <GridContainer>
        <BlackboardTitleContainer>
          <TitleContainer>
            <StyledTypography variant="h2">Online Order</StyledTypography>
          </TitleContainer>
        </BlackboardTitleContainer>
        <OrderOnlineNavMenu />
        <OrderOnlineMenuBlackboard
          selectedMenuItem={onlineOrderClickedSection}
        />
      </GridContainer>
    </TopContainer>
  );
};
export default OrderOnlineHomepage;
