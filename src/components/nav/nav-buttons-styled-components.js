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
  "@media (max-width:1050px)": {
    gap: "10px",
  },
  "@media (max-width:880px)": {
    gap: "5px",
  },
});

const StyledButton = styled(Button, {
  name: "StyledButton",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.light,
  width: "max(max-content,max-content)",
  "@media (max-width:1300px)": {
    fontSize: "10px",
  },
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
  "@media (max-width:1300px)": {
    fontSize: "10px",
  },
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

  "@media (max-width:760px)": {
    padding: "5px",
  },
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
  "@media(max-width:747px)": {
    padding: "2px 2px 2px 2px",
    fontSize: "10px",
  },
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
  "@media(max-width:880px)": {
    gap: "5px",
  },
});
export {
  PhoneContainer,
  ShoppingCartItemsTracker,
  ShoppingCartContainer,
  ButtonContainer,
  StyledButton,
  StyledHomeButton,
};
