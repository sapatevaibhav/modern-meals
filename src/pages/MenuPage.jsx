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
        {/* Section 1 breakfast */}
        <div className="tile text-tile blue-bg bev-sec">
          <h2 className="ff-sedan">Breakfast</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Sheera</li>
                <li>Badam Halwa</li>
                <li>Misal Pav</li>
                <li>Batata Vada Sambar</li>
                <li>Onion Flakes</li>
                <li>Cheese Maggi</li>
                <li>Cheese Sandwich</li>
                <li>Bread Butter</li>
                <li>Bread Jam</li>
                <li>Tea</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Poha</li>
                <li>Upma</li>
                <li>Moong Bhaji</li>
                <li>Mirchi Pakoda</li>
                <li>Patties Khari</li>
                <li>Cheese Corn Tart</li>
                <li>Grilled Sandwich</li>
                <li>Chocolate Cake</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Mix Paratha</li>
                <li>Poori Bhaji</li>
                <li>Banarasi Thandai</li>
                <li>Masala Bun</li>
                <li>Cheese Garlic Bread</li>
                <li>Cookies</li>
                <li>Biscuits</li>
                <li>Cheese Ball</li>
                <li>Mix Fruit Tart</li>
                <li>Chocos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tile m-below">
          <img src="menu/poha.png" alt="Beverage" />
        </div>
        {/* Section 2 breakfast */}
        <div className="tile m-below">
          <img src="menu/tea.png" alt="Beverage" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Breakfast</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Filter Coffee</li>
                <li>Cold Coffee</li>
                <li>Lemon Tea</li>
                <li>Green Tea</li>
                <li>Idli Chutney</li>
                <li>Medu Vada Sambar</li>
                <li>Onion Mini Uttappa</li>
                <li>Chole Bhature</li>
                <li>Samosa</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Paneer Pakoda</li>
                <li>Sabudana Vada</li>
                <li>Sabudana Khichdi</li>
                <li>Wafers</li>
                <li>Finger Chips</li>
                <li>Batata Chivda</li>
                <li>Mango Lassi</li>
                <li>Dryfruit Lassi</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Cornflakes</li>
                <li>Coffee</li>
                <li>Sugar-Free Tea</li>
                <li>Bread Pakoda</li>
                <li>Aloo Paratha</li>
                <li>Aloo Methi Paratha</li>
                <li>Vanilla Cake</li>
                <li>Special Thandai</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section 3 starters */}
        <div className="tile text-tile blue-bg bev-sec">
          <h2 className="ff-sedan">Starters</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Italian</li>
                <li>Veg Spring Roll</li>
                <li>Manchurian</li>
                <li>Potato Chilli</li>
                <li>Golden Fry Baby Corn</li>
                <li>Crispy Corn</li>
                <li>Aloo 65</li>
                <li>Paneer 65</li>
                <li>Matar Roll</li>
                <li>Batata Vada</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Cheese Roll</li>
                <li>Veg Cigar Roll</li>
                <li>Paneer Chilli</li>
                <li>Hara Bhara Kabab</li>
                <li>Veg Cutlet</li>
                <li>Steamed Momos</li>
                <li>Fried Momos</li>
                <li>Cheese Corn Ball</li>
                <li>Kanda Bhaji</li>
                <li>Dhokla</li>
                {/* <li>Sesame Toast</li> */}
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Moong Bhaji</li>
                <li>Gol Bhaji</li>
                <li>Dal Vada</li>
                <li>Matar Karanji</li>
                <li>Bread Roll</li>
                <li>Kothimbir Vadi</li>
                <li>Surali Vadi</li>
                <li>Aluwadi</li>
                <li>Paneer Cheese Roll</li>
                <li>Gold Coin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tile m-below">
          <img src="menu/starters.png" alt="Beverage" />
        </div>
        {/* Section 4 veg soup */}
        <div className="tile">
          <img src="menu/soup.png" alt="Main Course" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Veg Soup</h2>
          <ul>
            <li>Tomato Soup</li>
            <li>Broccoli Almond Soup</li>
            <li>Veg Sweetcorn Soup</li>
            <li>Palak Soup</li>
            <li>Plain Soup</li>
            <li>Hot and Sour Soup</li>
            <li>Lemon Coriander Soup</li>
            <li>Mix Veg Soup</li>
            <li>Manchow Soup</li>
          </ul>
        </div>
        {/* Section 5 chinese */}
        <div className="tile text-tile blue-bg bev-sec">
          <h2 className="ff-sedan">Chinese</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Manchurian Ginger Rice</li>
                <li>Schezwan Rice</li>
                <li>Singapore Rice</li>
                <li>Triple Rice</li>
                <li>Shanghai Rice</li>
                <li>Combination Rice</li>
                <li>Chinese Noodles</li>
                <li>Veg Haryali Noodles</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Schezwan Noodles</li>
                <li>Combination Noodles</li>
                <li>Hong Kong Noodles</li>
                <li>Malaysian Noodles</li>
                <li>Peri Peri Pizza</li>
                <li>Domino's Pizza</li>
                <li>Garlic Thin Crust Pizza</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Italian Wonder Thin Crust Pizza</li>
                <li>Chocolate Crust Pizza</li>
                <li>BBQ Thin Crust Pizza</li>
                <li>Thin Crust Veg Pizza</li>
                <li>Tandoori Thin Crust Pizza</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tile m-below">
          <img src="menu/chinese.png" alt="Beverage" />
        </div>
        {/* Section 6 main course */}
        <div className="tile m-below">
          <img src="menu/paneer.png" alt="Beverage" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Main Course</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Paneer Bhindi Aloo</li>
                <li>Paneer Handi</li>
                <li>Paneer Chatpata</li>
                <li>Paneer Laziz</li>
                <li>Paneer Makhani</li>
                <li>Paneer Tandoori Bhuna</li>
                <li>Paneer Bemisaal</li>
                <li>Matar Paneer</li>
                <li>Lasooni Paneer</li>
                <li>Paneer Ghoongroo</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Paneer Pasanda</li>
                <li>Paneer Banjara</li>
                <li>Paneer Makhana</li>
                <li>Paneer Mushroom Masala</li>
                <li>Paneer Hyderabadi</li>
                <li>Paneer Achari</li>
                <li>Paneer Korma</li>
                <li>Lasooni Palak Paneer</li>
                <li>Babycorn Paneer</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Paneer Do Pyaza</li>
                <li>Tandoori Paneer Masala</li>
                <li>Paneer Tikka Masala</li>
                <li>Paneer Hungama</li>
                <li>Palak Paneer</li>
                <li>Paneer Butter Masala</li>
                <li>Paneer Kadhai</li>
                <li>Paneer Kurchan</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section 7 chaat */}
        <div className="tile text-tile blue-bg bev-sec">
          <h2 className="ff-sedan">Chaat</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Aloo Chaat</li>
                <li>Moti Chana Chaat</li>
                <li>Aloo Tikki</li>
                <li>Hara Matar Ki Tikki</li>
                <li>Biscuit Chaat</li>
                <li>Aloo Laccha Chaat</li>
                <li>Banarasi Tikki Chaat</li>
                <li>Lucknowi Tikki Chaat</li>
                <li>Papdi Chaat</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Khasta Chaat</li>
                <li>Butter Paneer Chaat</li>
                <li>Mexican Chaat</li>
                <li>Keema Pav</li>
                <li>Rajasthani Chaat</li>
                <li>Dahi Chaat</li>
                <li>Sweet Corn Bhel</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Matki Bhel</li>
                <li>Bombay Bhel</li>
                <li>Dryfruit Bhel</li>
                <li>Ambali Pani Puri</li>
                <li>Mumbai Pani Puri</li>
                <li>SPDP (Sev Puri Dahi Puri)</li>
                <li>Shivpuri</li>
                <li>Hyderabadi Chilli</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tile m-below">
          <img src="menu/chaat.png" alt="Beverage" />
        </div>
        {/* Section 8 Bhaji */}
        <div className="tile m-below">
          <img src="menu/chole.png" alt="Beverage" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Bhaji</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Paneer Lababdar</li>
                <li>Khoya Paneer</li>
                <li>Shahi Paneer</li>
                <li>Punjabi Chole</li>
                <li>Chingari Kofta</li>
                <li>Palak Kofta Curry</li>
                <li>Methi Matar Malai</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Kaju Curry</li>
                <li>Malai Kofta</li>
                <li>Veg Adrakhi</li>
                <li>Kofta Green Peas Masala</li>
                <li>Sarso Da Saag</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Paneer Mushroom Masala</li>
                <li>Achari Kofta</li>
                <li>Doodhi Kofta</li>
                <li>Mushroom Babycorn Masala</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section 9 Dry Bhaji */}
        <div className="tile text-tile blue-bg bev-sec">
          <h2 className="ff-sedan">Dry Bhaji</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Mix Handi Masala</li>
                <li>Soya Mushroom</li>
                <li>Kurkuri Bhindi</li>
                <li>Veg Diwani Handi</li>
                <li>Veg Banjara</li>
                <li>Sukhi Gawar</li>
                <li>Mushroom Tawa</li>
                <li>Baingan Bharta</li>
                <li>Hirva Rajma</li>
                <li>Matki Fry</li>
                <li>Veg Dalcha</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Moong Usal</li>
                <li>Methi Sabzi</li>
                <li>Gobi Vatana</li>
                <li>Lasooni Tawa</li>
                <li>Besan Gatta Curry</li>
                <li>Matki Rassa</li>
                <li>Chawli Rassa</li>
                <li>Double Beans Rassa</li>
                <li>Shev Bhaji</li>
                <li>Aloo Matar</li>
                <li>Undhiyu Bhaji</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Hirvi Matki</li>
                <li>Veg Soya Chaap</li>
                <li>Veg Kolhapuri</li>
                <li>Veg Kadhai</li>
                <li>Jeera Aloo</li>
                <li>Bhindi Masala</li>
                <li>Bhindi Fry</li>
                <li>Dosa Bhaji</li>
                <li>Veg Tawa Mehfil</li>
                <li>Rajma Rassa</li>
                <li>Vangi Masala</li>
                {/* 
<li>Pitla</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="tile m-below">
          <img src="menu/bhindi.png" alt="Beverage" />
        </div>
        {/* Section 10 Italian */}
        <div className="tile">
          <img src="menu/pasta.png" alt="Main Course" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Italian</h2>
          <ul>
            <li>Garlic Bread</li>
            <li>Garlic Bread with Corn</li>
            <li>Mexican Nachos with Salsa Dip</li>
            <li>Cheese Nachos with Salsa Dip</li>
            <li>White Pasta with Cheese</li>
            <li>Red Pasta with Cheese</li>
            <li>Garlic Bread with Red Paprika</li>
          </ul>
        </div>
        {/* Section 11 South Indian */}
        <div className="tile text-tile blue-bg bev-sec">
          <h2 className="ff-sedan">South Indian</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Loni Sponge Dosa</li>
                <li>Sponge Cheese Garlic Dosa</li>
                <li>Spicy Chilli Potato Dosa</li>
                <li>Achari Onion Masala</li>
                <li>Paneer Chatpata Dosa</li>
                <li>Palak Capsicum Cheese Dosa</li>
                <li>Cheese Mysore Dosa</li>
                <li>Chinese Dosa</li>
                <li>Masala Cut Dosa</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Baahubali Dosa</li>
                <li>Methi Garlic Dosa</li>
                <li>Onion Uttappa</li>
                <li>Garlic Uttappa</li>
                <li>Cheese Tomato Paneer Uttappa</li>
                <li>Cheese Chilli Uttappa</li>
                <li>Garlic Uttappa Steam Palak Idli</li>
                <li>Manchurian Idli</li>
                <li>Tatte Idli</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Hyderabadi Sandwich Idli</li>
                <li>Szechuan Fry Idli</li>
                <li>Masala Uttappa</li>
                <li>Cheese Uttappa</li>
                <li>Banana Leaf Special Uttappa</li>
                <li>Palak Uttappa</li>
                <li>Tomato Uttappa</li>
                <li>Kanchipuram Uttappa</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tile m-below">
          <img src="menu/utappam.png" alt="Beverage" />
        </div>
        {/* Section  12  Rice*/}
        <div className="tile m-below">
          <img src="menu/rice.png" alt="Beverage" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Rice</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Jeera Rice</li>
                <li>Plain Rice</li>
                <li>Fried Onion Rice</li>
                <li>Kashmiri Pulao</li>
                <li>Navratan Pulao</li>
                <li>Matar Pulao</li>
                <li>Moong Dal Khichdi</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Veg Biryani</li>
                <li>Hyderabadi Dum Biryani</li>
                <li>Paneer Biryani</li>
                <li>Tomato Rice</li>
                <li>Rajma Rice</li>
                <li>Dal Makhani Rice</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Indrayani Rice</li>
                <li>Paneer Pulao</li>
                <li>Coconut Rice</li>
                <li>Lemon Rice</li>
                <li>Curd Rice</li>
                <li>Pongal</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section 13 Dal */}
        <div className="tile text-tile blue-bg bev-sec">
          <h2 className="ff-sedan">Dal</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                <li>Chana Dal Masala</li>
                <li>Lasuni Dal</li>
                <li>Dal Palak</li>
                <li>Dal Tadka</li>
                <li>Plain Dal</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Aamti</li>
                <li>Sambar</li>
                <li>Dal Fry</li>
                <li>Double Tadka Dal</li>
                <li>Dal Makhani</li>
                <li>Panch Dal</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tile m-below">
          <img src="menu/dal.png" alt="Beverage" />
        </div>
        {/* Section  14 sweet*/}
        <div className="tile m-below ind">
          <img src="menu/sweets.png" alt="Beverage" />
        </div>
        <div className="tile text-tile">
          <h2 className="ff-sedan">Sweets</h2>
          <div className="beverage-sections">
            <div className="section">
              <ul>
                {/* <li>Pineapple Shira</li> */}
                <li>Red Peda</li>
                <li>White Peda</li>
                <li>Moong Dal Halwa</li>
                <li>Gajar Halwa</li>
                <li>Lauki Halwa</li>
                <li>Motichoor Ladoo</li>
                <li>Mawa Basundi Rabdi</li>
                <li>Sitaphal Rabdi</li>
                <li>Mango Rabdi</li>
                <li>Anjeer Rabdi</li>
                <li>Rasmalai Rabdi</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Kesar Jalebi</li>
                <li>Shevaya Payasam</li>
                <li>Rasam Vada</li>
                <li>Mohan Thali</li>
                <li>Rabdi Malpua</li>
                <li>Ukadiche Modak</li>
                <li>Dry Fruit Barfi</li>
                <li>Kaju Roll</li>
                <li>Traffic Jam Peda</li>
                <li>Kaju Katli</li>
                <li>Pistachio Anjeer Roll</li>
              </ul>
            </div>
            <div className="section">
              <ul>
                <li>Kesar Barfi</li>
                <li>Malai Barfi</li>
                <li>Pistachio Barfi</li>
                <li>Mango Barfi</li>
                <li>Coconut Barfi</li>
                <li>Gulkand Rabdi</li>
                <li>Dry Fruit Rabdi</li>
                <li>Fruit Rabdi</li>
                <li>Coconut Rabdi</li>
                <li>Mango Dillai</li>
                <li>Sitaphal Dillai</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
