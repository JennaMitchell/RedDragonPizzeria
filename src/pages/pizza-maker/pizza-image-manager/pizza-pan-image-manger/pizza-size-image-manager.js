import pizzaPan from "../../../../img/pizza-maker/pan/pizza-pan.png";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
const PizzaPanContainer = styled("img", {
  name: "TopImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(400px,400px)",
  height: "max(400px,400px)",
  display: "grid",
  placeItems: "center",
  position: "relative",
  transition: "all 2s",
  zIndex: 2,
}));

const PizzaSizeImageManager = ({ size }) => {
  const pepperoniPizzaSizePixelsDatabase = useSelector(
    (state) => state.pepperoniPizzaSizePixelsDatabase
  );
  let renderReadyPizzaPan = (
    <PizzaPanContainer
      sx={{
        width: `max(${pepperoniPizzaSizePixelsDatabase[size]}px,${pepperoniPizzaSizePixelsDatabase[size]}px)`,
        height: `max(${pepperoniPizzaSizePixelsDatabase[size]}px,${pepperoniPizzaSizePixelsDatabase[size]}px)`,
      }}
      src={pizzaPan}
      alt="pizza pan"
    />
  );

  return <>{renderReadyPizzaPan}</>;
};
export default PizzaSizeImageManager;
