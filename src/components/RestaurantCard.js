import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restoCardInfo }) => {
  const { name, cuisines, costForTwo, sla, id, avgRating, cloudinaryImageId,aggregatedDiscountInfoV3 } =
    restoCardInfo;
  const updatedCuisins =
    cuisines.length > 2 ? cuisines.slice(0, 2).join(", ") + "..." : cuisines;
  const updatedName = name.length > 20 ? name.slice(0, 20) + "..." : name;
  return (
    <div className="m-4 p-4 w-72 bg-slate-50 rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-neutral-200" key={id}>
      <img className="res-logo object-cover w-72 h-60 rounded-lg" src={`${CDN_URL}${cloudinaryImageId}`} alt="" />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-l font-bold">{aggregatedDiscountInfoV3?.header}{aggregatedDiscountInfoV3?.subHeader}</h1>
      <h1 className="font-bold text-lg">{updatedName}</h1>
      <h4>{updatedCuisins}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h5>{sla?.deliveryTime} Minutes</h5>
    </div>
  );
};
export default RestaurantCard;
