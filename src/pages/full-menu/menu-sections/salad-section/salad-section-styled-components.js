import { styled, Typography } from "@mui/material";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "repeat(2,max-content)",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
}));

const SaladColumn = styled("div", {
  name: "SaladColumn",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "repeat(3,1fr)",
  justifyItems: "center",
  alignItems: "flex-start",
  position: "relative",
  fontFamily: "inherit",
}));

const BellPepperLineArtContainer = styled("img", {
  name: "BeerLineArtContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(120px,120px)",
  height: "max(120px,120px)",
  position: "absolute",
  top: "-10px",
  right: "20px",
  border: "none",
  display: "grid",
  placeItems: "center",
  "@media (max-width:1450px)": {
    width: "max(100px,100px)",
    height: "max(100px,100px)",
  },
  "@media (max-width:1075px)": {
    width: "max(80px,80px)",
    height: "max(80px,80px)",
  },
  "@media (max-width:900px)": {
    width: "max(60px,60px)",
    height: "max(60px,60px)",
  },
  "@media (max-width:655px)": {
    width: "max(50px,50px)",
    height: "max(50px,50px)",
  },
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
  fontSize: "26px",
  fontFamily: "inherit",
  color: theme.palette.secondary.light,
  textAlign: "center",
  "@media (max-width:900px)": {
    fontSize: "24px",
  },
  "@media (max-width:745px)": {
    fontSize: "20px",
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

export {
  TopContainer,
  SaladColumn,
  BellPepperLineArtContainer,
  DescriptionText,
  SectionTitle,
  DescriptionTitle,
};
