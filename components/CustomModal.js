// CustomModal.js
import React from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
Modal.setAppElement('#__next');

const CustomModal = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000,
    },
    content: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: 'none',
      overflow: 'hidden',
      backgroundColor: 'transparent', // Set modal background to transparent
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className="modal-content h-full">
        <button onClick={onClose} className="close-btn absolute top-4 right-4 text-white font-bold text-lg">
          X
        </button>
        <Image src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" width={1920} height={1280}/>
      </div>
    </Modal>
  );
};

export default CustomModal;
