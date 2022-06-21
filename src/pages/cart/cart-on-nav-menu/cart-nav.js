import { useSelector, useDispatch } from "react-redux";

import {
  TopContainer,
  LatestItemContainer,
  ViewCartButton,
} from "./cart-nav-styled-components";
import { Typography } from "@mui/material";
import { useState } from "react";
import { storeActions } from "../../../store/store";

const CartOnNavMenu = () => {
  const cartObject = useSelector((state) => state.cartObject);
  const cartButtonClosingAction = useSelector(
    (state) => state.cartButtonClosingAction
  );
  const [loadTrigger, setLoadTrigger] = useState();
  const dispatch = useDispatch();

  const deepCopyOfCartObject = JSON.parse(JSON.stringify(cartObject));
  /// Latest Item Name
  // since we are pushing the items the latest item is at the end of the cart object

  const renderReadyCartItems = deepCopyOfCartObject.map((item, index) => {
    return (
      <LatestItemContainer key={index}>
        <Typography
          variant="p"
          sx={{
            color: "secondary.light",
            textAlign: "left",
          }}
        >
          {item.title}
        </Typography>
        <Typography variant="p" sx={{ color: "secondary.light" }}>
          {`$${item.totalPrice}`}
        </Typography>
      </LatestItemContainer>
    );
  });

  // title: `Build a Pizza`,
  // userSelectedData: userSelectedItemWithPrice,
  // image: JSON.stringify(image),
  // totalPrice: totalPrice,

  /// Calculating the Totla Cart Price
  let totalCartPrice = 0;
  for (let item of deepCopyOfCartObject) {
    totalCartPrice = +item.totalPrice + +totalCartPrice;
  }
  totalCartPrice = `${totalCartPrice}`;
  let indexOfDecimal = totalCartPrice.indexOf(".");
  totalCartPrice = totalCartPrice.slice(0, indexOfDecimal + 3);
  totalCartPrice = +totalCartPrice;

  // Cart Button Handler
  if (!cartButtonClosingAction) {
    setTimeout(() => {
      setLoadTrigger(true);
    }, "10");
  }

  console.log(cartButtonClosingAction);
  if (cartButtonClosingAction) {
    setTimeout(() => {
      dispatch(storeActions.setCartButtonClicked(false));
      dispatch(storeActions.setCartButtonClosingAction(false));
      setLoadTrigger(false);
    }, "1200");
  }
  let topOffset = 0;
  if (loadTrigger && !cartButtonClosingAction) {
    topOffset = "65px";
  } else if (loadTrigger && cartButtonClosingAction) {
    topOffset = "-100%";
  }
  return (
    <TopContainer sx={{ top: `${topOffset}` }}>
      {renderReadyCartItems}
      <LatestItemContainer sx={{ borderTop: "2px solid white" }}>
        <Typography
          variant="p"
          sx={{
            color: "secondary.light",
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          Total Price :
        </Typography>
        <Typography
          variant="p"
          sx={{ color: "secondary.light", marginTop: "10px", fontSize: "20px" }}
        >
          {`$${totalCartPrice}`}
        </Typography>
      </LatestItemContainer>
      <ViewCartButton>View Cart</ViewCartButton>
    </TopContainer>
  );
};
export default CartOnNavMenu;
