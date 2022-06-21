import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const ButtonContainer = styled("div", {
  name: "ButtonContainer",
  slot: "Wrapper",
})({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateColumns: "repeat(6,max-content)",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: "20px",
});

const StyledButton = styled(Button, {
  name: "StyledButton",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.light,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },
}));

const StyledHomeButton = styled(Button, {
  name: "StyledHomeButton",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.light,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },
}));

const ShoppingCartContainer = styled("div", {
  name: "ShoppingCartContainer",
  slot: "Wrapper",
})({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  position: "relative",
  padding: "10px",
  borderRadius: "50%",
  transition: "all 0.5s",
});

const ShoppingCartItemsTracker = styled("div", {
  name: "ShoppingCartItemsTracker",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  padding: "4px 6px 4px 6px",
  position: "absolute",
  top: "0px",
  right: "0px",
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.light,
  borderRadius: "50%",
  textAlign: "center",
  lineHeight: "12px",
  fontSize: "12px",
  fontWeight: "700",
  transition: "all 0.5s",
}));
const PhoneContainer = styled("div", {
  name: "PhoneContainer",
  slot: "Wrapper",
})({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateColumns: "repeat(2,max-content)",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});
export {
  PhoneContainer,
  ShoppingCartItemsTracker,
  ShoppingCartContainer,
  ButtonContainer,
  StyledButton,
  StyledHomeButton,
};
