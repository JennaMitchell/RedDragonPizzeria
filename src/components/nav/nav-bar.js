import { AppBar } from "@mui/material";
import {
  LogoTitleContainer,
  LogoImage,
  LogoContainer,
  StyledToolBar,
} from "./nav-bar-styled-components";
import logo from "../../img/logo.jpg";
import { Typography } from "@mui/material";
import NavButtons from "./nav-buttons";

const NavBar = () => {
  return (
    <AppBar color="primary" position="relative">
      <StyledToolBar>
        <LogoTitleContainer>
          <LogoContainer>
            <LogoImage alt="logo" src={logo} />
          </LogoContainer>
          <Typography variant="h4">Red Dragon Pizzeria</Typography>
        </LogoTitleContainer>
        <NavButtons />
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
