import {
  TopContainer,
  MenuContainer,
  LogoContainer,
  LogoImage,
  MenuGrid,
} from "./homepage-menu-main-page-styled-components";
import { Typography } from "@mui/material";
import { useState } from "react";
import MenuSelectorButton from "./hompage-menu-selector-button";
import logo from "../../../img/logo/logo.png";
import homepageMenuData from "./homepage-menu-data";
import HomepageMenuItem from "./homepage-menu-item";
import { MenuSelectorContainer } from "../../../generic-styled-components/generic-styled-components";
import { useSelector } from "react-redux";

const HomepageMenuTopFile = () => {
  const menuButtonTitles = [
    "All",
    "Pizza",
    "Drinks",
    "Salads",
    "Sides + Sweets",
  ];
  const [activeMenuButton, setActiveMenuButton] = useState(1);
  const [selectedMenuButton, setSelectedMenuButton] = useState("Pizza");
  const popupActive = useSelector((state) => state.popupActive);
  let menuData = [];
  // setting up the menu data
  if (selectedMenuButton === "All") {
    for (let i = 1; i < menuButtonTitles.length; i++) {
      let tempData = homepageMenuData[menuButtonTitles[i]];
      for (let j = 0; j < tempData.length; j++) {
        menuData.push(tempData[j]);
      }
    }
  } else {
    menuData = homepageMenuData[selectedMenuButton];
  }

  // creating menu data items
  let renderReadyMenuData = menuData.map((data, index) => {
    return (
      <HomepageMenuItem
        key={index}
        title={data.title}
        description={data.description}
        cost={data.price}
      />
    );
  });

  /// creating menu selector buttons
  const menuSelectorButtonHandler = (title, id) => {
    setSelectedMenuButton(title);
    setActiveMenuButton(id);
  };

  let menuButtons = menuButtonTitles.map((title, index) => {
    return (
      <MenuSelectorButton
        key={index}
        id={index}
        activeId={activeMenuButton}
        title={title}
        onClickHandler={menuSelectorButtonHandler}
      ></MenuSelectorButton>
    );
  });

  return (
    <TopContainer sx={{ width: `${popupActive && "100vw"}` }}>
      <MenuContainer>
        <LogoContainer>
          <LogoImage src={logo} />
        </LogoContainer>
        <Typography
          variant="subtitle1"
          color="secondary.dark"
          sx={{
            textDecoration: "underline",
            fontSize: "38px",
            "@media(max-width: 800px)": {
              fontSize: "24px",
            },
          }}
        >
          &nbsp;Our Specials&nbsp;
        </Typography>
        <MenuSelectorContainer>{menuButtons}</MenuSelectorContainer>
        <MenuGrid>{renderReadyMenuData}</MenuGrid>
      </MenuContainer>
    </TopContainer>
  );
};
export default HomepageMenuTopFile;
