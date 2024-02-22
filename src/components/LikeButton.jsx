import {React, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faEmptyHeart} from "@fortawesome/free-regular-svg-icons";

const LikeButton = ({id}) => {

  let likedEstablishments = JSON.parse(localStorage.getItem('likedEstablishments')) || [];
  console.log(likedEstablishments);

  let [likedPlaces, setLikedPlaces] = useState(likedEstablishments);
  let [clicked, setClicked] = useState(false);
  console.log("Clicked " + clicked);

  let set = new Set(likedEstablishments);
  console.log(set);
  
  // let found = likedEstablishments.includes(id);
  let found = set.has(id);
  console.log(found);

  const handleLiked = () => {
    // found ? likedEstablishments = likedEstablishments.filter(item => item != id) : likedEstablishments.push(id);
    found ? set.delete(id) : set.add(id);
    // localStorage.setItem('likedEstablishments', JSON.stringify(likedEstablishments));
    likedEstablishments = JSON.stringify(Array.from(set));
    localStorage.setItem('likedEstablishments', likedEstablishments)
    setLikedPlaces(likedEstablishments);
  };

  return (
    <button
      title="Me gusta"
      className="like_button"
      onClick={() => {
        setClicked(true);
        handleLiked();
      }}
      clicked={clicked.toString()}
    >
      {found ? (
        <FontAwesomeIcon
          icon={faHeart}
          className="like"
          size="xl"
          data-liked={clicked.toString()}
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          icon={faEmptyHeart}
          className="like"
          size="xl"
        ></FontAwesomeIcon>
      )}
    </button>
  );
};

export default LikeButton;
