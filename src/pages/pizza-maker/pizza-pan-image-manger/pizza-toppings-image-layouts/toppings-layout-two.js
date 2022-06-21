import { styled } from "@mui/material";

const ToppingsLayoutTwo = ({ image, alt }) => {
  const FirstImagePosition = styled("img", {
    name: "FirstImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "27.5%",
    left: "15.5%",
    zIndex: 7,
  }));
  const SecondImagePosition = styled("img", {
    name: "SecondImagePosition ",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "25.5%",
    right: "16.5%",
    zIndex: 7,
  }));
  const ThirdImagePosition = styled("img", {
    name: "ThirdImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "calc(21.5% *2.5)",
    left: "12.5%",
    zIndex: 7,
  }));
  const FourImagePosition = styled("img", {
    name: "FourImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "calc(21.5% *2.5)",
    right: "18.5%",
    zIndex: 7,
  }));
  const FiveImagePosition = styled("img", {
    name: "FiveImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "18.5%",
    left: "36.5%",
    zIndex: 7,
  }));
  const SixImagePosition = styled("img", {
    name: "SixImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "65%",
    right: "38.5%",
    zIndex: 7,
  }));
  const SevenImagePosition = styled("img", {
    name: "SevenImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "12.5%",
    left: "55%",
    zIndex: 7,
  }));
  const EightImagePosition = styled("img", {
    name: "EightImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "35.5%",
    left: "35%",
    zIndex: 7,
  }));
  const NineImagePosition = styled("img", {
    name: "NineImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "30.5%",
    left: "53.5%",
    zIndex: 7,
  }));

  const TenImagePosition = styled("img", {
    name: "TenImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "21.5%",
    left: "35.5%",
    zIndex: 7,
  }));
  return (
    <>
      <FirstImagePosition src={image} alt={alt} />
      <SecondImagePosition src={image} alt={alt} />
      <ThirdImagePosition src={image} alt={alt} />
      <FourImagePosition src={image} alt={alt} />
      <FiveImagePosition src={image} alt={alt} />
      <SixImagePosition src={image} alt={alt} />
      <SevenImagePosition src={image} alt={alt} />
      <EightImagePosition src={image} alt={alt} />
      <NineImagePosition src={image} alt={alt} />
      <TenImagePosition src={image} alt={alt} />
    </>
  );
};
export default ToppingsLayoutTwo;
