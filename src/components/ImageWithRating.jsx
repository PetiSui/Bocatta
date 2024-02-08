import React from 'react'
import Rating from "./Rating";

const ImageWithRating = ({ rating, name, imageSourceUrl }) => {
    return (
      <div className="relative">
        <img className="caratula" src={imageSourceUrl} alt={name} />
        <Rating className="rating" starCount={rating}></Rating>
      </div>
    );
  };
export default ImageWithRating