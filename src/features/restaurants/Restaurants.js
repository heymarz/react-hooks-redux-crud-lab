import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({restaurants}) {

  return (
    <div>
    <ul>
      {restaurants.map((restaurant)=><Restaurant key={restaurant.id} restaurant={restaurant} />)}
    </ul>
    </div>);
}

export default Restaurants;
