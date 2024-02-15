import React from 'react'
import Rating from './Rating';
import { Children } from 'react';


const Image = ({ description, imageSourceUrl, children }) => {
    return (
      <div className="relative">
        <img className="image" src={imageSourceUrl} alt={description} />
        {children}
      </div>
    );
  };

export default Image