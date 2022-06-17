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

const OrderOnlineHomepage = () => {
  // const [orderTypePopupActive, setOrderTypePopupActive] = useState(true);
  // const [orderType, setOrderType] = useState("");
  // const toggleOpenHandler = (type) => {
  //   setOrderTypePopupActive(!orderTypePopupActive);
  //   setOrderType(type);
  // };
  // <OrderTypePopup
  //       toggleOpen={orderTypePopupActive}
  //       onCloseFunction={toggleOpenHandler}
  //     ></OrderTypePopup>

  return (
    <TopContainer>
      <GridContainer>
        <BlackboardTitleContainer>
          <TitleContainer>
            <StyledTypography variant="h2">Online Order</StyledTypography>
          </TitleContainer>
        </BlackboardTitleContainer>
        <OrderOnlineNavMenu />
        <OrderOnlineMenuBlackboard selectedMenuItem={"Specility Pizza"} />
      </GridContainer>
    </TopContainer>
  );
};
export default OrderOnlineHomepage;
