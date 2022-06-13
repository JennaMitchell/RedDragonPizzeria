import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import PizzaSizeImageManager from "../pizza-pan-image-manger/pizza-size-image-manager";
import PizzaDoughImageManger from "../pizza-pan-image-manger/pizza-dough-image-manager";
import PizzaSauceImageManger from "../pizza-pan-image-manger/pizza-sauce-image-manager";
import PizzaCheeseImageManager from "../pizza-pan-image-manger/pizza-cheese-image-manager";
import PizzaToppingsImageManager from "../pizza-pan-image-manger/pizza-toppings-image-manager";
import CustomPepperoniLayout from "../pizza-pan-image-manger/custom-pepperoni-layout/custom-pepperoni-layout";

const TopImageContainer = styled("div", {
  name: "TopImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
  position: "relative",

  borderRadius: "50%",

  zIndex: 2,
}));

const PepperoniMakerDisplayImage = () => {
  const buildAPizzaUserSelectedObject = useSelector(
    (state) => state.buildAPizzaUserSelectedObject
  );

  return (
    <TopImageContainer>
      <PizzaSizeImageManager size={buildAPizzaUserSelectedObject.size[0]} />
      <PizzaDoughImageManger dough={buildAPizzaUserSelectedObject.crust[0]} />
      <PizzaSauceImageManger
        sauce={buildAPizzaUserSelectedObject.sauce[0]}
        crust={buildAPizzaUserSelectedObject.crust[0]}
      />
      <PizzaCheeseImageManager
        cheese={buildAPizzaUserSelectedObject.cheese[0]}
      />
      <PizzaToppingsImageManager
        veggies={buildAPizzaUserSelectedObject.veggies}
        meats={buildAPizzaUserSelectedObject.meats}
        other={buildAPizzaUserSelectedObject.other}
        cheese={buildAPizzaUserSelectedObject.cheese[0]}
      />
      <CustomPepperoniLayout />
    </TopImageContainer>
  );
};
export default PepperoniMakerDisplayImage;
