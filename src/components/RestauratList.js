import React from "react";

const RestauratList = ({ menuData }) => {
  return (
    <React.Fragment>
      <ul>
        {menuData.itemCards.map((subMenu) => (
          <li
            key={subMenu?.card?.info?.id}
            className="mb-2 p-2 bg-gray-50 rounded-md shadow-sm hover:transform hover:scale-105 transition-transform duration-300"
          >
            <p className="text-gray-700">
              {subMenu?.card?.info?.name} - Rs{" "}
              {subMenu?.card?.info?.price / 100}/-
            </p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default RestauratList;
