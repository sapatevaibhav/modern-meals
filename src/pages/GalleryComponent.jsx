import React, { useState, useEffect } from 'react';

const GalleryComponent = ({ images }) => {
  const [loaded, setLoaded] = useState(false);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000); // 2 second loading simulation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            {!loaded ? (
              <div className="bg-light" style={{ height: '200px' }}>
                <div className="d-flex align-items-center justify-content-center h-100">
                  <span className="spinner-border"></span>
                </div>
              </div>
            ) : (
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="img-fluid"
                style={{ objectFit: 'cover', width: '100%', height: '200px' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
