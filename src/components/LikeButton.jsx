import {React, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const LikeButton = ({id}) => {

  let likedEstablishments = JSON.parse(localStorage.getItem('likedEstablishments')) || [];
  console.log(likedEstablishments);

  let [likedPlaces, setLikedPlaces] = useState(likedEstablishments);
  let [clicked, setClicked] = useState(false);
  
  
  
  
  let found = likedEstablishments.includes(id);
  console.log(found);

  const handleLiked = () => {
    found ? likedEstablishments = likedEstablishments.filter(item => item != id) : likedEstablishments.push(id);
    localStorage.setItem('likedEstablishments', JSON.stringify(likedEstablishments))
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
      clicked={clicked}
    >
      {found ? (
        <FontAwesomeIcon
          icon={faHeartBroken}
          className="like"
          size="xl"
          // data-liked={clicked.toString()}
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          icon={faHeart}
          className="like"
          size="xl"
          data-liked={clicked.toString()}
        ></FontAwesomeIcon>
      )}
    </button>
  );
};

export default LikeButton;
