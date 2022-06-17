import {
  TopContainer,
  NewPizzaButton,
  KitchenTableContainer,
  PizzaPeelWithPan,
  PizzaPeelWithoutPan,
  MenuButton,
  OpenMenuIcon,
  CloseMenuIcon,
  MainTitle,
  MainTitleContainer,
  DarkBackground,
} from "./pizza-maker-homepage-styled-components";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import NewPizzaPopup from "./popups/new-pizza-popup";

import pizzaPeel from "../../img/pizza-maker/peel/pizza-peel.png";
import pizzaPeelWithPan from "../../img/pizza-maker/peel/pizza-peel-with-pan.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import AddItemMenu from "./add-item-menu/add-item-menu";
import BuildAPizzaDisplayImage from "./pizza-image-manager/build-a-pizza/build-a-pizza-top-image-container";
import PepperoniMakerDisplayImage from "./pizza-image-manager/pepperoni-maker/pepperoni-maker-pan-manager";
import BuildAPizzaOrderReviewBoard from "./pizza-image-manager/build-a-pizza/order-review-board/build-a-pizza-order-review-board";
import PepperoniMakerOrderReviewBoard from "./pizza-image-manager/pepperoni-maker/order-review-board/pepperoni-maker-order-review-board";

const PizzaMakerHomepage = () => {
  const [newPizzaPopup, setNewPizzaPopup] = useState(true);
  const [pizzaCreationType, setPizzaCreationType] = useState("");
  const [pizzaMenuActive, setPizzaMenuActive] = useState(false);
  const [panDropedOff, setPanDroppedOff] = useState(false);
  const newPizzaHandler = () => {
    setNewPizzaPopup(!newPizzaPopup);
  };
  const pizzaCreationTypeHandler = (type) => {
    setPizzaCreationType(type);
  };
  const pizzaMenuHandler = () => {
    setPizzaMenuActive(!pizzaMenuActive);
  };
  const pepperoniDragEventActive = useSelector(
    (state) => state.pepperoniDragEventActive
  );
  const pizzaPeelSlideIn = keyframes({
    "0%": { right: "-1200px" },
    "100%": { right: "300px", display: "none" },
  });

  const pizzaPeelSlideOut = keyframes({
    "0%": { right: "300px" },
    "100%": { right: "-1200px" },
  });

  useEffect(() => {
    if (!newPizzaPopup) {
      setTimeout(() => {
        setPanDroppedOff(true);
      }, 1000);
    }
  }, [newPizzaPopup]);

  return (
    <TopContainer>
      <MainTitleContainer
        sx={{ visibility: `${!panDropedOff ? "hidden" : "visible"}` }}
      >
        <MainTitle variant="h2">{pizzaCreationType}</MainTitle>
      </MainTitleContainer>
      <AddItemMenu
        pizzaMenuActive={pizzaMenuActive}
        pizzaCreationType={pizzaCreationType}
      />
      <MenuButton sx={{ left: `${pizzaMenuActive && `550px`}` }}>
        {pizzaMenuActive ? (
          <CloseMenuIcon onClick={pizzaMenuHandler} />
        ) : (
          <OpenMenuIcon onClick={pizzaMenuHandler} />
        )}
      </MenuButton>
      <PizzaPeelWithPan
        src={pizzaPeelWithPan}
        alt="Pizza Peel"
        sx={{
          animation: `${
            !newPizzaPopup && `${pizzaPeelSlideIn} 1000ms ease-out`
          }`,
          visibility: `${panDropedOff ? "hidden" : "visible"}`,
        }}
      />
      <PizzaPeelWithoutPan
        src={pizzaPeel}
        alt="Pizza Peel"
        sx={{
          animation: `${
            panDropedOff && `${pizzaPeelSlideOut} 1000ms ease-out`
          }`,
          visibility: `${!panDropedOff ? "hidden" : "visible"}`,
        }}
      />
      <NewPizzaPopup
        newPizzaPopup={newPizzaPopup}
        onClose={newPizzaPopup}
        onCloseFunction={newPizzaHandler}
        retrievePizzaType={pizzaCreationTypeHandler}
      />
      {pizzaCreationType !== "Custom Pepperoni Layout" && (
        <KitchenTableContainer>
          {panDropedOff && <BuildAPizzaDisplayImage />}
          {panDropedOff && <BuildAPizzaOrderReviewBoard />}
        </KitchenTableContainer>
      )}
      {pizzaCreationType === "Custom Pepperoni Layout" && (
        <KitchenTableContainer>
          {panDropedOff && <PepperoniMakerDisplayImage />}
          {panDropedOff && <PepperoniMakerOrderReviewBoard />}
        </KitchenTableContainer>
      )}{" "}
      {pepperoniDragEventActive && <DarkBackground />}
      <NewPizzaButton onClick={newPizzaHandler} />
    </TopContainer>
  );
};
export default PizzaMakerHomepage;
