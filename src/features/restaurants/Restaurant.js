import React from "react";
import { restaurantRemoved } from "./restaurantsSlice";
import { useDispatch } from "react-redux";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch();

  function deleteRestaurant(){
    dispatch(restaurantRemoved(restaurant.id))
  }

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={deleteRestaurant}> Delete Restaurant </button>
        <ReviewsContainer restaurantId={restaurant.id} />
      </li>
    </div>
  );
}

export default Restaurant;
