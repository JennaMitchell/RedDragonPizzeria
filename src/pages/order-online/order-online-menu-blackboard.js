import {
  BlackboardContainer,
  MenuContainer,
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
import useMediaQuery from "@mui/material/useMediaQuery";

import onlineOrderColumnsSorter from "../../components/custom-hooks/online-order-columns-sorter";

const OrderOnlineMenuBlackboard = ({ selectedMenuItem }) => {
  // SPECILITY PIZZA
  const specilityPizzaData = pizzaMenuDatabase.pizza;
  const onlineOrderPopupType = useSelector(
    (state) => state.onlineOrderPopupType
  );
  const threeColumnLimitActive = useMediaQuery("(max-width:1200px)");
  const twoColumnLimitActive = useMediaQuery("(max-width:1000px)");
  const oneColumnLimitActive = useMediaQuery("(max-width:540px)");
  let mediaQueriesInactive = true;
  let maxNumberOfColumns = 0;
  if (threeColumnLimitActive) {
    mediaQueriesInactive = false;
    maxNumberOfColumns = 3;
  }
  if (twoColumnLimitActive) {
    mediaQueriesInactive = false;
    maxNumberOfColumns = 2;
  }
  if (oneColumnLimitActive) {
    mediaQueriesInactive = false;
    maxNumberOfColumns = 1;
  }

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
        {mediaQueriesInactive &&
          onlineOrderColumnsSorter(specilityPizzaRenderReadyData, 4)}
        {maxNumberOfColumns === 3 &&
          onlineOrderColumnsSorter(specilityPizzaRenderReadyData, 3)}
        {maxNumberOfColumns === 2 &&
          onlineOrderColumnsSorter(specilityPizzaRenderReadyData, 2)}
        {maxNumberOfColumns === 1 &&
          onlineOrderColumnsSorter(specilityPizzaRenderReadyData, 1)}
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
        {mediaQueriesInactive &&
          onlineOrderColumnsSorter(beersRenderReadyData, 4)}
        {maxNumberOfColumns === 3 &&
          onlineOrderColumnsSorter(beersRenderReadyData, 3)}
        {maxNumberOfColumns === 2 &&
          onlineOrderColumnsSorter(beersRenderReadyData, 2)}
        {maxNumberOfColumns === 1 &&
          onlineOrderColumnsSorter(beersRenderReadyData, 1)}

        <StyledTypography variant="h2">Cocktails</StyledTypography>
        <HorizonalUnderline
          src={horizontalChalkUnderline}
          alt="Horizontal Underline"
        />

        {mediaQueriesInactive &&
          onlineOrderColumnsSorter(cocktailsRenderReadyData, 3)}
        {maxNumberOfColumns === 3 &&
          onlineOrderColumnsSorter(cocktailsRenderReadyData, 3)}
        {maxNumberOfColumns === 2 &&
          onlineOrderColumnsSorter(cocktailsRenderReadyData, 2)}
        {maxNumberOfColumns === 1 &&
          onlineOrderColumnsSorter(cocktailsRenderReadyData, 1)}

        <StyledTypography variant="h2">Shots</StyledTypography>
        <HorizonalUnderline
          src={horizontalChalkUnderline}
          alt="Horizontal Underline"
        />
        {mediaQueriesInactive &&
          onlineOrderColumnsSorter(shotsRenderReadyData, 3)}
        {maxNumberOfColumns === 3 &&
          onlineOrderColumnsSorter(shotsRenderReadyData, 3)}
        {maxNumberOfColumns === 2 &&
          onlineOrderColumnsSorter(shotsRenderReadyData, 2)}
        {maxNumberOfColumns === 1 &&
          onlineOrderColumnsSorter(shotsRenderReadyData, 1)}
        <StyledTypography variant="h2">Ciders</StyledTypography>
        <HorizonalUnderline
          src={horizontalChalkUnderline}
          alt="Horizontal Underline"
        />

        {mediaQueriesInactive &&
          onlineOrderColumnsSorter(cidersRenderReadyData, 3)}
        {maxNumberOfColumns === 3 &&
          onlineOrderColumnsSorter(cidersRenderReadyData, 3)}
        {maxNumberOfColumns === 2 &&
          onlineOrderColumnsSorter(cidersRenderReadyData, 2)}
        {maxNumberOfColumns === 1 &&
          onlineOrderColumnsSorter(cidersRenderReadyData, 1)}
      </MenuContainer>
    );
  }
  /// Salads
  if (selectedMenuItem === "Salads") {
    renderReadyMenuData = (
      <MenuContainer>
        {mediaQueriesInactive &&
          onlineOrderColumnsSorter(saladRenderReadyData, 3)}
        {maxNumberOfColumns === 3 &&
          onlineOrderColumnsSorter(saladRenderReadyData, 3)}
        {maxNumberOfColumns === 2 &&
          onlineOrderColumnsSorter(saladRenderReadyData, 2)}
        {maxNumberOfColumns === 1 &&
          onlineOrderColumnsSorter(saladRenderReadyData, 1)}
      </MenuContainer>
    );
  }
  // Sides n' Sweets
  if (selectedMenuItem === "Sides") {
    renderReadyMenuData = (
      <MenuContainer>
        {mediaQueriesInactive &&
          onlineOrderColumnsSorter(sidesRenderReadyData, 3)}
        {maxNumberOfColumns === 3 &&
          onlineOrderColumnsSorter(sidesRenderReadyData, 3)}
        {maxNumberOfColumns === 2 &&
          onlineOrderColumnsSorter(sidesRenderReadyData, 2)}
        {maxNumberOfColumns === 1 &&
          onlineOrderColumnsSorter(sidesRenderReadyData, 1)}
      </MenuContainer>
    );
  }

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
