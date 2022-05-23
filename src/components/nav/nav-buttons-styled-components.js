import { styled } from "@mui/material/styles";

const ButtonContainer = styled("div", {
  name: "ButtonContainer",
  slot: "Wrapper",
})({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateColumns: "repeat(4,max-content)",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: "20px",
});

const ShoppingCartContainer = styled("div", {
  name: "ShoppingCartContainer",
  slot: "Wrapper",
})({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  position: "relative",
});

const ShoppingCartItemsTracker = styled("div", {
  name: "ShoppingCartItemsTracker",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  padding: "4px 6px 4px 6px",
  position: "absolute",
  top: "-6px",
  right: "-8px",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.light,
  borderRadius: "50%",
  textAlign: "center",
  lineHeight: "12px",
  fontSize: "12px",
  fontWeight: "700",
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
};
