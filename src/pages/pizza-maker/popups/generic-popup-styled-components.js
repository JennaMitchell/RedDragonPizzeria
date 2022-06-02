import { styled } from "@mui/material";
import { Button } from "@mui/material";
const PopupButton = styled(Button, {
  name: "BoardImageContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "min(max-content,max-content)",
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.secondary.light,

  padding: "10px 25px 10px 25px",
  display: "grid",
  placeItems: "center",
  position: "relative",
  borderRadius: "10px",
  boxShadow: "0 0 10px black",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
export { PopupButton };
