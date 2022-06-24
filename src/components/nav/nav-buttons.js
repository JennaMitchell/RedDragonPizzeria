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
import { useSelector } from "react-redux";
import { useState } from "react";
import { keyframes } from "@emotion/react";

const NavButtons = () => {
  const cartObject = useSelector((state) => state.cartObject);
  const addToCartButtonClicked = useSelector(
    (state) => state.addToCartButtonClicked
  );
  const deepCopyOfCartObject = JSON.parse(JSON.stringify(cartObject));
  // to enable the use of the cart pbject we have to create a copy of it first
  const lengthOfCartObject = deepCopyOfCartObject.length;

  // hover effect handler
  const [cartHoverActive, setCartHoverActive] = useState(false);

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

  return (
    <ButtonContainer>
      <PhoneContainer>
        <LocalPhone
          color="primary.light"
          sx={{
            "@media (max-width:1200px)": {
              fontSize: "10px",
            },
            "@media (max-width:880px)": {
              fontSize: "8px",
            },
          }}
        />
        <Typography
          varaint="h3"
          sx={{
            "@media (max-width:1200px)": {
              fontSize: "10px",
            },
            "@media (max-width:880px)": {
              fontSize: "8px",
            },
          }}
        >
          +1 (555) 555-5555
        </Typography>
      </PhoneContainer>
      <StyledHomeButton
        variant="text"
        sx={{
          "@media (max-width:1200px)": {
            fontSize: "10px",
          },
          "@media (max-width:880px)": {
            fontSize: "8px",
            padding: "7.5px",
          },
          "@media(max-width:760px)": {
            padding: "5px",
          },
          "@media(max-width:670px)": {
            padding: "2.5px",
            minWidth: "40px",
            borderRadius: "2px",
          },
        }}
      >
        <NavLink to="/home" className={classes.navLink}>
          Home
        </NavLink>
      </StyledHomeButton>
      <StyledButton
        variant="contained"
        sx={{
          "@media (max-width:1200px)": {
            fontSize: "10px",
          },
          "@media (max-width:880px)": {
            fontSize: "8px",
            padding: "7.5px",
          },
          "@media(max-width:760px)": {
            padding: "5px",
          },
          "@media(max-width:670px)": {
            padding: "2.5px",
            minWidth: "40px",
            borderRadius: "2px",
          },
        }}
      >
        <NavLink to="/menu" className={classes.navLink}>
          Menu
        </NavLink>
      </StyledButton>
      <StyledButton
        variant="contained"
        sx={{
          "@media (max-width:1200px)": {
            fontSize: "10px",
          },
          "@media (max-width:880px)": {
            fontSize: "8px",
            padding: "7.5px",
          },
          "@media(max-width:760px)": {
            padding: "5px",
          },
          "@media(max-width:670px)": {
            padding: "2.5px",
            borderRadius: "2px",
          },
        }}
      >
        <NavLink to="/pizza-maker" className={classes.navLink}>
          Pizza Maker
        </NavLink>
      </StyledButton>
      <StyledButton
        variant="contained"
        sx={{
          "@media (max-width:1200px)": {
            fontSize: "10px",
          },

          "@media (max-width:880px)": {
            fontSize: "8px",
            padding: "7.5px",
          },
          "@media(max-width:760px)": {
            padding: "5px",
          },
          "@media(max-width:670px)": {
            padding: "2.5px",
            borderRadius: "2px",
          },
        }}
      >
        <NavLink to="/order-online" className={classes.navLink}>
          Order Online
        </NavLink>
      </StyledButton>
      <ShoppingCartContainer
        onMouseEnter={cartMouseEnterHandler}
        onMouseLeave={cartMouseLeaveHandler}
        sx={{
          "&:hover": {
            backgroundColor: `${cartHoverActive && "secondary.dark"}`,
          },
          animation: `${
            addToCartButtonClicked && `${cartRippleEffect} 3000ms ease-in`
          }`,
        }}
      >
        <NavLink to="/cart" className={classes.navLink}>
          <ShoppingCartItemsTracker
            sx={{
              backgroundColor: `${cartHoverActive && "secondary.light"}`,
              color: `${cartHoverActive && "secondary.dark"}`,
            }}
          >
            {lengthOfCartObject}
          </ShoppingCartItemsTracker>
          <ShoppingCart
            color="secondary.light"
            sx={{
              "@media (max-width:895px)": {
                width: "max(20px,20px)",
                height: "max(20px,20px)",
              },
              "@media (max-width:770px)": {
                width: "max(16px,16px)",
                height: "max(16px,16px)",
              },
            }}
          />
        </NavLink>
      </ShoppingCartContainer>
    </ButtonContainer>
  );
};
export default NavButtons;
