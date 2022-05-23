import { styled } from "@mui/material/styles";

const PhotoGalleryContainer = styled("div", {
  name: "ShoppingCartItemsTracker",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(800px,800px)",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.light,
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
}));

export { PhotoGalleryContainer };
