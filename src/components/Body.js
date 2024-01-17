import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData1, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);
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

  return (
    <div className="body">
      <div className="filter">
        <button className="btn" onClick={topRatedRestaourant}>
          Top Rated Resto
        </button>
        <input
          type="text"
          className="serach-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="serach-btn" onClick={onSearch}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            alt=""
            width="30px"
          />
        </button>
        <button className="btn" onClick={() => fetchData()}>
          Reset
        </button>
      </div>

      <div className="res-container">
        {filteredRest.length === 0 ? (
          <ShimmerUi />
        ) : (
          filteredRest.map((restoCard) => {
            return (
              <Link to={`/restaurants/${restoCard?.info?.id}`} key={restoCard?.info?.id}>
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
