import { styled, Typography } from "@mui/material";
import { Button } from "@mui/material";

const TopContainer = styled("div", {
  name: "TopContainer ",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateRows: "max-content",
  gridAutoFlow: "row",
  placeItems: "center",
  transition: "all 1.5s",
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

  boxShadow: "0 0 5px black",
  border: "1px solid black",
  fontSize: "28px",
  color: theme.palette.secondary.light,
  marginTop: "10px",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.dark,
  },
}));
const InfoContainer = styled("div", {
  name: "InfoContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.primary.light,
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  transition: "all 0.5s",

  fontSize: "28px",
  color: theme.palette.secondary.light,
  gridAutoFlow: "row",
  borderLeft: "1px solid black",
  borderBottom: "1px solid black",
  borderRight: "1px solid black",
  boxShadow: "0 0 5px black",
  borderEndEndRadius: "5px",
  borderEndStartRadius: "7px",
  padding: "15px 10px 10px 10px",
}));

const ThreeColumnRow = styled("div", {
  name: "ThreeColumnRow",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  alignItems: "center",

  marginBottom: "10px",
}));

const TwoColumnRow = styled("div", {
  name: "TwoColumnRow",
  slot: "Wrapper",
})(() => ({
  width: "max(63.33%,63.33%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "grid",
  alignItems: "center",
  transition: "all 0.5s",
  gridTemplateColumns: "repeat(2,1fr)",
  marginBottom: "10px",
}));

const OneColumnRow = styled("div", {
  name: "OneColumnRow",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(33.33%,33.33%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "grid",
  placeItems: "center",
  transition: "all 0.5s",
  marginBottom: "10px",
  marginLeft: "25px",
}));

const SelectorContainer = styled("div", {
  name: "SelectorContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "grid",
  alignItems: "center",

  color: theme.palette.secondary.light,
  gridTemplateColumns: "35px 125px",
}));

const SelectorTitle = styled(Typography, {
  name: "SelectorTitle",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",

  display: "grid",
  justifyContent: "flex-start",
  alignItems: "center",
  color: theme.palette.secondary.dark,
  fontSize: "12px",
  textAlign: "center",
  marginLeft: "10px",
}));

const MaxContentContainer = styled("div", {
  name: "MaxContentContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  display: "grid",
  alignItems: "center",
  justifyContent: "space-between",
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
  MaxContentContainer,
};
