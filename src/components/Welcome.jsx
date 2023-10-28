import React from "react";
import brunchImage from "/brunch-1.jpg";
import brunchImageTwo from "/brunch-2.jpg";
import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div id="welcome">
        <div id="welcome_left">
          <h2>Best Brunch in Town!</h2>
          <p>
            In the heart of the city, our brunch haven stands as a culinary gem,
            redefining the brunch experience. What sets our restaurant apart is
            not just the delectable food we serve but the dedication and passion
            that goes into every dish. We pride ourselves on offering an
            exquisite menu that caters to all tastes and preferences, whether
            you're a lover of classic breakfast fare or an adventurer seeking
            bold flavors.
          </p>
          <p>
            Our commitment to quality starts with the freshest locally-sourced
            ingredients. From farm-fresh eggs to artisanal bread, every element
            of our dishes is carefully selected to ensure a memorable and
            mouthwatering experience. Our talented chefs craft each plate with
            precision, creating culinary masterpieces that delight the senses.
          </p>
          <p>
            For those seeking the perfect brunch, we invite you to explore our
            menu, where every bite tells a story of flavor, passion, and
            excellence. It's not just a meal; it's a celebration of the art of
            brunch. Join us and discover why our restaurant is the city's
            best-kept secret, where every visit is a delectable journey that
            leaves you craving more.
          </p>
        </div>
        <div id="welcome_right">
          <img src={brunchImage} alt="brunch" />
        </div>
      </div>
      <div id="welcome_bottom">
        <img src={brunchImageTwo} alt="brunch_two"></img>
      </div>
    </>
  );
}

export default Welcome;
