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
          <Typography
            sx={{
              fontSize: "inherit",
              borderBottom: "3px solid white",
              borderBottomStyle: "dashed",
              paddingBottom: "5px",
              "@media(max-width:700px)": {
                borderBottom: "2px solid white",
              },
            }}
          >
            {title}
          </Typography>

          <Typography sx={{ fontSize: "inherit", paddingTop: "5px" }}>
            {description}
          </Typography>
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
          <Typography
            sx={{
              fontSize: "inherit",
              borderBottom: "3px solid white",
              borderBottomStyle: "dashed",
              paddingBottom: "5px",
            }}
          >
            {title}
          </Typography>

          <Typography sx={{ fontSize: "inherit", paddingTop: "5px" }}>
            {description}
          </Typography>
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
