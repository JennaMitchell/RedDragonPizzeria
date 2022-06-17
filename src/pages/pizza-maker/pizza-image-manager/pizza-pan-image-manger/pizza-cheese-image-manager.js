import { styled } from "@mui/material";
import mozzarellaCheese from "../../../../img/pizza-maker/cheese/yellow-small-bubble-cheese.png";
import provoloneCheese from "../../../../img/pizza-maker/cheese/light-yellow-cheese.png";
import cheddarCheese from "../../../../img/pizza-maker/cheese/cheddar-cheese.png";
const PizzaCheeseContainer = styled("img", {
  name: "TopImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(82%,82%)",
  height: "max(82%,82%)",
  display: "grid",
  placeItems: "center",
  position: "absolute",
  transition: "all 2s",
  zIndex: 5,
}));

const PizzaCheeseImageManager = ({ cheese }) => {
  let renderReadyCheese = "";

  switch (cheese) {
    case "Cheddar": {
      renderReadyCheese = (
        <PizzaCheeseContainer src={cheddarCheese} alt="Cheddar Cheese" />
      );
      break;
    }
    case "Mozzarella": {
      renderReadyCheese = (
        <PizzaCheeseContainer src={mozzarellaCheese} alt="Mozzarella Cheese" />
      );
      break;
    }
    case "Provolone": {
      renderReadyCheese = (
        <PizzaCheeseContainer src={provoloneCheese} alt="Provolone Cheese" />
      );
      break;
    }
    default:
      renderReadyCheese = "";
      break;
  }

  // Mozarella, Provolone, Cheddar

  return <>{renderReadyCheese}</>;
};
export default PizzaCheeseImageManager;
