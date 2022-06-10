import { styled } from "@mui/material";
import { Typography } from "@mui/material";

const TopContainer = styled("div", {
  name: "TopContainer ",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateRows: "repeat(4,max-content)",
  placeItems: "center",
  transition: "all 1.5s",
}));

const SpaceBetweenContainer = styled("div", {
  name: "SpaceBetweenContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  height: "max(max-content,max-content)",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledTypography = styled(Typography, {
  name: "StyledTypography",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  color: theme.palette.secondary.dark,
}));

const PepperoniTypeSelectorContainer = styled("div", {
  name: "PepperoniTypeSelectorContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(90%,90%)",
  height: "max(max-content,max-content)",
  display: "grid",

  gridTemplateColumns: "repeat(3,max-content)",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "transparent",
  marginTop: "15px",
}));

const PepperoniTypeButton = styled("button", {
  name: "PepperoniTypeButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(50px,50px)",
  height: "max(50px,50px)",
  display: "grid",
  placeItems: "center",
  backgroundColor: "transparent",
  border: "1px solid black",
  borderRadius: "3px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: "0 0 5px black",
  },
}));
const PepperoniButtonImage = styled("img", {
  name: "PepperoniButtonImage",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(90%,90%)",
  height: "max(90%,90%)",
  display: "grid",
  placeItems: "center",
  backgroundColor: "transparent",
  padding: "2px",
}));

export {
  TopContainer,
  SpaceBetweenContainer,
  StyledTypography,
  PepperoniTypeSelectorContainer,
  PepperoniTypeButton,
  PepperoniButtonImage,
};
