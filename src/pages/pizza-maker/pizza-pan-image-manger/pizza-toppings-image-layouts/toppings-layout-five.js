import { styled } from "@mui/material";

const ToppingsLayoutFive = ({ image, alt }) => {
  const FirstImagePosition = styled("img", {
    name: "FirstImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "32.5%",
    left: "20.5%",
    zIndex: 10,
  }));
  const SecondImagePosition = styled("img", {
    name: "SecondImagePosition ",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "34.5%",
    right: "17.5%",
    zIndex: 10,
  }));
  const ThirdImagePosition = styled("img", {
    name: "ThirdImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "47%",
    left: "18.5%",
    zIndex: 10,
  }));
  const FourImagePosition = styled("img", {
    name: "FourImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "62.5%",
    right: "30.5%",
    zIndex: 10,
  }));
  const FiveImagePosition = styled("img", {
    name: "FiveImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "20.5%",
    left: "18.5%",
    zIndex: 10,
  }));
  const SixImagePosition = styled("img", {
    name: "SixImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "40%",
    right: "10.5%",
    zIndex: 10,
  }));
  const SevenImagePosition = styled("img", {
    name: "SevenImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "25.5%",
    left: "44%",
    zIndex: 10,
  }));
  const EightImagePosition = styled("img", {
    name: "EightImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "20.5%",
    left: "44%",
    zIndex: 10,
  }));
  const NineImagePosition = styled("img", {
    name: "NineImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    top: "45.5%",
    left: "46%",
    zIndex: 10,
  }));

  const TenImagePosition = styled("img", {
    name: "TenImagePosition",
    slot: "Wrapper",
  })(() => ({
    width: "max(10%,10%)",
    height: "max(10%,10%)",
    position: "absolute",
    bottom: "30.5%",
    left: "28.5%",
    zIndex: 10,
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
export default ToppingsLayoutFive;
