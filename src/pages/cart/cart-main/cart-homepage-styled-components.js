import { styled, Typography, Grid } from "@mui/material";
import plankImage from "../../../img/full-menu/plank.jpg";

import DeleteIcon from "@mui/icons-material/Delete";
const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  minHeight: "calc(100vh - 370px)",
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
  gridTemplateColumns: "60% max-content max-content",

  position: "relative",
  marginTop: "10px",
  marginBottom: "10px",
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
  gridTemplateColumns: "100px 60% max-content max-content",
  gap: "10px",
  position: "relative",
  marginTop: "10px",
  marginBottom: "10px",
}));

const TrashIcon = styled(DeleteIcon, {
  name: "TrashIcon",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(40px,40px)",
  height: "max(40px,40px)",
  marginRight: "10px",
  backgroundColor: "transparent",
  color: theme.palette.secondary.light,
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
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
})(({ theme }) => ({
  width: "max(100px,100px)",
  height: "max(100px,100px)",
  backgroundColor: "inherit",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  marginLeft: "20px",
  marginRight: "10px",
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
