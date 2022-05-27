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
  placeItems: "center",
  position: "relative",
  backgroundImage: `url(https://www.toptal.com/designers/subtlepatterns/uploads/diagonal-squares.png)`,
}));

const LeftSliderButton = styled("button", {
  name: "SliderButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(50px,50px)",
  height: "max(50px,50px)",
  backgroundColor: theme.palette.primary.main,
  border: "none",
  color: theme.palette.secondary.light,

  placeItems: "center",
  position: "absolute",
  top: "50%",
  left: "40px",
  transform: "translateY(-50%)",
  borderRadius: "50%",
  zIndex: 2,
  display: "grid",

  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
const RightSliderButton = styled("button", {
  name: "SliderButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(50px,50px)",
  height: "max(50px,50px)",
  backgroundColor: theme.palette.primary.main,
  border: "none",
  color: theme.palette.secondary.light,
  placeItems: "center",
  position: "absolute",
  top: "50%",
  right: "50px",
  transform: "translateY(-50%)",
  borderRadius: "50%",
  zIndex: 2,

  display: "grid",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
const ImageContainer = styled("div", {
  name: "ImageContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "min(1200px,1200px)",
  height: "min(92.5%,92.5%)",
  position: "relative",
  display: "grid",
  placeItems: "center",
  borderRadius: "15px",
}));

export {
  PhotoGalleryContainer,
  LeftSliderButton,
  RightSliderButton,
  ImageContainer,
};
