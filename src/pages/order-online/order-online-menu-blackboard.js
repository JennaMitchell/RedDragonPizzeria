import {
  BlackboardContainer,
  MenuContainer,
  FourColumnContainer,
  ThreeColumnContainer,
  HorizonalUnderline,
} from "./order-online-menu-blackboard-styled-components";
import { pizzaMenuDatabase } from "../full-menu/menu-sections/pizza-section/pizza-menu-database";
import { drinksDatabase } from "../full-menu/menu-sections/drink-section/drinks-menu-database";
import { dessertsNSidesData } from "../full-menu/menu-sections/desserts-sides-section/desserts-sides-database";
import MenuCard from "./order-items/menu-card";
import { StyledTypography } from "./order-online-homepage-styled-components";
import horizontalChalkUnderline from "../../img/line-art/underlines/chalk_underline_horizontal.png";
import { saladData } from "../full-menu/menu-sections/salad-section/salad-menu-database";
import { useSelector } from "react-redux";
import SpecilityPizzaPopup from "./popups/specility-pizza-popup";
import DrinksNCookiePopup from "./popups/drinks-cookie-popup";
import SaladsPopup from "./popups/salads-popup";
import SidesPopup from "./popups/sides-popup";

const OrderOnlineMenuBlackboard = ({ selectedMenuItem }) => {
  // SPECILITY PIZZA
  const specilityPizzaData = pizzaMenuDatabase.pizza;
  const onlineOrderPopupType = useSelector(
    (state) => state.onlineOrderPopupType
  );

  const specilityPizzaRenderReadyData = specilityPizzaData.map(
    (type, index) => {
      return (
        <MenuCard key={index} index={index} data={type} section={"pizza"} />
      );
    }
  );
  // DRINKS
  const beersData = drinksDatabase["Beer"];
  const beersRenderReadyData = beersData.map((type, index) => {
    return (
      <MenuCard key={index} index={index} data={type} section={"drinks"} />
    );
  });

  const cocktailsData = drinksDatabase["Cocktails"];
  const cocktailsRenderReadyData = cocktailsData.map((type, index) => {
    return (
      <MenuCard key={index} index={index} data={type} section={"drinks"} />
    );
  });
  const shotsData = drinksDatabase["Shots"];
  const shotsRenderReadyData = shotsData.map((type, index) => {
    return (
      <MenuCard key={index} index={index} data={type} section={"drinks"} />
    );
  });
  const cidersData = drinksDatabase["Ciders"];
  const cidersRenderReadyData = cidersData.map((type, index) => {
    return (
      <MenuCard key={index} index={index} data={type} section={"drinks"} />
    );
  });

  // SALADS

  const saladRenderReadyData = saladData.map((type, index) => {
    return (
      <MenuCard key={index} index={index} data={type} section={"salads"} />
    );
  });

  // Sides n' Sweets

  const sidesRenderReadyData = dessertsNSidesData["Sides"].map(
    (type, index) => {
      return (
        <MenuCard key={index} index={index} data={type} section={"sides"} />
      );
    }
  );
  const cookieRenderReadyData = dessertsNSidesData["Cookie"].map(
    (type, index) => {
      return (
        <MenuCard key={index} index={index} data={type} section={"sides"} />
      );
    }
  );
  sidesRenderReadyData.push(cookieRenderReadyData);

  /// Creating What is Displayed to the User

  // Specility Pizza
  let renderReadyMenuData = [];
  if (selectedMenuItem === "Specility Pizza") {
    renderReadyMenuData = (
      <MenuContainer>
        <FourColumnContainer>
          {specilityPizzaRenderReadyData}
        </FourColumnContainer>
      </MenuContainer>
    );
  }

  /// Drinks
  if (selectedMenuItem === "Drinks") {
    renderReadyMenuData = (
      <MenuContainer>
        <StyledTypography variant="h2" sx={{ marginTop: "20px" }}>
          Beers
        </StyledTypography>
        <HorizonalUnderline
          src={horizontalChalkUnderline}
          alt="Horizontal Underline"
        />
        <FourColumnContainer>{beersRenderReadyData}</FourColumnContainer>
        <StyledTypography variant="h2">Cocktails</StyledTypography>
        <HorizonalUnderline
          src={horizontalChalkUnderline}
          alt="Horizontal Underline"
        />
        <ThreeColumnContainer sx={{ marginLeft: "2.5%" }}>
          {cocktailsRenderReadyData}
        </ThreeColumnContainer>
        <StyledTypography variant="h2">Shots</StyledTypography>
        <HorizonalUnderline
          src={horizontalChalkUnderline}
          alt="Horizontal Underline"
        />
        <ThreeColumnContainer sx={{ marginLeft: "2.5%" }}>
          {shotsRenderReadyData}
        </ThreeColumnContainer>
        <StyledTypography variant="h2">Ciders</StyledTypography>
        <HorizonalUnderline
          src={horizontalChalkUnderline}
          alt="Horizontal Underline"
        />
        <ThreeColumnContainer sx={{ marginLeft: "2.5%" }}>
          {cidersRenderReadyData}
        </ThreeColumnContainer>
      </MenuContainer>
    );
  }
  /// Salads
  if (selectedMenuItem === "Salads") {
    renderReadyMenuData = (
      <MenuContainer>
        <ThreeColumnContainer>{saladRenderReadyData}</ThreeColumnContainer>
      </MenuContainer>
    );
  }
  // Sides n' Sweets
  if (selectedMenuItem === "Sides") {
    renderReadyMenuData = (
      <MenuContainer>
        <ThreeColumnContainer>{sidesRenderReadyData}</ThreeColumnContainer>
      </MenuContainer>
    );
  }
  console.log(onlineOrderPopupType);

  return (
    <BlackboardContainer>
      {onlineOrderPopupType === "pizza" && (
        <SpecilityPizzaPopup toggleOpen={true} />
      )}
      {onlineOrderPopupType === "drinks" && (
        <DrinksNCookiePopup toggleOpen={true} />
      )}
      {onlineOrderPopupType === "salads" && <SaladsPopup toggleOpen={true} />}
      {onlineOrderPopupType === "sides" && <SidesPopup toggleOpen={true} />}
      {onlineOrderPopupType === "cookie" && (
        <DrinksNCookiePopup toggleOpen={true} />
      )}
      {renderReadyMenuData}
    </BlackboardContainer>
  );
};
export default OrderOnlineMenuBlackboard;
