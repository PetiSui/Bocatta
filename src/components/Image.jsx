import React from 'react'


const Image = ({ description, imageSourceUrl, children }) => {
    return (
      <div className="relative">
        <img className="image" src={imageSourceUrl} alt={description} />
        {children}
      </div>
    );
  };

export default Image