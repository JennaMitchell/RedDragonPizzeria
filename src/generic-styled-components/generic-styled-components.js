import { styled } from "@mui/material/styles";
const SmallSectionContainerSecondaryDark = styled("div", {
  name: "ShoppingCartItemsTracker",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(800px,800px)",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.light,
}));

export { SmallSectionContainerSecondaryDark };
