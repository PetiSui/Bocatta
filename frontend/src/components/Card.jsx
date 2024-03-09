import { useState, useEffect } from "react";
import React from 'react';
import Telephone from "./Telephone";
import Street from "./Street";
import ShareBar from "./ShareBar";
import ImageWithRating from "./ImageWithRating";
import Image from "./Image";
import Rating from "./Rating";
import Pricing from "./Pricing";
import Tags from "./Tags";
import "../styles/Card.css";

function Card({ data, indexImg }) {
  const [imageSourceUrl, setImageSourceUrl] = useState("");
  //console.log(data);
  useEffect(() => {
    setImageSourceUrl(data?.photos[indexImg]);
  }, [data?.photos, indexImg]);
  
  return (
    <>
      <div className="card">
        {/* <ImageWithRating rating={data?.rating} description={data?.name} imageSourceUrl={imageSourceUrl}></ImageWithRating> */}
        <Image description={data?.name} imageSourceUrl={imageSourceUrl}>
          <Rating starCount={data?.rating}></Rating>
          <Pricing priceLevel={data?.priceLevel}></Pricing>
        </Image>
        <p className="descripcion">{data?.name}</p>
        <Tags tags={data?.categories}></Tags>
        <Street url={data?.url} address={data?.address}></Street>
        <Telephone telephoneNumber={data?.telephone}></Telephone>
        <ShareBar url={data?.url} website={data?.website} name={data?.name} address={data?.address} id={data?.id}></ShareBar>
      </div>
    </>
  );
}

export default Card;
