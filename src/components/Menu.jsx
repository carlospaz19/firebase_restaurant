import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [selectedValue, setSelectedValue] = useState("img-1");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.id);
  };

  return (
    <>
      <div className="carousel">
        <h2>Behold Our Delicious Recipes!</h2>
        <ul className="slides">
          <input
            type="radio"
            name="radio-buttons"
            id="img-1"
            checked={selectedValue === "img-1"}
            onChange={handleRadioChange}
          />
          <li className="slide-container">
            <div className="slide-image">
              <img src="/menu_1.jpg" />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-2" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input
            type="radio"
            name="radio-buttons"
            id="img-2"
            checked={selectedValue === "img-2"}
            onChange={handleRadioChange}
          />
          <li className="slide-container">
            <div className="slide-image">
              <img src="/menu_2.jpg" />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-1" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
            </div>
          </li>
          <div className="carousel-dots">
            <label
              htmlFor="img-1"
              className="carousel-dot"
              id="img-dot-1"
            ></label>
            <label
              htmlFor="img-2"
              className="carousel-dot"
              id="img-dot-2"
            ></label>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Menu;
