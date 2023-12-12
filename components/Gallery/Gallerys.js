// Gallery.js
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import CustomModal from '../CustomModal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg'];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const openModal = (imageUrl, imageAlt) => {
    setSelectedImage(imageUrl);
    setSelectedImageAlt(imageAlt);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">M3M Noida Sector-94</h1>
      <Slider {...settings} className="mb-8">
        {images.map((image, index) => (
          <div key={index} className="relative h-96">
            <Image
              src={`/${image}`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(`/${image}`, `Image ${index + 1}`)}
              width={1920}
              height={1280}
            />
          </div>
        ))}
      </Slider>

      {modalIsOpen && (
        <CustomModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          imageUrl={selectedImage}
          imageAlt={selectedImageAlt}
        />
      )}
    </div>
  );
};

export default Gallery;
