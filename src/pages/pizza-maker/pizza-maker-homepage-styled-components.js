import { styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CancelIcon from "@mui/icons-material/Cancel";
import { Typography } from "@mui/material";

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
    color: theme.palette.primary.main,
  },
}));

const KitchenTableContainer = styled("img", {
  name: "KitchenTableContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(1000px,1000px)",
  height: "max(600px,600px)",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  placeItems: "center",
  position: "relative",
  boxShadow: "0 0 20px black",
  border: "1px solid black",
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
    backgroundColor: theme.palette.primary.main,
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
  position: "absolute",
  top: "12.5%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: theme.palette.secondary.light,
}));

export {
  TopContainer,
  NewPizzaButton,
  KitchenTableContainer,
  PizzaPanContainer,
  PizzaPeelWithPan,
  PizzaPeelWithoutPan,
  MenuButton,
  OpenMenuIcon,
  CloseMenuIcon,
  MainTitle,
};
