import { styled } from "@mui/material";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(1200px,1200px)",
  backgroundColor: theme.palette.primary.light,
  border: "none",
  display: "grid",
  placeItems: "center",
  position: "relative",
}));
export { TopContainer };
