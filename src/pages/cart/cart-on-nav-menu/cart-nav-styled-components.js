import { Button, styled } from "@mui/material";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(250px,250px)",
  height: "max(max-content,max-content)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  top: "-100%",
  right: "0px",
  transition: "all 1s",
  backgroundColor: theme.palette.secondary.dark,
  boxShadow: "0 0 5px white",
  borderEndStartRadius: "10px",

  borderEndEndRadius: "10px",
  paddingTop: "45px",
  zIndex: "2",
}));

const LatestItemContainer = styled("div", {
  name: "LatestItemContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(88%,88%)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateColumns: "75% max-content",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  backgroundColor: "inherit",
  marginTop: "20px",
}));

const ViewCartButton = styled(Button, {
  name: "ViewCartButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  marginBottom: "10px",
  display: "grid",
  padding: "10px 40px 10px 40px",
  textTransform: "capitalize",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.light,
  marginTop: "10px",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.dark,
    border: "1px solid black",
  },
}));

export { TopContainer, LatestItemContainer, ViewCartButton };
