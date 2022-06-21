import { Typography } from "@mui/material";
import { LocalPhone, ShoppingCart } from "@mui/icons-material";
import {
  PhoneContainer,
  ShoppingCartItemsTracker,
  ShoppingCartContainer,
  ButtonContainer,
  StyledHomeButton,
} from "./nav-buttons-styled-components";
import { StyledButton } from "../../generic-styled-components/generic-styled-components";
import { NavLink } from "react-router-dom";
import classes from "../../generic-styled-components/navlink.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { keyframes } from "@emotion/react";

import { storeActions } from "../../store/store";
const NavButtons = () => {
  const cartObject = useSelector((state) => state.cartObject);
  const addToCartButtonClicked = useSelector(
    (state) => state.addToCartButtonClicked
  );
  const deepCopyOfCartObject = JSON.parse(JSON.stringify(cartObject));
  // to enable the use of the cart pbject we have to create a copy of it first
  const lengthOfCartObject = deepCopyOfCartObject.length;
  const dispatch = useDispatch();

  // hover effect handler
  const [cartHoverActive, setCartHoverActive] = useState(false);
  const cartButtonClicked = useSelector((state) => state.cartButtonClicked);

  const cartMouseEnterHandler = () => {
    if (lengthOfCartObject > 0) {
      setCartHoverActive(true);
    }
  };
  const cartMouseLeaveHandler = () => {
    if (lengthOfCartObject > 0) {
      setCartHoverActive(false);
    }
  };
  const cartRippleEffect = keyframes({
    "0%": { backgroundColor: "black", zIndex: "10" },
    "20%": { backgroundColor: "inherit", zIndex: "10" },
    "40%": { backgroundColor: "black", zIndex: "10" },
    "60%": { backgroundColor: "inherit", zIndex: "10" },
    "80%": { backgroundColor: "black", zIndex: "10" },
    "100%": { backgroundColor: "inherit", zIndex: "10" },
  });

  // Cart Click Handler
  const cartButtonHandler = () => {
    if (lengthOfCartObject > 0) {
      if (!cartButtonClicked) {
        dispatch(storeActions.setCartButtonClicked(true));
      } else {
        dispatch(storeActions.setCartButtonClosingAction(true));
      }
    }
  };

  return (
    <ButtonContainer>
      <PhoneContainer>
        <LocalPhone color="primary.light" />
        <Typography varaint="h3">+1 (555) 555-5555</Typography>
      </PhoneContainer>
      <StyledHomeButton variant="text">
        <NavLink to="/home" className={classes.navLink}>
          Home
        </NavLink>
      </StyledHomeButton>
      <StyledButton variant="contained">
        <NavLink to="/menu" className={classes.navLink}>
          Menu
        </NavLink>
      </StyledButton>
      <StyledButton variant="contained">
        <NavLink to="/pizza-maker" className={classes.navLink}>
          Pizza Maker
        </NavLink>
      </StyledButton>
      <StyledButton variant="contained">
        <NavLink to="/order-online" className={classes.navLink}>
          Order Online
        </NavLink>
      </StyledButton>
      <ShoppingCartContainer
        onMouseEnter={cartMouseEnterHandler}
        onMouseLeave={cartMouseLeaveHandler}
        onClick={cartButtonHandler}
        sx={{
          "&:hover": {
            backgroundColor: `${cartHoverActive && "secondary.dark"}`,
          },
          animation: `${
            addToCartButtonClicked && `${cartRippleEffect} 3000ms ease-in`
          }`,
        }}
      >
        <ShoppingCartItemsTracker
          sx={{
            backgroundColor: `${cartHoverActive && "secondary.light"}`,
            color: `${cartHoverActive && "secondary.dark"}`,
          }}
        >
          {lengthOfCartObject}
        </ShoppingCartItemsTracker>
        <ShoppingCart color="secondary.light" />
      </ShoppingCartContainer>
    </ButtonContainer>
  );
};
export default NavButtons;
