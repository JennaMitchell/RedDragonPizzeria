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
const NavButtons = () => {
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
      <StyledButton variant="contained">Pizza Maker</StyledButton>
      <StyledButton variant="contained">Order Online</StyledButton>
      <ShoppingCartContainer>
        <ShoppingCartItemsTracker>0</ShoppingCartItemsTracker>
        <ShoppingCart color="secondary.light" />
      </ShoppingCartContainer>
    </ButtonContainer>
  );
};
export default NavButtons;
