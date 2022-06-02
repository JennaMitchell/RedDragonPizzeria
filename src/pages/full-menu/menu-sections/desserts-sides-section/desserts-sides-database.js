import {
  LeftImageContainer,
  RightImageContainer,
  ThreeRowsTextContainer,
  PictureTextContainer,
  StyledTypography,
} from "../general-styled-components/general-styled-components";

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
      description:
        "Homemade bread sticks, coated in garlic butter and topped with graded Romono Cheese, served with a side of tomato sauce ",
      price: "sm. $4.99 lg. $6.99",
    },
    {
      title: "Garlic Knots",
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
        <PictureTextContainer key={index}>
          <LeftImageContainer alt={sides.title} />
          <ThreeRowsTextContainer>
            <StyledTypography
              variant="h4"
              sx={{ textAlign: "left", width: "max(100%,100%)" }}
            >
              {sides.title}
            </StyledTypography>
            <StyledTypography
              variant="p"
              sx={{
                textAlign: "left",
                width: "max(100%,100%)",
                marginTop: "10px",
              }}
            >
              {sides.description}
            </StyledTypography>
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
        </PictureTextContainer>
      );
    } else {
      return (
        <PictureTextContainer key={index}>
          <ThreeRowsTextContainer>
            <StyledTypography
              variant="h4"
              sx={{
                textAlign: "right",
                width: "max(100%,100%)",
                marginTop: "10px",
              }}
            >
              {sides.title}
            </StyledTypography>
            <StyledTypography
              variant="p"
              sx={{
                textAlign: "right",
                width: "max(100%,100%)",
                marginTop: "10px",
              }}
            >
              {sides.description}
            </StyledTypography>
            <StyledTypography
              variant="p"
              sx={{
                textAlign: "right",
                width: "max(100%,100%)",
                marginTop: "10px",
              }}
            >
              {sides.price}
            </StyledTypography>
          </ThreeRowsTextContainer>
          <RightImageContainer alt={sides.title} />
        </PictureTextContainer>
      );
    }
  }
);

const pizzaCookieSection = dessertsNSidesData.Cookie.map((data, index) => {
  return (
    <ThreeRowsTextContainer key={index}>
      <StyledTypography
        variant="h4"
        sx={{
          textAlign: "center",
          width: "max(100%,100%)",
          marginTop: "10px",
        }}
      >
        {data.title}
      </StyledTypography>
      <StyledTypography
        variant="p"
        sx={{
          textAlign: "center",
          width: "max(100%,100%)",
          marginTop: "10px",
        }}
      >
        {data.description}
      </StyledTypography>
      <StyledTypography
        variant="p"
        sx={{
          textAlign: "center",
          width: "max(100%,100%)",
          marginTop: "10px",
        }}
      >
        {data.price}
      </StyledTypography>
    </ThreeRowsTextContainer>
  );
});

export { renderReadySidesContainer, pizzaCookieSection };
