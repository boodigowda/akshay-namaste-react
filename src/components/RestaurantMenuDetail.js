import React, { Fragment } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantMenuDetail = ({ itemCategory }) => {
    console.log(itemCategory)
  return (
    <div className="px-5">
      {itemCategory?.map((itemCard) => {
        return (
          <div className="flex justify-between border-b-4 py-2 text-left" key={itemCard?.card?.info?.id}>
            <div className="left-menu">
              <h1 className="text-2xl">{itemCard?.card?.info?.name}</h1>
              <h3>₹ 30</h3>
              <h4 className="pr-44">{itemCard?.card?.info?.description}</h4>
            </div>
            <div className="right-menu">
              <img src={`${CDN_URL + itemCard?.card?.info?.imageId}`} alt={itemCard?.card?.info?.name} className="w-40 h-40 rounded-lg object-cover"/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuDetail;
