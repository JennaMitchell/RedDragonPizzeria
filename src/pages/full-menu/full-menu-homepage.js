import {
  TopContainer,
  MenuContainer,
  BoardImageContainer,
  MenuSelectorContainer,
  MenuTitleContainer,
  MenuTitle,
  ContactContainer,
} from "./full-menu-homepage-styled-components";

import FullMenuSelectorButton from "./full-menu-selector-button";
import { useState } from "react";
import { Typography } from "@mui/material";

const FullMenuHomepage = () => {
  const menuButtonTitles = ["All", "Pizza", "Drinks", "Salads", "Desserts"];
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

  return (
    <TopContainer>
      <BoardImageContainer>
        <MenuContainer>
          <MenuSelectorContainer>{menuButtons}</MenuSelectorContainer>
        </MenuContainer>
      </BoardImageContainer>
    </TopContainer>
  );
};
export default FullMenuHomepage;
