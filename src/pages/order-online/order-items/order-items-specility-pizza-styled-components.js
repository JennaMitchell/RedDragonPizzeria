import { styled } from "@mui/material";

const FrontFacingCard = styled("div", {
  name: "FrontFacingCard",
  slot: "Wrapper",
})(({ theme }) => ({
  color: theme.palette.secondary.light,
  width: "max(90%,90%)",
  height: "max(100%,100%)",
  backgroundColor: "transparent",
  display: "grid",
  gridTemplateRows: "max-content max-content max-content",
  justifyItems: "center",
  alignContent: "space-evenly",
  position: "relative",
}));

const OrderButton = styled("button", {
  name: "OrderButton",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.secondary.light,
  width: "max(125px,125px)",
  height: "max(50px,50px)",
  position: "relative",
  display: "grid",
  placeItems: "center",

  fontSize: "26px",
  border: "none",
  textAlign: "center",
  borderRadius: "3px",
  boxShadow: "0 0 10px black",
  marginTop: "10px",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

export { FrontFacingCard, OrderButton };
