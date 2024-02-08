import { useState, useEffect } from "react";
import Telephone from "./Telephone";
import Street from "./Street";
import ShareBar from "./ShareBar";
import ImageWithRating from "./ImageWithRating";
import Tags from "./Tags";
import "../styles/Card.css";

function Card({ data, indexImg }) {
  const [imageSourceUrl, setImageSourceUrl] = useState("");
  //console.log(data);
  useEffect(() => {
    setImageSourceUrl(data?.photos[indexImg]);
  }, [indexImg]);
  
  return (
    <>
      <div className="card">
        <ImageWithRating rating={data?.rating} description={data?.name} imageSourceUrl={imageSourceUrl}></ImageWithRating>
        <p className="descripcion">{data?.name}</p>
        <Tags tags={data?.categories}></Tags>
        <Street url={data?.url} address={data?.address}></Street>
        <Telephone telephoneNumber={data?.telephone}></Telephone>
        <ShareBar url={data?.url} website={data?.website} name={data?.name} address={data?.address}></ShareBar>
      </div>
    </>
  );
}

export default Card;
