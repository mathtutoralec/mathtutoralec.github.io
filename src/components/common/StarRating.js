import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";

const FullStar = () => (
  <FontAwesomeIcon icon={fullStar} className="text-primary" />
);

const HalfStar = () => (
  <FontAwesomeIcon icon={halfStar} className="text-primary" />
);

const EmptyStar = () => (
  <FontAwesomeIcon icon={outlineStar} className="text-primary" />
);

export const StarRating = ({ rating="", maxRating=5 }) => {
  var starRatingOutput = [];

  for (let i = 1; i <= maxRating; i++) {
    if (rating >= i) starRatingOutput.push(<FullStar key={"star-" + i}/>) 
    else if (rating >= i - 0.5) starRatingOutput.push(<HalfStar key={"star-" + i}/>); 
    else starRatingOutput.push(<EmptyStar key={"star-" + i}/>)
  }
  
  return starRatingOutput;
}

export default StarRating;
