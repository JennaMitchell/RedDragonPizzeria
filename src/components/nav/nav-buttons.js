import { Typography } from "@mui/material";
import { LocalPhone, ShoppingCart } from "@mui/icons-material";
import {
  PhoneContainer,
  ShoppingCartItemsTracker,
  ShoppingCartContainer,
  ButtonContainer,
  MenuIconContainer,
} from "./nav-buttons-styled-components";
import {
  StyledInActiveNavLink,
  StyledActiveNavLink,
} from "../../generic-styled-components/generic-styled-components";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { storeActions } from "../../store/store";

const NavButtons = () => {
  const buttonLimitReached = useMediaQuery("(max-width:1500px)");
  const navMenuButtonClicked = useSelector(
    (state) => state.navMenuButtonClicked
  );
  const pizzaToppingsMenuActive = useSelector(
    (state) => state.pizzaToppingsMenuActive
  );
  const homeButtonHandler = () => {
    dispatch(storeActions.setNavMenuButtonClicked(false));
    dispatch(storeActions.setActiveNavButton("Home"));
  };
  const menuButtonHandler = () => {
    dispatch(storeActions.setNavMenuButtonClicked(false));
    dispatch(storeActions.setActiveNavButton("Menu"));
  };
  const pizzaMakerButtonHandler = () => {
    dispatch(storeActions.setNavMenuButtonClicked(false));
    dispatch(storeActions.setActiveNavButton("Pizza Maker"));
  };
  const orderOnlineButtonHandler = () => {
    dispatch(storeActions.setNavMenuButtonClicked(false));
    dispatch(storeActions.setActiveNavButton("Order Online"));
  };
  const creditsButtonHandler = () => {
    dispatch(storeActions.setNavMenuButtonClicked(false));
    dispatch(storeActions.setActiveNavButton("Credits"));
  };

  const cartHandler = () => {
    dispatch(storeActions.setActiveNavButton(""));
  };

  const activeNavButton = useSelector((state) => state.activeNavButton);
  const buttonTitles = [
    { title: "Home", function: homeButtonHandler, navLink: "/home" },
    { title: "Menu", function: menuButtonHandler, navLink: "/menu" },
    {
      title: "Pizza Maker",
      function: pizzaMakerButtonHandler,
      navLink: "/pizza-maker",
    },
    {
      title: "Order Online",
      function: orderOnlineButtonHandler,
      navLink: "/order-online",
    },
    {
      title: "Credits",
      function: creditsButtonHandler,
      navLink: "/credits",
    },
  ];
  const dispatch = useDispatch();
  const navMenuHandler = () => {
    if (pizzaToppingsMenuActive) {
      dispatch(storeActions.setPizzaToppingsMenuActive(false));
    }
    dispatch(storeActions.setNavMenuButtonClicked(!navMenuButtonClicked));
  };

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

  // Active Nav Buttons

  const renderReadyNavButtons = buttonTitles.map((object, index) => {
    if (activeNavButton === object.title) {
      return (
        <StyledActiveNavLink
          key={index}
          onClick={object.function}
          to={object.navLink}
        >
          {object.title}
        </StyledActiveNavLink>
      );
    } else {
      return (
        <StyledInActiveNavLink
          key={index}
          onClick={object.function}
          to={object.navLink}
        >
          {object.title}
        </StyledInActiveNavLink>
      );
    }
  });

  return (
    <>
      <ButtonContainer>
        <PhoneContainer
          sx={{
            "@media (max-width:1200px)": {
              marginRight: "5px",
            },
          }}
        >
          <LocalPhone
            sx={{
              "@media (max-width:895px)": {
                width: "max(20px,20px)",
                height: "max(20px,20px)",
              },
              "@media (max-width:770px)": {
                width: "max(16px,16px)",
                height: "max(16px,16px)",
              },
              "@media(max-width:630px)": {
                width: "max(14px,14px)",
                height: "max(14px,14px)",
              },
              "@media(max-width:465px)": {
                width: "max(12px,12px)",
                height: "max(12px,12px)",
              },
            }}
            color="primary.light"
          />
          <Typography
            sx={{
              "@media(max-width:1255px)": {
                fontSize: "18px",
              },
              "@media(max-width:780px)": {
                fontSize: "14px",
              },
              "@media(max-width:630px)": {
                fontSize: "12px",
              },
              "@media(max-width:465px)": {
                fontSize: "10px",
              },
              "@media(max-width:405px)": {
                fontSize: "9px",
              },
            }}
            varaint="h3"
          >
            +1 (555) 555-5555
          </Typography>
        </PhoneContainer>
        {!buttonLimitReached && <>{renderReadyNavButtons}</>}
        {buttonLimitReached && (
          <MenuIconContainer>
            <MenuIcon
              onClick={navMenuHandler}
              sx={{
                backgroundColor: `${
                  navMenuButtonClicked ? "secondary.light" : "secondary.dark"
                }`,
                color: `${
                  navMenuButtonClicked ? "secondary.dark" : "secondary.light"
                }`,
                transition: "all 1s",
                height: "max(30px,30px)",
                width: "max(30px,30px)",
                padding: "7.5px",
                boxSizing: "content-box",
                borderRadius: "50%",
                "@media (max-width:895px)": {
                  width: "max(24px,24px)",
                  height: "max(24px,24px)",
                },
                "@media (max-width:770px)": {
                  width: "max(20px,20px)",
                  height: "max(20px,20px)",
                },
                "@media(max-width:630px)": {
                  width: "max(16px,16px)",
                  height: "max(16px,16px)",
                },
                "@media(max-width:405px)": {
                  width: "max(12px,12px)",
                  height: "max(12px,12px)",
                  padding: "5px",
                },

                "&:hover": {
                  backgroundColor: "secondary.light",
                  color: "secondary.dark",
                },
              }}
            />
          </MenuIconContainer>
        )}

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
          <NavLink to="/cart" onClick={cartHandler}>
            <ShoppingCartItemsTracker
              sx={{
                backgroundColor: `${cartHoverActive && "secondary.light"}`,
                color: `${cartHoverActive && "secondary.dark"}`,
              }}
            >
              {lengthOfCartObject}
            </ShoppingCartItemsTracker>
            <ShoppingCart
              sx={{
                color: "secondary.light",
                marginTop: "5px",
                "@media (max-width:895px)": {
                  width: "max(20px,20px)",
                  height: "max(20px,20px)",
                },

                "@media(max-width:630px)": {
                  width: "max(16px,16px)",
                  height: "max(16px,16px)",
                },
                "@media(max-width:405px)": {
                  width: "max(12px,12px)",
                  height: "max(12px,12px)",
                },
              }}
            />
          </NavLink>
        </ShoppingCartContainer>
      </ButtonContainer>
    </>
  );
};
export default NavButtons;
