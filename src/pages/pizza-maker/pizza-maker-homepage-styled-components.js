import { styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CancelIcon from "@mui/icons-material/Cancel";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import plankImage from "../../img/full-menu/plank.jpg";

import { Typography } from "@mui/material";
import tableImage from "../../img/pizza-maker/table/wood-table-cropped.png";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(1200px,1200px)",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  placeItems: "center",
  position: "relative",
  borderBottom: "1px solid white",
  backgroundImage:
    "url(https://www.toptal.com/designers/subtlepatterns/uploads/diagonal-squares.png)",
  overflowX: "hidden",
}));

const NewPizzaButton = styled(CancelIcon, {
  name: "NewPizzaButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(60px,60px)",
  height: "max(60px,60px)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  top: "100px",
  right: "100px",
  color: theme.palette.secondary.light,
  transition: "all 0.5s ease-in",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));

const PurchaseButton = styled(AddShoppingCartIcon, {
  name: "PurchaseButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(54px,54px)",
  height: "max(54px,54px)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  top: "200px",
  right: "104px",
  color: theme.palette.secondary.dark,
  padding: "11.5px 7.5px 7.5px 8.5px",

  backgroundColor: theme.palette.secondary.light,
  borderRadius: "50%",
  transition: "all 0.5s ease-in",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const PurchaseButtonDisabled = styled(AddShoppingCartIcon, {
  name: "PurchaseButtonDisabled",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(54px,54px)",
  height: "max(54px,54px)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  top: "200px",
  right: "104px",
  color: theme.palette.secondary.dark,
  padding: "11.5px 7.5px 7.5px 8.5px",

  backgroundColor: theme.palette.secondary.main,
  borderRadius: "50%",
}));

const KitchenTableContainer = styled("div", {
  name: "KitchenTableContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(1000px,1000px)",
  height: "max(600px,600px)",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  alignItems: "center",
  justifyContent: "space-evenly",
  position: "relative",

  boxShadow: "0 0 20px black",
  border: "1px solid black",
  backgroundImage: `url(${tableImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",
}));

const PizzaPanContainer = styled("img", {
  name: "PizzaPanContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(400px,400px)",
  height: "max(400px,400px)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
  position: "absolute",

  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 2,
}));

const PizzaPeelWithPan = styled("img", {
  name: "PizzaPeelWithPan",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(1200px,1200px)",
  height: "max(400px,400px)",

  display: "grid",
  placeItems: "center",
  position: "absolute",
  transition: "all 1.5s",

  top: "35%",
  right: "-1200px",
  zIndex: 3,
}));
const PizzaPeelWithoutPan = styled("img", {
  name: "PizzeaPeelWithoutPan ",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(1200px,1200px)",
  height: "max(400px,400px)",

  display: "grid",
  placeItems: "center",
  position: "absolute",
  transition: "all 1.5s",

  top: "35%",
  right: "-1200px",
  zIndex: 3,
}));
const MenuButton = styled("div", {
  name: "MenuButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(60px,60px)",
  height: "max(60px,60px)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  top: "100px",
  left: "0px",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  transition: "all 0.5s",

  backgroundColor: theme.palette.secondary.light,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
const OpenMenuIcon = styled(ArrowForwardIosIcon, {
  name: "OpenMenuIcon",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(70%,70%)",
  height: "max(70%,70%)",
  display: "grid",
  placeItems: "center",
  color: theme.palette.secondary.dark,
  transition: "all 0.5s ease-in",
}));

const CloseMenuIcon = styled(ArrowBackIosNewIcon, {
  name: "CloseMenuIcon",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(70%,70%)",
  height: "max(70%,70%)",
  display: "grid",
  placeItems: "center",
  color: theme.palette.secondary.dark,
  transition: "all 0.5s ease-in",
}));

const MainTitle = styled(Typography, {
  name: "MainTitle",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  placeItems: "center",
  border: "2px solid black",

  color: theme.palette.secondary.light,
  backgroundColor: theme.palette.secondary.dark,
  padding: "15px 30px 15px 30px",
  borderRadius: "10px",
  fontFamily: "Fredericka the Great ,cursive",
}));
const MainTitleContainer = styled("div", {
  name: "MainTitleContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  top: "12.5%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  boxShadow: "0 0 10px black",
  padding: "12.5px",
  border: "2px solid black",
  backgroundImage: `url(${plankImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "none",
  borderRadius: "10px",
}));
const DarkBackground = styled("div", {
  name: "DarkBackground",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  display: "grid",
  placeItems: "center",
  position: "fixed",
  top: "0",
  left: "0",
  transition: "all 2s",
  zIndex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.65)",
}));

export {
  TopContainer,
  NewPizzaButton,
  PurchaseButton,
  PurchaseButtonDisabled,
  KitchenTableContainer,
  PizzaPanContainer,
  PizzaPeelWithPan,
  PizzaPeelWithoutPan,
  MenuButton,
  OpenMenuIcon,
  CloseMenuIcon,
  MainTitle,
  MainTitleContainer,
  DarkBackground,
};
