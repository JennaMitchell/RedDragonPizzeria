import { styled } from "@mui/material";
import { Typography } from "@mui/material";

const DrinksContainer = styled("div", {
  name: "DrinksContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(90%,90%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "max-content max-content max-content max-content",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
  marginBottom: "15px",
}));

const DescriptionTitle = styled(Typography, {
  name: "DescriptionTitle",
  slot: "Wrapper",
})(({ theme }) => ({
  fontSize: "26px",
  fontFamily: "inherit",
  color: theme.palette.secondary.light,
  textAlign: "center",
  "@media (max-width:900px)": {
    fontSize: "24px",
  },
  "@media (max-width:745px)": {
    fontSize: "18px",
  },
  "@media (max-width:670px)": {
    fontSize: "16px",
  },
}));
const DescriptionText = styled(Typography, {
  name: "DescriptionText",
  slot: "Wrapper",
})(({ theme }) => ({
  fontSize: "16px",
  fontFamily: "inherit",
  color: theme.palette.secondary.light,
  textAlign: "center",
  "@media (max-width:900px)": {
    fontSize: "14px",
  },
  "@media (max-width:745px)": {
    fontSize: "12px",
  },
}));
export { DrinksContainer, DescriptionTitle, DescriptionText };
