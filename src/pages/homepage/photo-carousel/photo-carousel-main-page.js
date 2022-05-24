import {
  PhotoGalleryContainer,
  RightSliderButton,
  LeftSliderButton,
  ImageContainer,
} from "./photo-carousel-main-page-styled-components";
import PhotoGalleySlide from "./photo-gallery-slide";
import carouselData from "./home-page-carousel-data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState, useEffect } from "react";

const PhotoCarouselMainPage = () => {
  const [imgContainerEntered, setImgContainerEntered] = useState(false);
  const [currentCarouselId, setCurrentCarouselId] = useState(0);

  const cursorEntersImageHandler = () => {
    setImgContainerEntered(true);
  };
  const cursorExitsImageHandler = () => {
    setImgContainerEntered(false);
  };

  const nextButtonHandler = () => {
    if (currentCarouselId === carouselData.length - 1) {
      setCurrentCarouselId(0);
    } else {
      setCurrentCarouselId(currentCarouselId + 1);
    }
  };
  const previousButtonHandler = () => {
    if (currentCarouselId === 0) {
      setCurrentCarouselId(carouselData.length - 1);
    } else {
      setCurrentCarouselId(currentCarouselId - 1);
    }
  };
  useEffect(() => {
    const timerId = setInterval(() => {
      if (currentCarouselId === carouselData.length - 1) {
        setCurrentCarouselId(0);
      } else {
        setCurrentCarouselId(currentCarouselId + 1);
      }
    }, 20000);
    return () => clearInterval(timerId);
    // the retrun will trigger when you cause the function to re-render due to a state change
  });

  const activeData = carouselData[currentCarouselId];

  return (
    <PhotoGalleryContainer>
      <ImageContainer
        onMouseEnter={cursorEntersImageHandler}
        onMouseLeave={cursorExitsImageHandler}
      >
        <RightSliderButton
          sx={{
            transition: imgContainerEntered
              ? "all 0.5s ease-in"
              : "all 0.5s ease-out",
            visibility: imgContainerEntered ? "visible" : "hidden",
            opacity: imgContainerEntered ? "1" : "0",
          }}
          onClick={nextButtonHandler}
        >
          <ArrowForwardIosIcon />
        </RightSliderButton>
        <LeftSliderButton
          sx={{
            transition: imgContainerEntered
              ? "all 0.5s ease-in"
              : "all 0.5s ease-out",
            visibility: imgContainerEntered ? "visible" : "hidden",
            opacity: imgContainerEntered ? "1" : "0",
          }}
          onClick={previousButtonHandler}
        >
          <ArrowBackIosNewIcon />
        </LeftSliderButton>

        <PhotoGalleySlide
          id={activeData.id}
          image={activeData.image}
          title={activeData.title}
          description={activeData.description}
          fadeInTrigger={false}
        />
      </ImageContainer>
    </PhotoGalleryContainer>
  );
};
export default PhotoCarouselMainPage;
