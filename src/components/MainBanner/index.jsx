import React, { useState } from "react";
import {
  MainBannerContainer,
  NavBanner,
  ButtonBanner,
  ArrowRight,
  ArrowLeft,
  ImgCarousel,
} from "./styles";

const MainBanner = ({ podList, contentType }) => {
  const bannerPod = podList.find((pod) => pod.system.type === contentType);
  const images = bannerPod ? bannerPod.elements.imagenes.value : [{ url: "" }];
  const [currentImage, setcurrentImage] = useState(0);

  const nextImage = () => {
    if (currentImage === images.length - 1) return setcurrentImage(0);
    setcurrentImage((prev) => prev + 1);
  };

  const prevImage = () => {
    if (currentImage === 0) return setcurrentImage(images.length - 1);
    setcurrentImage((prev) => prev - 1);
  };

  return (
    <MainBannerContainer>
      <ImgCarousel src={images[currentImage].url} alt="carrusel" />
      <NavBanner>
        <ButtonBanner onClick={prevImage}>
          <ArrowLeft />
        </ButtonBanner>
        <ButtonBanner onClick={nextImage}>
          <ArrowRight />
        </ButtonBanner>
      </NavBanner>
    </MainBannerContainer>
  );
};

export default MainBanner;
