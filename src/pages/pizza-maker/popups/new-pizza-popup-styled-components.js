import { styled } from "@mui/material";

const StyledDialog = styled("dialog", {
  name: "StyledDialog",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  placeItems: "center",
}));

const DialogContainer = styled("div", {
  name: "DialogContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(500px,500px)",
  height: "max(max-content,max-content)",
  padding: "20px",
  backgroundColor: theme.palette.primary.light,
  borderRadius: "50px",
}));

export { StyledDialog, DialogContainer };
