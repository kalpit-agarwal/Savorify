import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our menu</h1>
      <p className="explore-menu-text">
        Choose from a wide range of cuisines and satisfy your cravings with our
        delicious meals. From classic dishes to innovative culinary creations,
        there's something for everyone.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
              key={index}
              className="explore-menu-list-item"
            >
              {/* Display the menu image */}
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              {/* Display the menu name */}
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
