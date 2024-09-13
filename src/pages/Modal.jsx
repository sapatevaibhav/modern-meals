import React, { useEffect } from 'react';
import './Modal.css'; // Ensure this imports the updated CSS

const Modal = ({ isOpen, image, onClose, onPrev, onNext }) => {
  useEffect(() => {
    // Disable scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on unmount or when isOpen changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={image} alt="Popup" className="modal-image" />
        <button className="modal-btn left" onClick={onPrev}>
          <i className="bi bi-arrow-left-circle"></i>
        </button>
        <button className="modal-btn right" onClick={onNext}>
          <i className="bi bi-arrow-right-circle"></i>
        </button>
        <button className="modal-close" onClick={onClose}>
          <i className="bi bi-x-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
