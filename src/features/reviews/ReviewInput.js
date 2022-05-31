import React, {useState} from "react";
import {reviewAdded} from "./reviewsSlice";
import {useDispatch} from "react-redux"

function ReviewInput({restaurantId}) {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  function handleChange(e){
    setComment(e.target.value)
  };

  function handleSubmit(e){
    e.preventDefault();
    dispatch(reviewAdded({ comment, restaurantId }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Comment:
        <textarea 
          name="comment"
          value={comment}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Review</button>
    </form>
  );
}

export default ReviewInput;
