import React, { Fragment, useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { ITEM_CATEGORY, RESTAU_MENU_URL } from "../utils/constants";

const RestraurantMenu = () => {
  const { restId } = useParams();
  const [restMenuData, setRestMenuData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const restMenuPromise = await fetch(RESTAU_MENU_URL + restId);
    const restDataJson = await restMenuPromise.json();
    setRestMenuData(restDataJson.data);
  };
  if (restMenuData.length === 0) return <ShimmerUi />;

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
            <div className="menu-list-card">
              <ul>
                <h4>{menu?.card?.card?.title}</h4>
                {menu?.card?.card?.itemCards.map((subMenu) => {
                  return (
                    <li key={subMenu?.card?.info?.id}>
                      <p>{subMenu?.card?.info?.name} - Rs{" "}
                      {subMenu?.card?.info?.price / 100}/-</p>
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
