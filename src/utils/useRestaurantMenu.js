import React, { useEffect, useState } from "react";
import { RESTAU_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (restId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchData = async () => {
    const restMenuPromise = await fetch(RESTAU_MENU_URL + restId);
    const restDataJson = await restMenuPromise.json();
    setResInfo(restDataJson.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return resInfo;
};

export default useRestaurantMenu;
