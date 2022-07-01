import { styled } from "@mui/material/styles";

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
  gridTemplateColumns: "repeat(2,1fr)",
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
  gridTemplateColumns: "95%",
  gridTemplateRows: "max-content",

  justifyItems: "center",
  gap: "20px",
  position: "relative",
  marginTop: "30px",
  marginBottom: "30px",
  "@media(max-width:520px)": {
    gap: "10px",
    marginTop: "10px",
    marginBottom: "10px",
  },
}));
const RemainderContainer = styled("div", {
  name: "RemainderContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(90%,90%)",
  overflowX: "hidden",

  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "max-content",
  gridTemplateRows: "max-content",
  justifyItems: "center",
}));
export {
  OneColumnContainer,
  TwoColumnContainer,
  ThreeColumnContainer,
  FourColumnContainer,
  RemainderContainer,
};
