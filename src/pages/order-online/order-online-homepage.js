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
import { useSelector, useDispatch } from "react-redux";
import { storeActions } from "../../store/store";
const OrderOnlineHomepage = () => {
  const onlineOrderClickedSection = useSelector(
    (state) => state.onlineOrderClickedSection
  );
  const popupActive = useSelector((state) => state.popupActive);
  const dispatch = useDispatch();

  const activeNavButton = useSelector((state) => state.activeNavButton);

  /// check to see if user closed  on a different tab  but re-entered on this page. causing the active button to be misaligned
  if (activeNavButton !== "Order Online") {
    dispatch(storeActions.setActiveNavButton("Order Online"));
  }
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
