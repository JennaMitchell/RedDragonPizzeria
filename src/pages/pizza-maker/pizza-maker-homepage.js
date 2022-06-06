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
} from "./pizza-maker-homepage-styled-components";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import NewPizzaPopup from "./popups/new-pizza-popup";
import tablePhoto from "../../img/pizza-builder/wood-table-cropped.png";

import pizzaPeel from "../../img/pizza-builder/pizza-peel.png";
import pizzaPeelWithPan from "../../img/pizza-builder/pizza-peel-with-pan.png";
import { useEffect } from "react";

import AddItemMenu from "./add-item-menu/add-item-menu";
import BuildAPizzaDisplayImage from "./pizza-image-manager/build-a-pizza/build-a-pizza-top-image-container";

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

  const pizzaPeelSlideIn = keyframes({
    "0%": { right: "-1200px" },
    "100%": { right: "0px" },
  });

  const pizzaPeelSlideOut = keyframes({
    "0%": { right: "0px" },
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
      <MainTitle variant="h2">{pizzaCreationType}</MainTitle>

      <AddItemMenu
        pizzaMenuActive={pizzaMenuActive}
        pizzaCreationType={pizzaCreationType}
      />

      <MenuButton sx={{ left: `${pizzaMenuActive && `500px`}` }}>
        {pizzaMenuActive ? (
          <CloseMenuIcon onClick={pizzaMenuHandler} />
        ) : (
          <OpenMenuIcon onClick={pizzaMenuHandler} />
        )}
      </MenuButton>
      {panDropedOff && <BuildAPizzaDisplayImage />}
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
      <KitchenTableContainer src={tablePhoto} alt="wooden table" />
      <NewPizzaButton onClick={newPizzaHandler} />
    </TopContainer>
  );
};
export default PizzaMakerHomepage;
