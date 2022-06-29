import { styled } from "@mui/material";
import plank from "../../img/full-menu/plank.jpg";

const BlackboardContainer = styled("div", {
  name: "BlackboardContainer",
  slot: "Wrapper",
})(() => ({
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  width: "max(1075px,1075px)",

  display: "grid",
  placeItems: "center",
  position: "relative",
  boxShadow: "0 0 10px black",
  padding: "20px",
  border: "2px solid black",
  borderRadius: "20px",
  backgroundImage: `url(${plank})`,
  marginBottom: "200px",
  "@media (max-width:1200px)": {
    width: "max(80%,80%)",
  },
  "@media (max-width:780px)": {
    width: "max(95%,95%)",
  },
}));

const MenuContainer = styled("div", {
  name: "MenuContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  placeItems: "center",
  position: "relative",
  border: "2px solid black",
  borderRadius: "20px",
  gridTemplateRows: "max-content max-content",
  gridTemplateColumns: "100%",

  fontFamily: "Fredericka the Great ,cursive",
}));

const FourColumnContainer = styled("div", {
  name: "FourColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",

  gap: "30px",
  alignContent: "space-between",

  justifyItems: "center",
  position: "relative",
  marginTop: "30px",
  marginBottom: "30px",
}));

const ThreeColumnContainer = styled("div", {
  name: "ThreeColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridTemplateRows: "max-content",
  alignItems: "space-evenly",

  justifyItems: "center",
  position: "relative",
  gap: "30px",
  marginTop: "30px",
  marginBottom: "30px",
}));

const TwoColumnContainer = styled("div", {
  name: "TwoColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "repeat(2,max-content)",
  gridTemplateRows: "max-content",

  justifyContent: "space-evenly",
  position: "relative",
  gap: "12.5%",
  marginTop: "30px",
  marginBottom: "30px",
  "@media(max-width:1000px)": {
    gap: "20px",
  },
}));
const OneColumnContainer = styled("div", {
  name: "OneColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "max-content",
  gridTemplateRows: "max-content",

  justifyContent: "center",
  gap: "20px",
  position: "relative",
  marginTop: "30px",
  marginBottom: "30px",
}));

const RemainderContainer = styled("div", {
  name: "RemainderContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",

  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "max-content",
  gridTemplateRows: "max-content",
  justifyContent: "center",
}));

const HorizonalUnderline = styled("img", {
  name: "HorizonalUnderline",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  height: "max(20px,20px)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
  position: "relative",
}));

export {
  BlackboardContainer,
  MenuContainer,
  FourColumnContainer,
  ThreeColumnContainer,
  TwoColumnContainer,
  HorizonalUnderline,
  OneColumnContainer,
  RemainderContainer,
};
