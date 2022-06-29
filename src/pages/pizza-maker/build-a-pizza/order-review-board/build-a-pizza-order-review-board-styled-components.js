import { styled, Typography, Grid } from "@mui/material";

import plankImage from "../../../../img/full-menu/plank.jpg";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(400px,400px)",
  height: "max(90%,90%)",
  display: "grid",
  placeItems: "center",
  position: "relative",

  backgroundImage: `url(${plankImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  boxShadow: "0 0 30px black",
  borderRadius: "10px",
  "@media(max-width:1220px)": {
    height: "max(600px,600px)",
    marginBottom: "40px",
  },
}));

const BlackboardContainer = styled("div", {
  name: "BlackboardContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(90%,90%)",
  height: "max(90%,90%)",
  backgroundColor: theme.palette.secondary.dark,
  border: "3px solid black",
  display: "grid",
  position: "relative",
  gridTemplateRows: "repeat(5,max-content)",
  placeItems: "center",
  borderRadius: "10px",
}));

const OrderedItemsContainer = styled(Grid, {
  name: "OrderedItemsContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(90%,90%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  position: "relative",
  marginTop: "10px",
  marginBottom: "10px",
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
const StyledTypography = styled(Typography, {
  name: "StyledTypography",
  slot: "Wrapper",
})(({ theme }) => ({
  fontFamily: "Fredericka the Great ,cursive",
  color: theme.palette.secondary.light,
}));
const ListItemContainer = styled("div", {
  name: "ListItemContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  position: "relative",
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  justifyContent: "space-between",
  alignItems: "center",
}));

export {
  TopContainer,
  OrderedItemsContainer,
  BlackboardContainer,
  ListItemContainer,
  HorizontalChalkUnderline,
  StyledTypography,
};
