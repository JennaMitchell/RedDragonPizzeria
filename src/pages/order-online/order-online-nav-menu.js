import { useState } from "react";
import orderOnlineHomepageDatabase from "./order-online-homepage-database";

import {
  BlackboardContainer,
  MenuContainer,
  MenuButtonImage,
  MenuButton,
  StyledNavLink,
} from "./order-online-nav-menu-styled-comp";

const OrderOnlineNavMenu = () => {
  const [activeSectionTitle, setActiveSectionTitle] = useState("");
  const data = orderOnlineHomepageDatabase;
  const customPizzaMouseHandler = () => {
    if (activeSectionTitle === "") {
      setActiveSectionTitle("Custom Pizza");
    } else {
      setActiveSectionTitle("");
    }
  };
  const buildAPizzaMouseHandler = () => {
    if (activeSectionTitle === "") {
      setActiveSectionTitle("Build a Pizza");
    } else {
      setActiveSectionTitle("");
    }
  };
  const specilityPizzaHandler = () => {
    if (activeSectionTitle === "") {
      setActiveSectionTitle("Specility Pizza");
    } else {
      setActiveSectionTitle("");
    }
  };
  const drinksMouseHandler = () => {
    if (activeSectionTitle === "") {
      setActiveSectionTitle("Drinks");
    } else {
      setActiveSectionTitle("");
    }
  };
  const saladsMouseHandler = () => {
    if (activeSectionTitle === "") {
      setActiveSectionTitle("Salads");
    } else {
      setActiveSectionTitle("");
    }
  };
  const sidesMouseHandler = () => {
    if (activeSectionTitle === "") {
      setActiveSectionTitle("Sides");
    } else {
      setActiveSectionTitle("");
    }
  };
  return (
    <BlackboardContainer>
      <MenuContainer>
        <MenuButton
          onMouseEnter={specilityPizzaHandler}
          onMouseLeave={specilityPizzaHandler}
        >
          {data[0].title}
          <MenuButtonImage
            sx={{
              opacity: `${activeSectionTitle === "Specility Pizza" && "0.2"}`,
            }}
            src={data[0].image}
            alt={data[0].title}
          />
        </MenuButton>

        <MenuButton
          onMouseEnter={drinksMouseHandler}
          onMouseLeave={drinksMouseHandler}
        >
          {data[1].title}
          <MenuButtonImage
            sx={{
              opacity: `${activeSectionTitle === "Drinks" && "0.2"}`,
            }}
            src={data[1].image}
            alt={data[1].title}
          />
        </MenuButton>

        <MenuButton
          onMouseEnter={saladsMouseHandler}
          onMouseLeave={saladsMouseHandler}
        >
          {data[2].title}
          <MenuButtonImage
            sx={{
              opacity: `${activeSectionTitle === "Salads" && "0.2"}`,
            }}
            src={data[2].image}
            alt={data[2].title}
          />
        </MenuButton>

        <MenuButton
          onMouseEnter={sidesMouseHandler}
          onMouseLeave={sidesMouseHandler}
        >
          {data[3].title}
          <MenuButtonImage
            sx={{
              opacity: `${activeSectionTitle === "Sides" && "0.2"}`,
            }}
            src={data[3].image}
            alt={data[3].title}
          />
        </MenuButton>

        <MenuButton>
          <StyledNavLink
            to="/pizza-maker"
            onMouseEnter={buildAPizzaMouseHandler}
            onMouseLeave={buildAPizzaMouseHandler}
          >
            {data[4].title}
          </StyledNavLink>
          <MenuButtonImage
            sx={{
              opacity: `${activeSectionTitle === "Build a Pizza" && "0.2"}`,
            }}
            src={data[4].image}
            alt={data[4].title}
          />
        </MenuButton>

        <MenuButton>
          <StyledNavLink
            to="/pizza-maker"
            onMouseEnter={customPizzaMouseHandler}
            onMouseLeave={customPizzaMouseHandler}
          >
            {data[5].title}
          </StyledNavLink>
          <MenuButtonImage
            sx={{
              opacity: `${activeSectionTitle === "Custom Pizza" && "0.2"}`,
            }}
            src={data[5].image}
            alt={data[5].title}
          />
        </MenuButton>
      </MenuContainer>
    </BlackboardContainer>
  );
};
export default OrderOnlineNavMenu;
