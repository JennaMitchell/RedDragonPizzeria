import { styled } from "@mui/material";

const ToppingsLayoutFour = ({ image, alt }) => {
  const FirstImagePosition = styled("img", {
    name: "FirstImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "40.5%",
    left: "22.5%",
    zIndex: 9,
  }));
  const SecondImagePosition = styled("img", {
    name: "SecondImagePosition ",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "40.5%",
    right: "25.5%",
    zIndex: 9,
  }));
  const ThirdImagePosition = styled("img", {
    name: "ThirdImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "64%",
    left: "15.5%",
    zIndex: 9,
  }));
  const FourImagePosition = styled("img", {
    name: "FourImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "55%",
    right: "27.5%",
    zIndex: 9,
  }));
  const FiveImagePosition = styled("img", {
    name: "FiveImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "10.5%",
    left: "30.5%",
    zIndex: 9,
  }));
  const SixImagePosition = styled("img", {
    name: "SixImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "17%",
    right: "36.5%",
    zIndex: 9,
  }));
  const SevenImagePosition = styled("img", {
    name: "SevenImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "36.5%",
    left: "45%",
    zIndex: 9,
  }));
  const EightImagePosition = styled("img", {
    name: "EightImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "35.5%",
    left: "44%",
    zIndex: 9,
  }));
  const NineImagePosition = styled("img", {
    name: "NineImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "22.5%",
    left: "58.5%",
    zIndex: 9,
  }));

  const TenImagePosition = styled("img", {
    name: "TenImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "20.5%",
    left: "28.5%",
    zIndex: 9,
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
export default ToppingsLayoutFour;
