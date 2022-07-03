import { styled, Typography } from "@mui/material";
import horizontalPlank from "../../img/full-menu/plank.jpg";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  color: theme.palette.secondary.light,
  width: "max(100%,100%)",
  minHeight: "calc(100vh - 260px)",
  height: "max-content",
  maxHeight: "max-content",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  position: "relative",
  borderBottom: "1px solid white",
  backgroundImage:
    "url(https://www.toptal.com/designers/subtlepatterns/uploads/diagonal-squares.png)",
  overflowX: "hidden",
  overflowY: "hidden",
  "@media(max-width:540px)": {
    minHeight: "max-content",
    height: "max-content",
    maxHeight: "max-content",
  },
}));
const GridContainer = styled("div", {
  name: "GridContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  color: "inherit",
  width: "max(100%,100%)",
  height: "max(max-content,1200px)",
  backgroundColor: "transparent",
  display: "grid",
  gridTemplateRows: "max-content max-content max-content",
  gridTemplateColumns: "100%",
  placeItems: "center",
  gap: "30px",
  position: "relative",
}));

const BlackboardTitleContainer = styled("div", {
  name: "BlackboardTitleContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(460px,460px)",
  height: "max(130px,130px)",
  display: "grid",
  placeItems: "center",
  position: "relative",
  boxShadow: "0 0 10px black",
  border: "2px solid black",
  borderRadius: "10px",
  marginTop: "40px",
  backgroundImage: `url(${horizontalPlank})`,
  "@media(max-width:540px)": {
    marginTop: "30px",
  },
  "@media(max-width:470px)": {
    width: "max(325px,325px)",
  },
}));

const TitleContainer = styled("div", {
  name: "TitleContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(calc(100% - 30px),calc(100% - 30px))",
  height: "max(calc(100% - 30px),calc(100% - 30px))",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  placeItems: "center",
  position: "relative",
  border: "2px solid black",
  borderRadius: "10px",

  fontFamily: "Fredericka the Great ,cursive",
  zIndex: "0",
}));

const StyledTypography = styled(Typography, {
  name: "StyledTypography",
  slot: "Wrapper",
})(({ theme }) => ({
  color: "inherit",
  fontFamily: "Fredericka the Great ,cursive",
  textAlign: "center",
  transition: "all 0.5s",
  zIndex: "2",
}));

export {
  StyledTypography,
  TopContainer,
  BlackboardTitleContainer,
  TitleContainer,
  GridContainer,
};
