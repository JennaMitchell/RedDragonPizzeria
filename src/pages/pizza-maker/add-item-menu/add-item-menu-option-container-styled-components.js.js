import { styled, Typography } from "@mui/material";
import { Button } from "@mui/material";

const TopContainer = styled("div", {
  name: "TopContainer ",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.primary.main,
  display: "grid",
  gridTemplateRows: "max-content",
  gridAutoFlow: "row",
  placeItems: "center",
  transition: "all 0.5s",
  color: theme.palette.secondary.light,
}));
const CategoryButton = styled(Button, {
  name: "CategoryButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(60px,60px)",
  backgroundColor: theme.palette.primary.main,
  display: "grid",
  placeItems: "center",
  transition: "all 0.5s",
  marginTop: "10px",
  boxShadow: "0 0 5px black",
  border: "1px solid black",
  fontSize: "28px",
  color: theme.palette.secondary.light,
}));
const InfoContainer = styled("div", {
  name: "InfoContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.primary.light,
  display: "grid",
  placeItems: "center",
  transition: "all 0.5s",
  marginTop: "10px",
  boxShadow: "0 0 5px black",
  border: "1px solid black",
  fontSize: "28px",
  color: theme.palette.secondary.light,
  gridAutoFlow: "row",
}));

const ThreeColumnRow = styled("div", {
  name: "ThreeColumnRow",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.primary.main,
  display: "grid",
  placeItems: "center",
  transition: "all 0.5s",
  marginTop: "10px",

  gridAutoFlow: "row",
  gridTemplateColumns: "repeat(3,1fr)",
}));

const TwoColumnRow = styled("div", {
  name: "TwoColumnRow",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.primary.main,
  display: "grid",
  placeItems: "center",
  transition: "all 0.5s",
  marginTop: "10px",

  color: theme.palette.secondary.light,
  gridAutoFlow: "row",
  gridTemplateColumns: "repeat(2,max-content)",
}));

const OneColumnRow = styled("div", {
  name: "OneColumnRow",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.primary.main,
  display: "grid",
  placeItems: "center",
  transition: "all 0.5s",
}));

const SelectorContainer = styled("div", {
  name: "SelectorContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(90%,90%)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.primary.main,
  display: "grid",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.secondary.light,
  gridAutoFlow: "row",
  gridTemplateColumns: "max-content max-content",
}));

const SelectorTitle = styled(Typography, {
  name: "SelectorTitle",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.secondary.light,
  display: "grid",
  placeItems: "center",
  color: theme.palette.secondary.dark,
  fontSize: "28px",
}));

export {
  CategoryButton,
  TopContainer,
  InfoContainer,
  ThreeColumnRow,
  TwoColumnRow,
  SelectorContainer,
  SelectorTitle,
  OneColumnRow,
};
