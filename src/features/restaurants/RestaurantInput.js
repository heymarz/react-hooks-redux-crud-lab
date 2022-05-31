import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {
  const [name, setname] = useState("");
  const dispatch = useDispatch();

  function handleChange(e){
    setname(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(restaurantAdded(name))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input 
            type="text" 
            name="name" 
            onChange={handleChange} 
            value={name} 
          />
        </label>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantInput;
