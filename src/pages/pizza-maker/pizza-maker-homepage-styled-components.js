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
  minHeight: "calc(100vh - 260px)",
  height: "max-content",
  gridTemplateRows: "max-content max-content",
  gap: "30px",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  placeItems: "center",
  position: "relative",
  borderBottom: "1px solid white",
  backgroundImage:
    "url(https://www.toptal.com/designers/subtlepatterns/uploads/diagonal-squares.png)",

  overflow: "hidden,",
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
  right: "2.5%",
  color: theme.palette.secondary.light,
  transition: "all 0.5s ease-in",
  "@media(max-width:820px) ": {
    top: "34px",
    right: "2.5%",
  },
  "@media(max-width:580px) ": {
    width: "max(50px,50px)",
    height: "max(50px,50px)",
    right: "0%",
  },

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
  top: "104px",
  right: "7.5%",
  color: theme.palette.secondary.dark,
  padding: "11.5px 7.5px 7.5px 8.5px",

  backgroundColor: theme.palette.secondary.light,
  borderRadius: "50%",
  transition: "all 0.5s ease-in",
  "@media(max-width:1450px)": {
    right: "10.5%",
  },
  "@media(max-width:820px) ": {
    top: "100px",
    right: "2.75%",
  },
  "@media(max-width:580px) ": {
    width: "max(44px,44px)",
    height: "max(44px,44px)",
    right: "0.75%",
    top: "104px",
  },

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
  top: "104px",
  right: "7.5%",
  color: theme.palette.secondary.dark,
  padding: "11.5px 7.5px 7.5px 8.5px",

  backgroundColor: theme.palette.secondary.main,
  borderRadius: "50%",
  "@media(max-width:1450px)": {
    right: "10.5%",
  },
  "@media(max-width:820px) ": {
    top: "100px",
    right: "3%",
  },
  "@media(max-width:580px) ": {
    width: "max(44px,44px)",
    height: "max(44px,44px)",
    right: "1%",
    top: "104px",
  },
}));

const KitchenTableContainer = styled("div", {
  name: "KitchenTableContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "min(90%,1000px)",
  height: "min(600px,600px)",
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
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginBottom: "40px",
  overflow: "visible",
  "@media(max-width:1220px)": {
    gridTemplateColumns: "max-content",
    alignItems: "center",
    justifyItems: "center",
    marginBottom: "0px",
  },
  "@media(max-width:660px)": {
    width: "min(100%,100%)",
  },
}));

const PizzaPanContainer = styled("img", {
  name: "PizzaPanContainer",
  slot: "Wrapper",
})(() => ({
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
})(() => ({
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
})(() => ({
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
  "@media(max-width: 600px)": {
    width: "max(50px,50px)",
    height: "max(50px,50px)",
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
  textAlign: "center",
  "@media(max-width:1650px) ": {
    fontSize: "48px",
  },
  "@media(max-width:1350px) ": {
    fontSize: "42px",
  },
  "@media(max-width:1200px) ": {
    fontSize: "36px",
  },
  "@media(max-width:820px) ": {
    fontSize: "32px",
  },
  "@media(max-width:680px) ": {
    fontSize: "26px",
  },
}));
const MainTitleContainer = styled("div", {
  name: "MainTitleContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  placeItems: "center",
  position: "relative",

  boxShadow: "0 0 10px black",
  padding: "12.5px",
  border: "2px solid black",
  backgroundImage: `url(${plankImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "none",
  borderRadius: "10px",
  marginTop: "50px",
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
