import {React, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const LikeButton = ({id}) => {

  const initialLike = localStorage?.getItem(id) || null;
  //console.log(initialLike);
  let [liked, setLiked] = useState(initialLike);
  //TODO: UseEffect to load localStorage liked

  const handleLiked = () => {
    localStorage.setItem(id, !liked);
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <button
      title="Me gusta"
      className="like_button"
      onClick={() => {
        // setLiked((prevLiked) => !prevLiked);
        handleLiked();
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
  );
};

export default LikeButton;
