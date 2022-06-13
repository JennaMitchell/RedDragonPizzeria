import { Checkbox, styled } from "@mui/material";
import { Button } from "@mui/material";
const PopupButton = styled(Button, {
  name: "BoardImageContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "min(max-content,max-content)",
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.secondary.light,

  padding: "10px 25px 10px 25px",
  display: "grid",
  placeItems: "center",
  position: "relative",
  borderRadius: "3px",
  boxShadow: "0 0 10px black",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const SpaceBetweenContainer = styled("div", {
  name: "SpaceBetweenContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "max-content max-content",

  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledCheckBox = styled(Checkbox, {
  name: "StyledCheckBox",
  slot: "Wrapper",
})(({ theme }) => ({
  color: theme.palette.secondary.light,
  padding: "5px",
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));
export { PopupButton, SpaceBetweenContainer, StyledCheckBox };
