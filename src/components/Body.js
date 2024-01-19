import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resData1, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);
  const [userInput, setUserInput] = useState('');
  const data = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>plz check your internet connection...!</h1>;
  const topRatedRestaourant = () => {
    const filteredValue = resData1.filter((card) => {
      return card?.info?.avgRating > 4.2;
    });
    setResData(filteredValue);
  };

  const onSearch = () => {
    const SearchedRest = resData1.filter((restour) => {
      return restour?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredRest(SearchedRest);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataPromise = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonRes = await dataPromise.json();
    setResData(
      jsonRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRest(
      jsonRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onUserInputChange = (e) => { 
      // setTimeout(()=>{
          setUserInput(e.target.value)
      // },1000)
  }

  const OnChangeUserClick = () => { 
    data.setUserInfo(userInput)
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 px-4">
          <input
            type="text"
            className="border border-solid border-black px-4 py-2 rounded-md focus:outline-none focus:border-black-500 transition-all duration-300 ease-in-out hover:bg-gray-100"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={onSearch}
          >
            search
          </button>

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={topRatedRestaourant}
          >
            Top Rated Resto
          </button>
          <input
            type="text"
            className="border border-solid border-black px-4 py-2 rounded-md focus:outline-none focus:border-black-500 transition-all duration-300 ease-in-out hover:bg-gray-100"
            value={userInput}
            onChange={(e)=>{onUserInputChange(e)}}
          />
          <button onClick={OnChangeUserClick} className="bg-teal-200 rounded-lg p-3 ml-4">Change User</button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredRest.length === 0 ? (
          <ShimmerUi />
        ) : (
          filteredRest.map((restoCard) => {
            return (
              <Link
                to={`/restaurants/${restoCard?.info?.id}`}
                key={restoCard?.info?.id}
              >
                <RestaurantCard
                  key={restoCard?.info?.id}
                  restoCardInfo={restoCard?.info}
                />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
