import { styled } from "@mui/material";

const FrontFacingCard = styled("div", {
  name: "FrontFacingCard",
  slot: "Wrapper",
})(({ theme }) => ({
  color: theme.palette.secondary.light,
  width: "max(210px,210px)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  gap: "10px",
  display: "grid",
  gridTemplateRows: "max-content auto max-content",
  justifyItems: "center",
  alignContent: "space-between",
  position: "relative",
  boxShadow: "0 0 5px white",
  border: "2px solid black",
  borderRadius: "15px",
  transition: "all 1s",
  zIndex: "1",
}));

const OrderButton = styled("button", {
  name: "OrderButton",
  slot: "Wrapper",
})(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.secondary.light,
  width: "max(125px,125px)",
  height: "max(50px,50px)",
  display: "grid",
  placeItems: "center",
  fontSize: "26px",
  border: "none",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "0 0 10px black",
  transition: "all 1s",
  zIndex: "4",
  marginTop: "10px",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    boxShadow: "0 0 20px black",
  },
}));

export { FrontFacingCard, OrderButton };
