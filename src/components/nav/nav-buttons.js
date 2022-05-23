import { Button, Typography } from "@mui/material";
import { LocalPhone, ShoppingCart } from "@mui/icons-material";
import {
  PhoneContainer,
  ShoppingCartItemsTracker,
  ShoppingCartContainer,
  ButtonContainer,
} from "./nav-buttons-styled-components";

const NavButtons = () => {
  return (
    <ButtonContainer>
      <PhoneContainer>
        <LocalPhone color="primary.light" />
        <Typography varaint="h3">+1 (555) 555-5555</Typography>
      </PhoneContainer>
      <Button variant="contained" color="secondary">
        Menu
      </Button>
      <Button variant="contained" color="secondary">
        Order Online
      </Button>
      <ShoppingCartContainer>
        <ShoppingCartItemsTracker>0</ShoppingCartItemsTracker>
        <ShoppingCart color="secondary" />
      </ShoppingCartContainer>
    </ButtonContainer>
  );
};
export default NavButtons;
