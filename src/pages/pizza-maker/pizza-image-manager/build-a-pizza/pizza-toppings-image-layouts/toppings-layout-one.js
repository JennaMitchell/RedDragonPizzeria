import { styled } from "@mui/material";

const ToppingsLayoutOne = ({ image, alt }) => {
  const FirstImagePosition = styled("img", {
    name: "FirstImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "17.5%",
    left: "22.5%",
    zIndex: 6,
  }));
  const SecondImagePosition = styled("img", {
    name: "SecondImagePosition ",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "17.5%",
    right: "24.5%",
    zIndex: 6,
  }));
  const ThirdImagePosition = styled("img", {
    name: "ThirdImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "40%",
    left: "12.5%",
    zIndex: 6,
  }));
  const FourImagePosition = styled("img", {
    name: "FourImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "calc(16.5% *2.5)",
    right: "14.5%",
    zIndex: 6,
  }));
  const FiveImagePosition = styled("img", {
    name: "FiveImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "calc(17.5% *4)",
    left: "25.5%",
    zIndex: 6,
  }));
  const SixImagePosition = styled("img", {
    name: "SixImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "calc(17.5% *4)",
    right: "27.5%",
    zIndex: 6,
  }));
  const SevenImagePosition = styled("img", {
    name: "SevenImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "12.5%",
    left: "45%",
    zIndex: 6,
  }));
  const EightImagePosition = styled("img", {
    name: "EightImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "10.5%",
    left: "45%",
    zIndex: 6,
  }));
  const NineImagePosition = styled("img", {
    name: "NineImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "53.5%",
    left: "53.5%",
    zIndex: 6,
  }));

  const TenImagePosition = styled("img", {
    name: "TenImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "33.5%",
    left: "35.5%",
    zIndex: 6,
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
export default ToppingsLayoutOne;
