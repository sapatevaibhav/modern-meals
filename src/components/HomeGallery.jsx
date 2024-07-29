import React from "react";
import styled from "styled-components";
import image1 from "/home_gallery/image_1.png";
import image2 from "/home_gallery/image_2.png";
import image3 from "/home_gallery/image_3.png";
import image4 from "/home_gallery/image_4.png";
import image5 from "/home_gallery/image_5.png";
import image6 from "/home_gallery/image_6.png";
import image7 from "/home_gallery/image_7.png";
import image8 from "/home_gallery/image_8.png";

const GalleryContainer = styled.div`
  background-color: #f1f7fb;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 20px;
  margin: 50px 70px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Tangerine", cursive;
  color: #00148f;
  font-size: 78px;
`;

const ImagesGrid = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
  align-items: start;
  padding: 20px 0;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  position: relative;

  &:nth-child(odd) {
    margin-top: 0;
  }

  &:nth-child(even) {
    margin-top: 50px;
  }

  @media (max-width: 600px) {
    max-width: 300px;
    margin-top: 20px !important;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <Title>Gallery</Title>
      <ImagesGrid>
        <ImageWrapper>
          <Image src={image1} alt="Gallery Image 1" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={image2} alt="Gallery Image 2" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={image3} alt="Gallery Image 3" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={image4} alt="Gallery Image 4" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={image5} alt="Gallery Image 5" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={image6} alt="Gallery Image 6" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={image7} alt="Gallery Image 7" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={image8} alt="Gallery Image 8" />
        </ImageWrapper>
      </ImagesGrid>
    </GalleryContainer>
  );
};

export default Gallery;
