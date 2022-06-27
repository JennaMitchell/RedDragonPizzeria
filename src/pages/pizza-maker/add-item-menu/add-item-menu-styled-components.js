import { styled } from "@mui/material";
import { Container } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const AddItemMenuContainer = styled(Container, {
  name: "AddItemMenuContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(550px,550px)",
  height: "max(100%,100%)",
  backgroundColor: theme.palette.secondary.dark,

  display: "grid",
  justifyItems: "center",
  alignItems: "flex-start",
  position: "absolute",
  top: "0px",
  left: "-550px",
  transition: "all 0.5s",
  zIndex: "3",
  "@media(max-width:710px)": {
    width: "max(100vw,100vw)",
    left: "-100vw",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "0px",
  },
}));

const InterfaceContainer = styled("div", {
  name: "InterfaceContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(calc(100% - 40px),calc(100% - 40px))",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateRows: "repeat(6,max-content)",
  justifyItems: "center",
  alignItems: "flex-start",
  position: "relative",
  transition: "all 0.5s",
  marginTop: "40px",
}));

const ClosingIcon = styled(ArrowBackIosNewIcon, {
  name: "ClosingIcon",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(24px,24px)",
  height: "max(24px,24px)",
  position: "absolute",
  top: "20px",
  right: "30px",
  borderRadius: "50%",
  padding: "5px",
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.secondary.dark,
  display: "grid",
  placeItems: "center",
  zIndex: "5",
  transition: "all 0.5s",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export { AddItemMenuContainer, InterfaceContainer, ClosingIcon };
