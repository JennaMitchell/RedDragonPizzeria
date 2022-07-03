import { useState } from "react";
import orderOnlineHomepageDatabase from "./order-online-homepage-database";

import {
  BlackboardContainer,
  MenuContainer,
  MenuButtonImage,
  MenuButton,
  StyledNavLink,
} from "./order-online-nav-menu-styled-comp";
import { useSelector, useDispatch } from "react-redux";
import { storeActions } from "../../store/store";

const OrderOnlineNavMenu = () => {
  const [hoveredSectionTitle, setHoveredSectionTitle] = useState("");

  const data = orderOnlineHomepageDatabase;
  const dispatch = useDispatch();
  const onlineOrderClickedSection = useSelector(
    (state) => state.onlineOrderClickedSection
  );
  const navMenuButtonClicked = useSelector(
    (state) => state.navMenuButtonClicked
  );
  const pizzaMakerButtonHandler = () => {
    dispatch(storeActions.setNavMenuButtonClicked(false));
    dispatch(storeActions.setActiveNavButton("Pizza Maker"));
  };

  // On Hover Event Handler
  const customPizzaMouseEnterHandler = () => {
    setHoveredSectionTitle("Custom Pizza");
  };
  const mouseleaveHandler = () => {
    setHoveredSectionTitle("");
  };
  const buildAPizzaMouseEnterHandler = () => {
    setHoveredSectionTitle("Build a Pizza");
  };
  const specilityPizzaMouseEnterHandler = () => {
    setHoveredSectionTitle("Specility Pizza");
  };
  const drinksMouseEnterHandler = () => {
    setHoveredSectionTitle("Drinks");
  };
  const saladsMouseEnterHandler = () => {
    setHoveredSectionTitle("Salads");
  };
  const sidesMouseEnterHandler = () => {
    setHoveredSectionTitle("Sides");
  };

  ///// On Click Event Handlers

  const specilityPizzaHandler = () => {
    if (onlineOrderClickedSection !== "Specility Pizza") {
      dispatch(storeActions.setOnlineOrderClickedSection("Specility Pizza"));
    }
  };
  const drinksHandler = () => {
    if (onlineOrderClickedSection !== "Drinks") {
      dispatch(storeActions.setOnlineOrderClickedSection("Drinks"));
    }
  };
  const saladsHandler = () => {
    if (onlineOrderClickedSection !== "Salads") {
      dispatch(storeActions.setOnlineOrderClickedSection("Salads"));
    }
  };
  const sidesNSweetsHandler = () => {
    if (onlineOrderClickedSection !== "Sides") {
      dispatch(storeActions.setOnlineOrderClickedSection("Sides"));
    }
  };

  return (
    <BlackboardContainer>
      <MenuContainer>
        <MenuButton
          onMouseEnter={specilityPizzaMouseEnterHandler}
          onMouseLeave={mouseleaveHandler}
          onClick={specilityPizzaHandler}
        >
          {data[0].title}
          <MenuButtonImage
            sx={{
              opacity: `${
                (hoveredSectionTitle === "Specility Pizza" ||
                  onlineOrderClickedSection === "Specility Pizza") &&
                "0.2"
              }`,
            }}
            src={data[0].image}
            alt={data[0].title}
          />
        </MenuButton>

        <MenuButton
          onMouseEnter={drinksMouseEnterHandler}
          onMouseLeave={mouseleaveHandler}
          onClick={drinksHandler}
        >
          {data[1].title}
          <MenuButtonImage
            sx={{
              opacity: `${
                (hoveredSectionTitle === "Drinks" ||
                  onlineOrderClickedSection === "Drinks") &&
                "0.2"
              }`,
            }}
            src={data[1].image}
            alt={data[1].title}
          />
        </MenuButton>

        <MenuButton
          onMouseEnter={saladsMouseEnterHandler}
          onMouseLeave={mouseleaveHandler}
          onClick={saladsHandler}
        >
          {data[2].title}
          <MenuButtonImage
            sx={{
              opacity: `${
                (hoveredSectionTitle === "Salads" ||
                  onlineOrderClickedSection === "Salads") &&
                "0.2"
              }`,
            }}
            src={data[2].image}
            alt={data[2].title}
          />
        </MenuButton>

        <MenuButton
          onMouseEnter={sidesMouseEnterHandler}
          onMouseLeave={mouseleaveHandler}
          onClick={sidesNSweetsHandler}
        >
          {data[3].title}
          <MenuButtonImage
            sx={{
              opacity: `${
                (hoveredSectionTitle === "Sides" ||
                  onlineOrderClickedSection === "Sides") &&
                "0.2"
              }`,
            }}
            src={data[3].image}
            alt={data[3].title}
          />
        </MenuButton>

        <MenuButton sx={{ zIndex: `${navMenuButtonClicked && "0"}` }}>
          <StyledNavLink
            to="/pizza-maker"
            onMouseEnter={buildAPizzaMouseEnterHandler}
            onMouseLeave={mouseleaveHandler}
            onClick={pizzaMakerButtonHandler}
          >
            {data[4].title}
          </StyledNavLink>
          <MenuButtonImage
            sx={{
              opacity: `${hoveredSectionTitle === "Build a Pizza" && "0.2"}`,
            }}
            src={data[4].image}
            alt={data[4].title}
          />
        </MenuButton>

        <MenuButton sx={{ zIndex: `${navMenuButtonClicked && "0"}` }}>
          <StyledNavLink
            to="/pizza-maker"
            onMouseEnter={customPizzaMouseEnterHandler}
            onMouseLeave={mouseleaveHandler}
            onClick={pizzaMakerButtonHandler}
          >
            {data[5].title}
          </StyledNavLink>
          <MenuButtonImage
            sx={{
              opacity: `${hoveredSectionTitle === "Custom Pizza" && "0.2"}`,
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
