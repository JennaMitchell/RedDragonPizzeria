import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button, {
  name: "StyledButton",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.light,
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },
}));
const MenuSelectorContainer = styled("div", {
  name: "MenuSelectorContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(50px,50px)",
  backgroundColor: theme.palette.secondary.dark,
  border: "none",
  borderRadius: "25px",
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(5,1fr)",
  position: "relative",
}));

export { StyledButton, MenuSelectorContainer };
