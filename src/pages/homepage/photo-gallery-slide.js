import {
  PhotoGalleryImg,
  LeftBanner,
  RightBanner,
} from "./photo-gallery-slide-styled-components";
import { Typography } from "@mui/material";

const PhotoGalleySlide = ({ id, image }) => {
  let savedId = id;
  return (
    <>
      {savedId % 2 === 0 && <RightBanner></RightBanner>}
      {savedId % 2 === 1 && <LeftBanner></LeftBanner>}

      <PhotoGalleryImg
        src={image}
        alt="pizza dough"
        id={savedId}
      ></PhotoGalleryImg>
    </>
  );
};

export default PhotoGalleySlide;
