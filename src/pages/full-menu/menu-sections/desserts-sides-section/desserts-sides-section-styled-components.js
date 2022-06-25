import { styled, Typography } from "@mui/material";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "repeat(3,max-content)",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
}));

const CookieContainer = styled("img", {
  name: "CookieContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(300px,300px)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  bottom: "0",
  left: "50%",
  transform: "translateX(-50%)",
}));
const SectionTitle = styled(Typography, {
  name: "SectionTitle",
  slot: "Wrapper",
})(({ theme }) => ({
  fontSize: "52px",
  fontFamily: "inherit",
  color: theme.palette.secondary.light,
  textAlign: "center",
  "@media (max-width:900px)": {
    fontSize: "48px",
  },
  "@media (max-width:745px)": {
    fontSize: "36px",
  },
}));

const DescriptionTitle = styled(Typography, {
  name: "DescriptionTitle",
  slot: "Wrapper",
})(({ theme }) => ({
  fontSize: "32px",
  fontFamily: "inherit",
  color: theme.palette.secondary.light,
  textAlign: "left",
  width: "max(100%,100%)",
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
  textAlign: "left",
  "@media (max-width:900px)": {
    fontSize: "14px",
  },
  "@media (max-width:745px)": {
    fontSize: "12px",
  },
}));
export {
  TopContainer,
  CookieContainer,
  SectionTitle,
  DescriptionTitle,
  DescriptionText,
};
