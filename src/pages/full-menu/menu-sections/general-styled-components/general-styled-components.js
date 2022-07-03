import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const TwoColumnContainer = styled("div", {
  name: "TwoColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateColumns: "48% max-content 48% ",

  alignItems: "flex-start",
  justifyContent: "center",
  position: "relative",
  fontFamily: "Fredericka the Great ,cursive",
  marginBottom: "20px",
}));
const SectionTitleContainer = styled("div", {
  name: "SectionTitleContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "max-content max-content",
  placeItems: "center",
  position: "relative",
  fontFamily: "Fredericka the Great, cursive",
  marginTop: "15px",
  marginBottom: "10px",
}));
const ColumnTitleContainer = styled("div", {
  name: "ColumnTitleContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "max-content max-content",
  placeItems: "center",
  position: "relative",
  fontFamily: "Fredericka the Great, cursive",
  marginBottom: "10px",
}));
const MenuImage = styled("img", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(450px,450px)",
  height: "max(450px,450px)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
}));
const UnderlineContainer = styled("img", {
  name: "UnderlineContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(70%,70%)",
  height: "max(20px,20px)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  placeItems: "center",
  position: "relative",
  "@media (max-width:600px)": {
    height: "max(10px,10px)",
  },
}));
const SmallUnderlineContainer = styled("img", {
  name: "UnderlineContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(80%,80%)",
  height: "max(10px,10px)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  placeItems: "center",
  position: "relative",
}));
const ThreeColumnContainer = styled("div", {
  name: "ThreeColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateColumns: "1fr max-content 1fr max-content 1fr",
  justifyContent: "center",
  alignItems: "flex-start",
  position: "relative",
  fontFamily: "inherit",
}));

const FourColumnContainer = styled("div", {
  name: "FourColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  justifyItems: "center",
  alignItems: "flex-start",
  position: "relative",
  fontFamily: "inherit",
}));

const SectionBreaker = styled("img", {
  name: "SectionBreaker",
  slot: "Wrapper",
})(() => ({
  width: "max(10px,10px)",
  height: "max(100%,100%)",
  display: "grid",
  placeItems: "center",
  "@media (max-width:600px)": {
    width: "max(5px,5px)",
  },
}));
const StyledTypography = styled(Typography, {
  name: "StyledTypography",
  slot: "Wrapper",
})(({ theme }) => ({
  fontFamily: "Fredericka the Great ,cursive",
  color: theme.palette.secondary.light,
}));

const PictureTextContainer = styled("div", {
  name: "PictureTextContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(90%,90%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "max-content",
  gridTemplateColumns: "max-content max-content",
  overflowX: "hidden",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  fontFamily: "inherit",
  marginBottom: "15px",
  color: theme.palette.secondary.light,
}));

const RightImageContainer = styled("img", {
  name: "RightImageContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(250px,250px)",
  height: "max(150px,150px)",
  display: "grid",
  placeItems: "center",
  position: "relative",

  color: theme.palette.secondary.light,
}));

const LeftImageContainer = styled("img", {
  name: "LeftImageContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(250px,250px)",
  height: "max(150px,150px)",
  display: "grid",
  placeItems: "center",
  position: "relative",
  color: theme.palette.secondary.light,
}));

const ThreeRowsTextContainer = styled("div", {
  name: "ThreeRowsTextContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(250px,250px)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateRows: "max-content max-content max-content",
  gridTemplateColumns: "100%",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
  marginBottom: "15px",
  overflowX: "hidden",
  "@media(max-width:600px)": {
    width: "max(200px,200px)",
  },
}));

const OneColumnContainer = styled("div", {
  name: "OneColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateColumns: "90%",
  justifyContent: "center",
  alignItems: "flex-start",
  position: "relative",
  fontFamily: "inherit",
  "@media(max-width: 600px)": {
    marginBottom: "20px",
  },
}));

export {
  TwoColumnContainer,
  SectionTitleContainer,
  MenuImage,
  UnderlineContainer,
  ThreeColumnContainer,
  SmallUnderlineContainer,
  SectionBreaker,
  FourColumnContainer,
  ColumnTitleContainer,
  StyledTypography,
  PictureTextContainer,
  RightImageContainer,
  LeftImageContainer,
  ThreeRowsTextContainer,
  OneColumnContainer,
};
