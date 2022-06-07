import { styled } from "@mui/material";
import { Container } from "@mui/material";

const AddItemMenuContainer = styled(Container, {
  name: "AddItemMenuContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(550px,550px)",
  height: "max(100%,100%)",
  backgroundColor: theme.palette.primary.dark,
  display: "grid",
  justifyItems: "center",
  alignItems: "flex-start",
  position: "absolute",
  top: "0px",
  left: "-550px",
  transition: "all 0.5s",
}));

const InterfaceContainer = styled("div", {
  name: "InterfaceContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(calc(100% - 40px),calc(100% - 40px))",
  backgroundColor: theme.palette.primary.dark,
  display: "grid",
  gridTemplateRows: "repeat(6,max-content)",
  justifyItems: "center",
  alignItems: "flex-start",
  position: "relative",
  transition: "all 0.5s",
  marginTop: "40px",
}));

export { AddItemMenuContainer, InterfaceContainer };
