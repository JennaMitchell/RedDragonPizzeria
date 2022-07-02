import { styled, Typography, Grid } from "@mui/material";
import plankImage from "../../img/full-menu/plank.jpg";

import DeleteIcon from "@mui/icons-material/Delete";
const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  minHeight: "calc(100vh - 270px)",
  maxHeight: "max-content",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",

  placeItems: "center",
  position: "relative",
  borderBottom: "1px solid white",
  backgroundImage:
    "url(https://www.toptal.com/designers/subtlepatterns/uploads/diagonal-squares.png)",
  overflowX: "hidden",
}));

const MenuPlankContainer = styled("div", {
  name: "MenuPlankContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(40%,40%)",
  height: "max(max-content,max-content)",
  display: "grid",
  placeItems: "center",
  position: "relative",

  backgroundImage: `url(${plankImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  boxShadow: "0 0 30px black",
  borderRadius: "10px",
  padding: "20px",
  marginTop: "60px",
  marginBottom: "80px",
  "@media(max-width:1800px)": {
    width: "max(60%,60%)",
  },

  "@media(max-width:1100px)": {
    width: "max(80%,80%)",
  },
  "@media(max-width:850px)": {
    width: "max(90%,90%)",
  },
  "@media(max-width:690px)": {
    width: "max(90%,90%)",
  },
}));
const MenuBlackboardContainer = styled("div", {
  name: "MenuBlackboardContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.secondary.dark,
  border: "3px solid black",
  display: "flex",
  position: "relative",

  alignItems: "center",
  justifyItems: "center",
  borderRadius: "10px",
}));

const OrderedItemsContainer = styled(Grid, {
  name: "OrderedItemsContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  marginTop: "10px",
  marginBottom: "10px",
}));
const StyledTypography = styled(Typography, {
  name: "StyledTypography",
  slot: "Wrapper",
})(({ theme }) => ({
  fontFamily: "Fredericka the Great ,cursive",
  color: theme.palette.secondary.light,
}));
const NonCustomItemContainer = styled("div", {
  name: "NonCustomItemContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "grid",
  alignItems: "center",
  justifyContent: "space-between",
  gridTemplateColumns: "75% max-content",

  position: "relative",
  marginTop: "10px",
}));
const CustomItemContainer = styled("div", {
  name: "CustomItemContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "grid",

  alignItems: "center",
  justifyContent: "space-between",
  gridTemplateColumns: "100px 270px max-content",
  gridTemplateRows: "max-content",
  gap: "10px",
  position: "relative",
  marginTop: "10px",
  marginBottom: "10px",
  "@media(max-width:690px)": {
    gap: "0px",
  },
  "@media(max-width:600px)": {
    gridTemplateColumns: "max-content 200px max-content",
  },
  "@media(max-width:450px)": {
    gridTemplateColumns: "max-content 140px max-content",
  },
  "@media(max-width:420px)": {
    gridTemplateColumns: "max-content 130px max-content",
  },
}));

const TrashIcon = styled(DeleteIcon, {
  name: "TrashIcon",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(30px,30px)",
  height: "max(30px,30px)",
  marginRight: "10px",
  backgroundColor: "transparent",
  color: theme.palette.secondary.light,
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "0%",
  right: "-108%",
  transform: "translate(-100%,-30%)",

  padding: "5px",
  borderRadius: "50%",
  marginTop: "10px",
  marginBottom: "10px",
  transition: "all 1s",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },
}));
const HorizontalChalkUnderline = styled("img", {
  name: "BlackboardContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(90%,90%)",
  height: "max(10px,10px)",
  backgroundColor: "transparent",
  display: "grid",
  position: "relative",
  placeItems: "center",
}));

const PizzaImage = styled("img", {
  name: "PizzaImage",
  slot: "Wrapper",
})(() => ({
  width: "max(100px,100px)",
  height: "max(100px,100px)",
  backgroundColor: "inherit",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  marginLeft: "20px",
  marginRight: "10px",
  "@media(max-width:690px)": {
    marginLeft: "10px",
  },
}));

export {
  TopContainer,
  MenuPlankContainer,
  MenuBlackboardContainer,
  OrderedItemsContainer,
  StyledTypography,
  NonCustomItemContainer,
  CustomItemContainer,
  TrashIcon,
  HorizontalChalkUnderline,
  PizzaImage,
};
