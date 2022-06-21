import { AppBar } from "@mui/material";
import {
  LogoTitleContainer,
  LogoImage,
  LogoContainer,
  StyledToolBar,
  RoofSvgContainer,
} from "./nav-bar-styled-components";
import logo from "../../img/logo/logo.png";
import { Typography } from "@mui/material";
import NavButtons from "./nav-buttons";
import { useSelector } from "react-redux";
import CartOnNavMenu from "../../pages/cart/cart-on-nav-menu/cart-nav";

const NavBar = () => {
  const cartButtonClicked = useSelector((state) => state.cartButtonClicked);
  return (
    <>
      <AppBar
        color="primary"
        sx={{ position: "relative", zIndex: 3 }}
        position="relative"
      >
        <StyledToolBar sx={{ zIndex: 3 }}>
          <LogoTitleContainer>
            <LogoContainer>
              <LogoImage alt="logo" src={logo} />
            </LogoContainer>
            <Typography variant="h4">Red Dragon Pizzeria</Typography>
          </LogoTitleContainer>
          <NavButtons />
        </StyledToolBar>
        <RoofSvgContainer sx={{ zIndex: `${cartButtonClicked && `3`}` }} />
      </AppBar>

      {cartButtonClicked && <CartOnNavMenu sx={{ top: "300px" }} />}
    </>
  );
};

export default NavBar;
