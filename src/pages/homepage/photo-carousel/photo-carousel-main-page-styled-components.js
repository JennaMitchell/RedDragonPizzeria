import { styled } from "@mui/material/styles";

const PhotoGalleryContainer = styled("div", {
  name: "ShoppingCartItemsTracker",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",

  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.light,
  display: "grid",
  placeItems: "center",
  position: "relative",
  paddingTop: "15px",
  paddingBottom: "10px",
  backgroundImage: `url(https://www.toptal.com/designers/subtlepatterns/uploads/diagonal-squares.png)`,
  "@media (max-width:1250px)": {
    paddingBottom: "0px",
  },
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
  "@media (max-width:1000px)": {
    width: "max(50px,50px)",
    height: "max(50px,50px)",
  },
  "@media (max-width:800px)": {
    width: "max(40px,40px)",
    height: "max(40px,40px)",
    left: "30px",
  },
  "@media (max-width:700px)": {
    width: "max(30px,30px)",
    height: "max(30px,30px)",
    left: "20px",
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
  "@media (max-width:1000px)": {
    width: "max(50px,50px)",
    height: "max(50px,50px)",
    right: "50px",
  },
  "@media (max-width:800px)": {
    width: "max(40px,40px)",
    height: "max(40px,40px)",
    right: "40px",
  },
  "@media (max-width:700px)": {
    width: "max(30px,30px)",
    height: "max(30px,30px)",
    right: "30px",
  },
}));
const ImageContainer = styled("div", {
  name: "ImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "min(80%,1200px)",
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
