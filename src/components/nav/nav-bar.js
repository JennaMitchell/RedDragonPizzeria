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

const NavBar = () => {
  return (
    <AppBar color="primary" sx={{ position: "relative" }} position="relative">
      <StyledToolBar>
        <LogoTitleContainer>
          <LogoContainer>
            <LogoImage alt="logo" src={logo} />
          </LogoContainer>
          <Typography variant="h4">Red Dragon Pizzeria</Typography>
        </LogoTitleContainer>
        <NavButtons />
      </StyledToolBar>
      <RoofSvgContainer />
    </AppBar>
  );
};

export default NavBar;
