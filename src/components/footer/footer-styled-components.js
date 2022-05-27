import { styled } from "@mui/material/styles";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(280px,280px)",
  backgroundColor: theme.palette.secondary.dark,
  border: "none",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  alignContent: "flex-start",
  justifyContent: "space-evenly",
  position: "relative",
}));

const ColumnOne = styled("div", { name: "ColumnOne", slot: "Wrapper" })(
  ({ theme }) => ({
    width: "max(max-content,max-content)",
    height: "max(max-content,max-content)",
    display: "grid",
    gridTemplateRows: "repeat(3,max-content)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "40px",
    marginLeft: "40px",
  })
);

const ColumnTwo = styled("div", { name: "ColumnOne", slot: "Wrapper" })(
  ({ theme }) => ({
    width: "max(max-content,max-content)",
    height: "max(max-content,max-content)",
    display: "grid",
    gridTemplateRows: "repeat(4,max-content)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "40px",
  })
);

const SocialIcons = styled("div", {
  name: "SocialIcons",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(30px,30px)",
  height: "max(30px,30px)",
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "5px",
  display: "grid",
  placeItems: "center",
}));
const ContactInfoContainer = styled("div", {
  name: "ContactInfoContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",

  display: "grid",
  gridTemplateColumns: "30px max-content",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "22px",
  marginBottom: "30px",
  color: theme.palette.secondary.light,
}));

export {
  TopContainer,
  ColumnOne,
  ColumnTwo,
  SocialIcons,
  ContactInfoContainer,
};
