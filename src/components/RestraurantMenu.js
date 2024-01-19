import React, { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { ITEM_CATEGORY } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestraurantMenu = () => {
  const { restId } = useParams();
  const dummyData = "DUMMY DATA....!";
  const [showIndex, setShowIndex] = useState(null);
  const restMenuData = useRestaurantMenu(restId); //customHook

  if (restMenuData === null) return <ShimmerUi />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    restMenuData?.cards[0]?.card?.card?.info;

  const categories =
    restMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        return item?.card?.card["@type"] === ITEM_CATEGORY;
      }
    );

  return (
    <div className="menu bg-gray-100 p-8 text-center">
      <h1 className="text-9xl font-bold mb-4">{name}</h1>
      <h3 className="text-lg text-gray-600 mb-2">{cuisines.join(", ")}</h3>
      <h3 className="text-lg text-gray-600 mb-2">{costForTwoMessage}</h3>
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      {categories?.map((category, index) => {
        return (
          <RestaurantCategory
            category={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowItems={() => {
              setShowIndex(index === showIndex ? null : index)
            }}
            key={category?.card?.card?.title}
          />
        );
      })}
    </div>
  );
};

export default RestraurantMenu;
