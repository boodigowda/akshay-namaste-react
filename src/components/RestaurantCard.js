import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restoCardInfo }) => {
  const { name, cuisines, costForTwo, sla, id, avgRating, cloudinaryImageId } =
    restoCardInfo;
  const updatedCuisins =
    cuisines.length > 2 ? cuisines.slice(0, 2).join(", ") + "..." : cuisines;
  const updatedName = name.length > 20 ? name.slice(0, 20) + "..." : name;
  return (
    <div className="m-4 p-4 w-72 bg-slate-50 rounded-2xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-neutral-200" key={id}>
      <img className="res-logo object-cover rounded-lg" src={`${CDN_URL}${cloudinaryImageId}`} alt="" />
      <h3 className="font-bold py-2 text-lg">{updatedName}</h3>
      <h4>{updatedCuisins}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h5>{sla?.deliveryTime} Minutes</h5>
    </div>
  );
};
export default RestaurantCard;
