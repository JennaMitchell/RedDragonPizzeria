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
  const popupActive = useSelector((state) => state.popupActive);

  return (
    <TopContainer sx={{ width: `${popupActive && "100vw"}` }}>
      <GridContainer>
        <BlackboardTitleContainer>
          <TitleContainer>
            <StyledTypography
              variant="h2"
              sx={{
                "@media(max-width:470px)": {
                  fontSize: "42px",
                },
              }}
            >
              Online Order
            </StyledTypography>
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
