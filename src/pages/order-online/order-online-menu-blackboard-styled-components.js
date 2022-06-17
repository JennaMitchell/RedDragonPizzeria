import { styled } from "@mui/material";
import { Grid } from "@mui/material";
import plank from "../../img/full-menu/plank.jpg";

const BlackboardContainer = styled("div", {
  name: "BlackboardContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  display: "grid",
  placeItems: "center",
  position: "relative",
  boxShadow: "0 0 10px black",
  border: "2px solid black",
  borderRadius: "20px",
  backgroundImage: `url(${plank})`,
  overflowY: "scroll",
}));

const MenuContainer = styled("div", {
  name: "MenuContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(calc(100% - 50px),calc(100% - 50px))",
  height: "max(calc(100% - 50px),calc(100% - 50px))",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  placeItems: "center",
  position: "relative",
  border: "2px solid black",
  borderRadius: "20px",
  fontFamily: "Fredericka the Great ,cursive",
}));

const ContentMenu = styled(Grid, {
  name: "ContentMenu",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  height: "max(95%,95%)",
  backgroundColor: "inherit",

  placeItems: "center",
  position: "relative",
}));
export { BlackboardContainer, MenuContainer, ContentMenu };
