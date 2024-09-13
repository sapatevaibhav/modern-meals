import React, { useState } from "react";
import styled from "styled-components";
import image1 from "/home_gallery/image_1.png";
import image2 from "/home_gallery/image_2.png";
import image3 from "/home_gallery/image_3.png";
import image4 from "/home_gallery/image_4.png";
import image5 from "/home_gallery/image_5.png";
import image6 from "/home_gallery/image_6.png";
import image7 from "/home_gallery/image_7.png";
import image8 from "/home_gallery/image_8.png";
import Modal from '../pages/Modal';
const GalleryContainer = styled.div`
  background-color: #f1f7fb;
  border-top-left-radius: 75px;
  border-top-right-radius: 75px;
  padding: 20px;
  margin: 50px 30px;
  text-align: center;
`;
const Title = styled.h1`
  font-family: "Tangerine", cursive;
  color: #00148f;
  font-size: 78px;
  margin: 0;
`;
const ImagesGrid = styled.div`
  display: grid;
  gap: 10px; 
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px; 
  
  @media (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr); 
  }
  
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
  position: relative;
  overflow: hidden; 
  grid-row: span 2;
  
  @media (max-width: 1200px) {
    &:nth-child(odd) {
      grid-row: span 2;
    }
    &:nth-child(even) {
      grid-row: span 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 10px;
  cursor: pointer;
`;
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];
const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <>
      <GalleryContainer>
        <Title>Gallery</Title>
        <ImagesGrid>
          {images.map((image, index) => (
            <ImageWrapper key={index}>
              <Image src={image} alt={`Gallery Image ${index + 1}`} onClick={() => openModal(index)} />
            </ImageWrapper>
          ))}
        </ImagesGrid>
      </GalleryContainer>
      <Modal
        isOpen={modalOpen}
        image={images[currentIndex]}
        onClose={closeModal}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  );
};
export default Gallery;
