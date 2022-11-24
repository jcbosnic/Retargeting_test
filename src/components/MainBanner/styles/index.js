import styled from "styled-components";

export const MainBannerContainer = styled.div`
  background: #f0f0f0;
  max-width: 1920px;
  position: relative;
`;

export const NavBanner = styled.div`
  display: flex;
  justify-content: space-between;
  top: 50%;
  position: absolute;
  width: 100%;
`;

export const ButtonBanner = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border: none;
  border-radius: 50px;
  color: #ffffff;
  cursor: pointer;
  height: 50px;
  margin: 0 20px;
  width: 50px;
`;

export const ArrowRight = styled.span`
  border: solid #ffffff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const ArrowLeft = styled.span`
  border: solid #ffffff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const ImgCarousel = styled.img`
  width: 100%;
`;
