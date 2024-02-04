import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf as faStarHalfSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import "./Card.css";

function Card({ data, indexImg }) {
  //let liked = true; // TODO : change for localStorage
  let [liked, setLiked] = useState();
  const [imageSourceUrl, setImageSourceUrl] = useState("");
  //console.log(data);
  useEffect(() => {
    const image =
      indexImg < 10
        ? data?.photos[indexImg].getUrl({
            maxWidth: 400,
            maxHeight: 300,
          })
        : data?.photos[indexImg];
    setImageSourceUrl(image);
  }, [indexImg]);

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
    if (!starCount) return null;

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
    if (!address || !url) return null;
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
            data?.website != null
              ? () => window.open(data?.website, "_blank")
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
            share(data?.url, data?.name, data?.address);
          }}
        >
          <FontAwesomeIcon
            icon={faShare}
            size="lg"
            className="share"
          ></FontAwesomeIcon>
        </button>
        <button
          className="like_button"
          onClick={() => {
            setLiked(!liked);
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

  const Image = ({ rating, name }) => {
    return (
      <div className="relative">
        <img className="caratula" src={imageSourceUrl} alt={name} />
        <Rating className="rating" starCount={rating}></Rating>
      </div>
    );
  };

  const Tags = ({ tags }) => {
    //console.log("Rendering tags");
    //console.dir(tags);

    let categories = Array.from({ length: tags.length });

    for (let i = 0; i < tags.length; i++) {
      categories[i] = (
        <span
          key={uuidv4()}
          className={["tag", tags[i].toLowerCase()].join(" ")}
        >
          {tags[i]}
        </span>
      );
    }

    return <div className="tags">{categories}</div>;
  };

  return (
    <>
      <div className="card">
        <Image rating={data?.rating} description={data?.name}></Image>
        <p className="descripcion">{data?.name}</p>
        <Tags tags={data?.categories}></Tags>
        <Street url={data?.url} address={data?.address}></Street>
        <Telephone telephoneNumber={data?.telephone}></Telephone>
        <ShareBar></ShareBar>
      </div>
    </>
  );
}

export default Card;
