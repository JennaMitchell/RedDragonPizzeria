import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
const SelectorButton = styled("button", {
  name: "MenuSelectorButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: "inherit",
  color: theme.palette.secondary.light,
  border: "none",
  borderRadius: "25px",
  display: "grid",
  placeItems: "center",
  fontSize: "20px",
}));

const ActiveSelectorButton = styled("button", {
  name: "MenuSelectorButton",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.light,
  border: "none",
  borderRadius: "25px",
  display: "grid",
  placeItems: "center",
  fontSize: "20px",
}));

const MenuSelectorButton = ({ id, activeId, title, onClickHandler }) => {
  const buttonHandler = () => {
    onClickHandler(title, id);
  };
  if (id === activeId) {
    return <ActiveSelectorButton>{title}</ActiveSelectorButton>;
  } else {
    return <SelectorButton onClick={buttonHandler}>{title}</SelectorButton>;
  }
};
export default MenuSelectorButton;
