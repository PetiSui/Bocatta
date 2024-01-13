import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf as faStarHalfSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

function Card(data) {
  //let liked = true; // TODO : change for localStorage
  let [liked, setLiked] = useState();
  const [imageSourceUrl, setImageSourceUrl] = useState("");
  console.log(data);

  if (data.length === 0) {
    return;
  }

  function share(link, name, address) {
    let shareData = {
      title: name,
      text: address,
      url: link,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Sharing failed:", error));
    }
  }

  const Rating = ({ starCount }) => {
    let MAX_RATING = 5;
    let rating = parseFloat(starCount);
    if (rating > MAX_RATING) {
      rating = MAX_RATING;
    }
    if (rating < 0.0) {
      rating = 0.0;
    }
    let wholeStars = Math.floor(rating);

    let stars = Array.from({ length: MAX_RATING });

    let i;
    for (i = 0; i < wholeStars; i++) {
      stars[i] = (
        <FontAwesomeIcon
          icon={faStarSolid}
          className="star"
          key={i}
        ></FontAwesomeIcon>
      );
    }

    if (rating - wholeStars > 0 && rating - wholeStars < 1) {
      stars[i] = (
        <FontAwesomeIcon
          icon={faStarHalfSolid}
          className="star half-star"
          key={i}
        ></FontAwesomeIcon>
      );
    }

    return <div className="rating">{stars}</div>;
  };

  const Telephone = ({ telephoneNumber }) => {
    if (!telephoneNumber) return null;
    return (
      <div className="phone_details">
        <FontAwesomeIcon icon={faPhone} className="phone"></FontAwesomeIcon>
        <a href={`tel:${telephoneNumber}`} className="telephone_number">
          {telephoneNumber}
        </a>
      </div>
    );
  };

  const Street = ({ address, url }) => {
    return (
      <div className="street_details">
        <FontAwesomeIcon icon={faMapLocation} className="map"></FontAwesomeIcon>
        <a href={url} target="_blank" className="address">
          {address}
        </a>
      </div>
    );
  };

  const ShareBar = () => {
    return (
      <div className="buttons">
        <button
          onClick={
            data?.data?.website != null
              ? () => window.open(data?.data?.website, "_blank")
              : null
          }
        >
          <FontAwesomeIcon
            icon={faGlobe}
            size="lg"
            className="globe"
          ></FontAwesomeIcon>
        </button>
        <button
          onClick={() => {
            share(data?.data?.url, data?.data?.name, data?.data?.address);
          }}
        >
          <FontAwesomeIcon
            icon={faShare}
            size="lg"
            className="share"
          ></FontAwesomeIcon>
        </button>
        <button
          onClick={() => {
            setLiked(!liked);
            console.log(liked);
          }}
        >
          {!liked ? (
            <FontAwesomeIcon
              icon={faHeartBroken}
              className="like"
              size="lg"
              data-liked={liked}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              className="like"
              size="lg"
              data-liked={liked}
            ></FontAwesomeIcon>
          )}
        </button>
      </div>
    );
  };

  const Image = ({ images, rating, name }) => {
    const image = images[0].getUrl({ maxWidth: 400, maxHeight: 300 });
    setImageSourceUrl(image);
    return (
      <div className="relative">
        <img className="caratula" src={imageSourceUrl} alt={name} />
        <Rating className="rating" starCount={rating}></Rating>
      </div>
    );
  };
  return Object.entries(data?.data).length != 0 ? (
    <>
      <div className="card">
        <Image images={data?.data?.photos} rating={data?.data?.rating} description={data?.data?.name}></Image>
        <p className="descripcion">{data?.data?.name}</p>
        <Street url={data?.data?.url} address={data?.data?.address}></Street>
        <Telephone telephoneNumber={data?.data?.telephone}></Telephone>
        <ShareBar></ShareBar>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Card;
