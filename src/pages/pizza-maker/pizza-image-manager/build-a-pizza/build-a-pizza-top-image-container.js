import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import PizzaSizeImageManager from "./pizza-size-image-manager";
const TopImageContainer = styled("div", {
  name: "TopImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 2,
}));

const BuildAPizzaDisplayImage = () => {
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );

  return (
    <TopImageContainer>
      <PizzaSizeImageManager size={buildAPizzaUserSelectedObject.size[0]} />
    </TopImageContainer>
  );
};
export default BuildAPizzaDisplayImage;
