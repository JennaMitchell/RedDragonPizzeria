import {
  LeftImageContainer,
  RightImageContainer,
  ThreeRowsTextContainer,
  PictureTextContainer,
  StyledTypography,
} from "../general-styled-components/general-styled-components";
import {
  DescriptionTitle,
  DescriptionText,
} from "./desserts-sides-section-styled-components";
import breadLineArt from "../../../../img/line-art/bread/bread-line-art.png";
import garlicKnotLineArt from "../../../../img/line-art/bread/garlic-knot-line-art.png";
const dessertsNSidesData = {
  Cookie: [
    {
      title: "Pizza Cookie ",
      description: "Gaint chocalate chip cookie, cooked in a pizza pan.",
      price: "$9.99",
    },
  ],
  Sides: [
    {
      title: "Garlic Sticks ",
      image: breadLineArt,
      description:
        "Homemade bread sticks, coated in garlic butter and topped with graded Romono Cheese, served with a side of tomato sauce ",
      price: "sm. $4.99 lg. $6.99",
    },
    {
      title: "Garlic Knots",
      image: garlicKnotLineArt,
      description:
        "Homemade bread knots, coated in butter, and topped with garlic salt ",
      price: "sm. $4.99 lg. $6.99",
    },
  ],
};

const renderReadySidesContainer = dessertsNSidesData.Sides.map(
  (sides, index) => {
    if (index % 2 === 0) {
      return (
        <PictureTextContainer
          key={index}
          sx={{
            "@media(max-width:875px)": { marginTop: "20px" },
            "@media(max-width:700px)": { marginTop: "40px" },
          }}
        >
          <LeftImageContainer
            alt={sides.title}
            src={sides.image}
            sx={{
              justifySelf: "right",
              marginRight: "10px",
              "@media(max-width: 850px)": {
                width: "max(150px,150px)",
                height: "max(100px,100px)",
              },
            }}
          />
          <ThreeRowsTextContainer>
            <DescriptionTitle>{sides.title}</DescriptionTitle>
            <DescriptionText>{sides.description}</DescriptionText>
            <DescriptionText>{sides.price}</DescriptionText>
          </ThreeRowsTextContainer>
        </PictureTextContainer>
      );
    } else {
      return (
        <PictureTextContainer key={index}>
          <ThreeRowsTextContainer
            sx={{
              "@media(max-width:875px)": { marginTop: "20px" },
              "@media(max-width:700px)": { marginTop: "40px" },
            }}
          >
            <DescriptionTitle>{sides.title}</DescriptionTitle>
            <DescriptionText>{sides.description}</DescriptionText>
            <StyledTypography
              variant="p"
              sx={{
                textAlign: "left",
                width: "max(100%,100%)",
                marginTop: "10px",
              }}
            >
              {sides.price}
            </StyledTypography>
          </ThreeRowsTextContainer>
          <RightImageContainer
            alt={sides.title}
            src={sides.image}
            sx={{
              justifySelf: "left",
              marginLeft: "10px",
              "@media(max-width: 850px)": {
                width: "max(150px,150px)",
                height: "max(100px,100px)",
              },
            }}
          />
        </PictureTextContainer>
      );
    }
  }
);

const pizzaCookieSection = dessertsNSidesData.Cookie.map((data, index) => {
  return (
    <ThreeRowsTextContainer
      key={index}
      sx={{
        "@media(max-width:875px)": { marginTop: "40px" },
        "@media(max-width:700px)": { marginTop: "30px" },
      }}
    >
      <DescriptionTitle sx={{ textAlign: "center" }}>
        {data.title}
      </DescriptionTitle>
      <DescriptionText>{data.description}</DescriptionText>
      <DescriptionText>{data.price}</DescriptionText>
    </ThreeRowsTextContainer>
  );
});

export { renderReadySidesContainer, pizzaCookieSection, dessertsNSidesData };
