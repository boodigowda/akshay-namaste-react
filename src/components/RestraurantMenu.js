import React from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { ITEM_CATEGORY } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestraurantMenu = () => {
  const { restId } = useParams();
  const restMenuData = useRestaurantMenu(restId); //customHook

  if (restMenuData === null) return <ShimmerUi />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    restMenuData?.cards[0]?.card?.card?.info;

  const groupedCard =
    restMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return (
<div className="menu bg-gray-100 p-8">
  <h1 className="text-4xl font-bold mb-4">{name}</h1>
  <h3 className="text-lg text-gray-600 mb-2">{cuisines.join(", ")}</h3>
  <h3 className="text-lg text-gray-600 mb-2">{costForTwoMessage}</h3>
  <h2 className="text-2xl font-bold mb-4">Menu</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {groupedCard?.map((menu) => {
      return menu?.card?.card["@type"].split(".")[
        menu?.card?.card["@type"].split(".").length - 1
      ] === ITEM_CATEGORY ? (
        <div className="menu-list-card bg-white rounded-lg shadow-md p-4" key={menu?.card?.info?.id}>
          <h4 className="text-xl font-bold mb-2">{menu?.card?.card?.title}</h4>
          <ul>
            {menu?.card?.card?.itemCards.map((subMenu) => (
              <li
                key={subMenu?.card?.info?.id}
                className="mb-2 p-2 bg-gray-50 rounded-md shadow-sm"
              >
                <p className="text-gray-700">
                  {subMenu?.card?.info?.name} - Rs{" "}
                  {subMenu?.card?.info?.price / 100}/-
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null;
    })}
  </div>
</div>

  );
};

export default RestraurantMenu;
