import React from "react";
import "./MenuPage.css";

export default function MenuPage() {
  return (
    <div>
      <p
        className="center-text mt-5"
        style={{ fontFamily: "sedan", fontSize: "1.2rem" }}
      >
        Menu
      </p>
      <h2 className="custom-headings" style={{ textAlign: "center" }}>
        Menu Make You Happy
      </h2>
      <p
        className="center-text"
        style={{
          fontFamily: "roboto",
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "50px",
        }}
      >
        FRESH AND HEALTHY FOOD AVAILABLE
      </p>
      <div className="menu-grid">
        <div className="tile text-tile blue-bg bev-sec">
          <h2 className="ff-sedan">Beverages</h2>
          <div className="beverage-sections">
            <div className="section">
              <h3>Mocktail</h3>
              <ul>
                <li>Orange Blossom</li>
                <li>Blue Velvet</li>
                <li>Strawberry Delight</li>
              </ul>
            </div>
            <div className="section">
              <h3>Juices</h3>
              <ul>
                <li>Mix Fruits</li>
                <li>Orange</li>
                <li>Pineapple</li>
              </ul>
            </div>
            <div className="section">
              <h3>Shakes</h3>
              <ul>
                <li>Paan Shake</li>
                <li>Mango</li>
                <li>Pineapple</li>
              </ul>
            </div>
            <div className="section">
              <h3>Soft Drinks</h3>
              <ul>
                <li>Cola</li>
                <li>Sprite</li>
                <li>Limca</li>
                <li>Orange</li>
              </ul>
            </div>
            <div className="section">
              <h3>Soup Station</h3>
              <ul>
                <li>Tamatar Dhaniya ka Shorba</li>
                <li>Sweet Corn Soup (Served with Soup Sticks)</li>
              </ul>
            </div>
            <div className="section">
              <h3>Mineral Water</h3>
              <ul>
                <li>Espresso Coffee</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tile m-below">
          <img src="menu/beverages.png" alt="Beverage" />
        </div>
        <div className="tile">
          <img src="menu/khomchas.png" alt="Khomchas" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Khombchas</h2>
          <ul className="khomchas-list">
            <li>
              Gol Gappa
              <span className="menu-description">
                (with Three Varities of Water)
              </span>
            </li>
            <li>Dahi Bhalla Papri Chaat</li>
            <li>
              Aloo Tikki
              <span className="menu-description">
                (Filling of Paneer, Dal & Mutter)
              </span>
            </li>
            <li>Moong Dal Chilla Paneer Wala</li>
            <li>Mumbai Chaupati Pao Bhaji</li>
            <li>Moong Dal laddoo</li>
          </ul>
        </div>
        <div className="tile text-tile blue-bg">
          <h2 className="ff-sedan">Starters</h2>
          <div className="starters-sections">
            <div className="section">
              <h3>Chinese</h3>
              <ul>
                <li>Chilli Paneer</li>
                <li>Chilli Gobhi/Chilli Potato</li>
                <li>Veg. Manchurian</li>
                <li>Veg. Salt & Pepper</li>
                <li>Sasame Toast</li>
                <li>Spring Rolls</li>
              </ul>
            </div>
            <div className="section">
              <h3>Grilled</h3>
              <ul>
                <li>Paneer Tikka Keasri</li>
                <li>Tandoori Stuffed Aloo</li>
                <li>Soya Malai Chaap</li>
                <li>Kathal Tikka</li>
              </ul>
            </div>
            <div className="section">
              <h3>Indian</h3>
              <ul>
                <li>Hard Bhara Kabab</li>
                <li>Mini Cutles</li>
                <li>Moong Dal Pakori</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tile m-below">
          <img src="menu/starters.png" alt="Starters" />
        </div>
        <div className="tile">
          <img src="menu/main_course.png" alt="Main Course" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Main Course</h2>
          <ul>
            <li>Shahi Paneer / Kadhai Paneer / Paneer Butter Masala</li>
            <li>Malai Kofta / Palak Kofta</li>
            <li>Dal Makhani / Dal Bukhara</li>
            <li>Mutter Makhana Curry / Methi Malai Mutter</li>
            <li>Dum Aloo Kashmiri / Jeera Aloo</li>
            <li>Vegetable Jhalfrezi / Aloo Gobhi Masal</li>
            <li>Palak Corn / Soya Masala Chaap</li>
            <p style={{ margin: "10px 0", fontWeight: "bold" }}>
              {" "}
              Khushboo - E - Basmati
            </p>
            <li>Plain Basmati Rice</li>
            <li>Peas Pulao</li>
          </ul>
        </div>
        <div className="tile text-tile blue-bg">
          <h2 className="ff-sedan">Indian Cuisine</h2>
          <div className="beverage-sections">
            <div className="section">
              <h3>Punjabi (Seasonal)</h3>
              <ul>
                <li>Sarson Ka Saag</li>
                <li>Makki Ki Roti (with white Butter & Gur)</li>
                <li>Baingan Ka Bharta</li>
                <li>Rajma Masala</li>
              </ul>
            </div>
            <div className="section">
              <h3>Amritsari Stall</h3>
              <ul>
                <li>Amritsari Stuff Kulcha</li>
                <li>Channa Amritsari Style</li>
                <li>Special Chutney</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Khasta Roti</li>
                <li>Baby Naan</li>
                <li>Pudina Lachha Parantha</li>
                <li>Mirchi Parantha</li>
                <li>Stuff Kulcha</li>
                <li>Missi Roti</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tile m-below">
          <img src="menu/indian_cuisine.png" alt="Indian Cuisine" />
        </div>
        <div className="tile desserts">
          <img src="menu/deserts.png" alt="Desserts" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Desserts</h2>

          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Kesar Pista Stuffed Gulab Jamun</li>
                <li>Hot Jalebi</li>
                <li>Rabri</li>
                <li>Moong Dal Halwa</li>
                <li>Gajar Halwa(Seasonal)/ Gulkand Halwa</li>
                <li>Rose Kheer</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>
                  Variety of Ice Creams Served with Strawberry, Chocolate Sauce
                  and Nuts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
