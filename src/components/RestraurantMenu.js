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
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <div className="menu-list">
        {groupedCard?.map((menu) => {
          return menu?.card?.card["@type"].split(".")[
            menu?.card?.card["@type"].split(".").length - 1
          ] === ITEM_CATEGORY ? (
            <div className="menu-list-card" key={menu?.card?.info?.id}>
              <ul>
                <h4>{menu?.card?.card?.title}</h4>
                {menu?.card?.card?.itemCards.map((subMenu) => {
                  return (
                    <li key={subMenu?.card?.info?.id}>
                      <p>
                        {subMenu?.card?.info?.name} - Rs{" "}
                        {subMenu?.card?.info?.price / 100}/-
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default RestraurantMenu;
