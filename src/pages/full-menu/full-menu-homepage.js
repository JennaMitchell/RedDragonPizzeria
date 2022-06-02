import {
  TopContainer,
  MenuContainer,
  BoardImageContainer,
  MenuSelectorContainer,
} from "./full-menu-homepage-styled-components";

import FullMenuSelectorButton from "./full-menu-selector-button";
import { useState } from "react";

import PizzaSection from "./menu-sections/pizza-section/pizza-section";
import DrinksSection from "./menu-sections/drink-section/drinks-section";
import SaladSection from "./menu-sections/salad-section/salad-section";
import DessertsSidesSection from "./menu-sections/desserts-sides-section/desserts-sides-section";

const FullMenuHomepage = () => {
  const menuButtonTitles = [
    "All",
    "Pizza",
    "Drinks",
    "Salads",
    "Sides n Sweets",
  ];
  const [activeMenuButton, setActiveMenuButton] = useState(1);
  const [selectedMenuButton, setSelectedMenuButton] = useState("Pizza");
  const menuSelectorButtonHandler = (title, id) => {
    setSelectedMenuButton(title);
    setActiveMenuButton(id);
  };
  let menuButtons = menuButtonTitles.map((title, index) => {
    return (
      <FullMenuSelectorButton
        key={index}
        id={index}
        activeId={activeMenuButton}
        title={title}
        onClickHandler={menuSelectorButtonHandler}
      ></FullMenuSelectorButton>
    );
  });
  let menuToRender = [];
  switch (selectedMenuButton) {
    case "All":
      menuToRender = [
        <>
          <PizzaSection />
          <DrinksSection />
          <SaladSection />
          <DessertsSidesSection />
        </>,
      ];
      break;
    case "Pizza": {
      menuToRender = [<PizzaSection />];
      break;
    }
    case "Drinks": {
      menuToRender = [<DrinksSection />];
      break;
    }
    case "Salads": {
      menuToRender = [<SaladSection />];
      break;
    }
    case "Sides n Sweets": {
      menuToRender = [<DessertsSidesSection />];
      break;
    }

    default: {
      menuToRender = [<PizzaSection />];
      break;
    }
  }

  return (
    <TopContainer>
      <BoardImageContainer>
        <MenuContainer>
          <MenuSelectorContainer>{menuButtons}</MenuSelectorContainer>
          {menuToRender[0]}
        </MenuContainer>
      </BoardImageContainer>
    </TopContainer>
  );
};
export default FullMenuHomepage;
