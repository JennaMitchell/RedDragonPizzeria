import { AppBar } from "@mui/material";
import {
  LogoTitleContainer,
  LogoImage,
  LogoContainer,
  StyledToolBar,
  RoofSvgContainer,
  MenuButtonsContainer,
} from "./nav-bar-styled-components";
import logo from "../../img/logo/logo.png";
import { Typography } from "@mui/material";
import NavButtons from "./nav-buttons";
import { useSelector } from "react-redux";
import roof from "../../img/homepage/roof.png";
import { useDispatch } from "react-redux";

import {
  StyledInActiveNavLink,
  StyledActiveNavLink,
} from "../../generic-styled-components/generic-styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { storeActions } from "../../store/store";
const NavBar = () => {
  const dispatch = useDispatch();
  const navMenuButtonClicked = useSelector(
    (state) => state.navMenuButtonClicked
  );
  const pepperoniDragEventActive = useSelector(
    (state) => state.pepperoniDragEventActive
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
  ];

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

  const buttonLimitReached = useMediaQuery("(max-width:1200px)");
  let dropMenu = false;
  let roofZIndexChanged = false;
  if (navMenuButtonClicked) {
    if (buttonLimitReached) {
      dropMenu = true;
    } else {
      dropMenu = false;
    }
  }
  if (pepperoniDragEventActive) {
    dropMenu = false;
  }
  // handeling roof SVG zindex based on the pizaz toppings menu having been moved out or not

  if (pizzaToppingsMenuActive) {
    if (!pepperoniDragEventActive) {
      roofZIndexChanged = true;
    }
  }
  if (buttonLimitReached) {
    roofZIndexChanged = true;
  }

  return (
    <>
      <AppBar
        color="primary"
        sx={{
          position: "relative",
          zIndex: `${pepperoniDragEventActive ? "1" : "3"}`,
          boxShadow: "0",

          "@media (max-width:1050px)": {
            minHeight: "80px",
          },
          "@media (max-width:880px)": {
            minHeight: "60px",
          },
        }}
      >
        <StyledToolBar>
          <LogoTitleContainer>
            <LogoContainer
              sx={{
                position: "relative",
                "@media (max-width:1300px)": {
                  marginLeft: "0px",
                },
              }}
            >
              <LogoImage alt="logo" src={logo} />
            </LogoContainer>
            <Typography
              variant="h4"
              sx={{
                "@media (max-width:1300px)": {
                  fontSize: "28px",
                },
                "@media (max-width:1050px)": {
                  fontSize: "20px",
                },
                "@media (max-width:880px)": {
                  fontSize: "18px",
                },
              }}
            >
              Red Dragon Pizzeria
            </Typography>
          </LogoTitleContainer>
          <NavButtons />
        </StyledToolBar>
      </AppBar>
      <RoofSvgContainer
        src={roof}
        alt="roof"
        sx={{
          zIndex: `${roofZIndexChanged ? "5" : "1"}`,
        }}
      />
      <MenuButtonsContainer
        sx={{
          top: `${dropMenu && "90px"}`,

          "@media(max-width:850px)": {
            top: `${dropMenu && "60px"}`,
            right: "0",
          },
        }}
      >
        {renderReadyNavButtons}
      </MenuButtonsContainer>
    </>
  );
};

export default NavBar;
