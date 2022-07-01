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
import { useSelector, useDispatch } from "react-redux";
import roof from "../../img/homepage/roof.png";

import { useBeforeunload } from "react-beforeunload";

import { storeActions } from "../../store/store";
import {
  StyledInActiveNavLink,
  StyledActiveNavLink,
} from "../../generic-styled-components/generic-styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

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

  // Handeling On Refresh Events
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );
  const pepperoniLayoutDatabase = useSelector(
    (state) => state.pepperoniLayoutDatabase
  );
  const cartObject = useSelector((state) => state.cartObject);
  const activeNavButton = useSelector((state) => state.activeNavButton);
  const popupActive = useSelector((state) => state.popupActive);

  useBeforeunload(() => {
    localStorage.setItem("refreshed", "true");
    localStorage.setItem(
      "buildAPizzaUserSelectedObject",
      JSON.stringify(buildAPizzaUserSelectedObject)
    );
    localStorage.setItem(
      "pepperoniLayoutDatabase",
      JSON.stringify(pepperoniLayoutDatabase)
    );
    localStorage.setItem("cartObject", JSON.stringify(cartObject));
    localStorage.setItem("activeNavButton", JSON.stringify(activeNavButton));
  });
  let refreshed = JSON.parse(localStorage.getItem("refreshed"));
  // buildAPizzaUserSelectedObject , pepperoniLayoutDatabase, cartObject,  activeNavButton
  if (refreshed) {
    dispatch(
      storeActions.setBuildAPizzaUserSelectedObject(
        JSON.parse(localStorage.getItem("buildAPizzaUserSelectedObject"))
      )
    );
    dispatch(
      storeActions.setPepperoniLayoutDatabase(
        JSON.parse(localStorage.getItem("pepperoniLayoutDatabase"))
      )
    );
    dispatch(
      storeActions.setCartObject(JSON.parse(localStorage.getItem("cartObject")))
    );
    dispatch(
      storeActions.setActiveNavButton(
        JSON.parse(localStorage.getItem("activeNavButton"))
      )
    );

    localStorage.removeItem("buildAPizzaUserSelectedObject");
    localStorage.removeItem("pepperoniLayoutDatabase");
    localStorage.removeItem("cartObject");
    localStorage.removeItem("activeNavButton");
    localStorage.setItem("refreshed", "false");
  }

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
          width: `${popupActive && "100vw"}`,
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
                "@media(max-width:465px)": {
                  fontSize: "14px",
                },
                "@media(max-width:405px)": {
                  fontSize: "12px",
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
