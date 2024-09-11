import React from "react";
import './OurMenu.css';  // Import your CSS file

const OurMenu = () => {
  return (
    <>
      <div>
        <h1 className="custom-headings mt-5" style={{ textAlign: "center" }}>
          Our Menu
        </h1>
        <p className="custom-para" style={{ textAlign: "center" }}>
          FRESH AND HEALTHY FOOD AVAILABLE
        </p>
      </div>

      <div className="container menu-container">
        <div className="row text-center">
          <div className="col-12 col-sm-6 col-md-3">
            <div 
              className="menu-item" 
              style={{ cursor: 'pointer' }}
              onClick={() => window.location.href = '/menu/silver-menu.pdf'}
            >
              <img 
                src="menu/silver-menu.jpg" 
                alt="Silver Menu" 
                className="img-fluid" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <p style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
                Silver Menu
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div 
              className="menu-item" 
              style={{ cursor: 'pointer' }}
              onClick={() => window.location.href = '/menu/golden-menu.pdf'}
            >
              <img 
                src="menu/golden-menu.jpg" 
                alt="Golden Menu" 
                className="img-fluid" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <p style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
                Golden Menu
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div 
              className="menu-item" 
              style={{ cursor: 'pointer' }}
              onClick={() => window.location.href = '/menu/diamond-menu.pdf'}
            >
              <img 
                src="menu/diamond-menu.jpg" 
                alt="Diamond Menu" 
                className="img-fluid" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <p style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
                Diamond Menu
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div 
              className="menu-item" 
              style={{ cursor: 'pointer' }}
              onClick={() => window.location.href = '/menu/extra-menu.pdf'}
            >
              <img 
                src="menu/extra-menu.jpg" 
                alt="Extra On Demand" 
                className="img-fluid" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <p style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
                Extra On Demand
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMenu;
