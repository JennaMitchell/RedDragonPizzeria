import { useSelector, useDispatch } from "react-redux";
import {
  TopContainer,
  MenuPlankContainer,
  MenuBlackboardContainer,
  OrderedItemsContainer,
  StyledTypography,
  CustomItemContainer,
  TrashIcon,
  HorizontalChalkUnderline,
  PizzaImage,
} from "./cart-homepage-styled-components";

import horizontalChalkUnderline from "../../../img/line-art/underlines/chalk_underline_horizontal.png";
import { storeActions } from "../../../store/store";

const CartHomepage = () => {
  const cartObject = useSelector((state) => state.cartObject);
  const dispatch = useDispatch();
  let totalPrice = 0;

  const deepCopyOfCartObject = JSON.parse(JSON.stringify(cartObject));

  const renderReadyItems = cartObject.map((item, index) => {
    const deleteIconHandler = () => {
      deepCopyOfCartObject.splice(index, 1);
      dispatch(storeActions.setCartObject(deepCopyOfCartObject));
    };
    if (
      item.title === "Build a Pizza" ||
      item.title === "Custom Pepperoni Pizza"
    ) {
      let title = `${item.userSelectedData[0].item} ${item.title}`;
      let fullDescription = `${item.userSelectedData[0].item}, ${item.userSelectedData[1].item}, ${item.userSelectedData[2].item}, ${item.userSelectedData[3].item}`;
      // Creating the full description of the custom Pizza
      // the first four variables in the item. userSelected Data is size, crust, sauce , and cheese

      // then we need to add to it baesed on the toppings added

      if (item.title === "Custom Pepperoni Pizza") {
        if (!item.pepperoniAdded) {
          title = `${item.userSelectedData[0].item} Cheese Pizza`;
        } else {
          fullDescription = fullDescription + ` , Pepperoni`;
        }
      }
      totalPrice = totalPrice + +item.totalPrice;

      return (
        <CustomItemContainer key={index}>
          <PizzaImage
            src={item.image}
            alt={item.title}
            sx={{ gridColumn: "1/span 1", gridRow: "1/span 1" }}
          />
          <StyledTypography
            sx={{
              gridColumn: "2/span 1",
              gridRow: "1/span 1",
              textAlign: "left",
              position: "relative",
            }}
            variant="h5"
          >
            {title}
            <StyledTypography
              sx={{
                position: "absolute",
                top: "100%",
                left: "10px",
                fontSize: "16px",
              }}
            >
              {` ${fullDescription} `}
            </StyledTypography>
          </StyledTypography>
          {/* need to add size here */}
          <StyledTypography
            sx={{
              gridColumn: "3/span 1",
              gridRow: "1/span 1",
            }}
            variant="h5"
          >
            {`$${item.totalPrice}`}
          </StyledTypography>

          <TrashIcon
            onClick={deleteIconHandler}
            sx={{ gridColumn: "4/span 1", gridRow: "1/span 1" }}
          />
        </CustomItemContainer>
      );
    } else {
      totalPrice = totalPrice + +item.totalPrice;

      return (
        <CustomItemContainer
          key={index}
          sx={{
            height: "max-content",
            marginTop: "20px",
          }}
        >
          <StyledTypography
            sx={{
              gridColumn: "1/span 2",
              gridRow: "1/span 1",
              textAlign: "left",
              marginLeft: "30px",
              height: "max-content",
              marginBottom: "40px",
              position: "relative",
            }}
            variant="h5"
          >
            {item.title}
            <StyledTypography
              sx={{
                position: "absolute",
                top: "100%",
                left: "10px",
                fontSize: "16px",
                textAlign: "left",
                width: "max(90%,90%)",
              }}
            >
              {` ${item.userSelectedData.description} `}
            </StyledTypography>
          </StyledTypography>
          {/* need to add size here */}
          <StyledTypography
            sx={{
              gridColumn: "3/span 1",
              gridRow: "1/span 1",
            }}
            variant="h5"
          >
            {`$${item.totalPrice}`}
          </StyledTypography>

          <TrashIcon
            onClick={deleteIconHandler}
            sx={{ gridColumn: "4/span 1", gridRow: "1/span 1" }}
          />
        </CustomItemContainer>
      );
    }
  });
  //  deepCopyOfCartObject.push({
  //   title: `Build a Pizza`,
  //   userSelectedData: userSelectedItemWithPrice,
  //   image: JSON.stringify(image),
  //   totalPrice: totalPrice,
  // });
  // trimming total Price
  totalPrice = `${totalPrice}`;
  const indexOfDecimal = totalPrice.indexOf(".");
  totalPrice = totalPrice.slice(0, indexOfDecimal + 3);
  return (
    <TopContainer>
      <MenuPlankContainer>
        <MenuBlackboardContainer>
          <OrderedItemsContainer>
            <StyledTypography variant="h3" sx={{ marginLeft: "10px" }}>
              Your Order
            </StyledTypography>

            <HorizontalChalkUnderline
              alt="chalk underline"
              src={horizontalChalkUnderline}
              sx={{ marginTop: "5px", marginBottom: "10px" }}
            />
            {renderReadyItems}
            <HorizontalChalkUnderline
              sx={{ marginTop: "20px" }}
              alt="chalk underline"
              src={horizontalChalkUnderline}
            />
            <CustomItemContainer
              sx={{
                gridTemplateColumns: "max-content max-content",

                marginTop: "20px",
              }}
            >
              <StyledTypography
                variant="h4"
                sx={{
                  textAlign: "left",

                  gridColumn: "1/span 1",
                  gridRow: "1/span 1",
                  marginLeft: "20px",
                }}
              >
                Total :
              </StyledTypography>
              <StyledTypography
                variant="h4"
                sx={{
                  textAlign: "left",

                  gridColumn: "2/span 1",
                  gridRow: "1/span 1",
                  marginRight: "20px",
                }}
              >
                {`$${totalPrice}`}
              </StyledTypography>
            </CustomItemContainer>
          </OrderedItemsContainer>
        </MenuBlackboardContainer>
      </MenuPlankContainer>
    </TopContainer>
  );
};
export default CartHomepage;
