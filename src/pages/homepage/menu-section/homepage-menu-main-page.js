import {
  TopContainer,
  MenuContainer,
  LogoContainer,
  LogoImage,
} from "./homepage-menu-main-page-styled-components";
import { Typography, Grid } from "@mui/material";
import { useState } from "react";
import MenuSelectorButton from "./hompage-menu-selector-button";
import logo from "../../../img/logo.png";
import homepageMenuData from "./homepage-menu-data";
import HomepageMenuItem from "./homepage-menu-item";
import { MenuSelectorContainer } from "../../../generic-styled-components/generic-styled-components";

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
    <TopContainer>
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
            margin: "20px 0 20px 0",
          }}
        >
          &nbsp;Specility Menu&nbsp;
        </Typography>
        <MenuSelectorContainer>{menuButtons}</MenuSelectorContainer>
        <Grid
          columns={4}
          container
          spacing={3}
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {renderReadyMenuData}
        </Grid>
      </MenuContainer>
    </TopContainer>
  );
};
export default HomepageMenuTopFile;
