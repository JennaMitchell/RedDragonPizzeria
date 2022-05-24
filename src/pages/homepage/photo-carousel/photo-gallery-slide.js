import {
  PhotoGalleryImg,
  LeftBanner,
  RightBanner,
} from "./photo-gallery-slide-styled-components";
import { Typography } from "@mui/material";

import { useState } from "react";

const PhotoGalleySlide = ({ id, image, title, description }) => {
  const [currentId, setCurrentId] = useState(0);
  setTimeout(() => {
    if (currentId !== id) {
      setCurrentId(id);
    }
  }, 500);

  return (
    <>
      {id % 2 === 0 && (
        <RightBanner
          sx={{
            transition: currentId === id && "all 0.5s ease-in",
            visibility: currentId === id && "visible",
            opacity: currentId === id && "1",
          }}
        >
          <Typography>{title}</Typography>
          <Typography>----------------------</Typography>
          <Typography>{description}</Typography>
        </RightBanner>
      )}
      {id % 2 === 1 && (
        <LeftBanner
          sx={{
            transition: currentId === id && "all 0.5s ease-in",
            visibility: currentId === id && "visible",
            opacity: currentId === id && "1",
          }}
        >
          <Typography>{title}</Typography>
          <Typography>----------------------</Typography>
          <Typography>{description}</Typography>
        </LeftBanner>
      )}

      <PhotoGalleryImg
        src={image}
        alt="pizza dough"
        id={id}
        sx={{
          transition: currentId === id && "all 0.5s ease-in",
          visibility: currentId === id && "visible",
          opacity: currentId === id && "1",
        }}
      ></PhotoGalleryImg>
    </>
  );
};

export default PhotoGalleySlide;
