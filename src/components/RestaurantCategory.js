import React, { useState } from "react";
import RestaurantMenuDetail from "./RestaurantMenuDetail";

const RestaurantCategory = ({ category, showItems, setShowItems }) => {
//   const [showItems, setShowDetail] = useState(null);
  const onCollapse = () => {
    setShowItems();
  };
  return (
    <div className="w-full px-44 mx-auto">
      <div className="shadow-md rounded-lg" key={category?.title}>
        <div
          className="menu-list-card p-3 flex justify-between cursor-pointer"
          onClick={onCollapse}
        >
          <h4 className="text-xl font-bold mb-2">
            {category?.title} ({category?.itemCards.length})
          </h4>
          <span className="text-2xl">{showItems ? "🔼" : "🔽"}</span>
        </div>
        {showItems && (
          <RestaurantMenuDetail itemCategory={category?.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
