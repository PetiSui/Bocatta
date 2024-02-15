import { useState, React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

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



const ShareBar = ({ url, website, name, address, id }) => {
  const initialLike = localStorage?.getItem(id) || null;
  console.log(initialLike);
  let [liked, setLiked] = useState(initialLike);
  //TODO: UseEffect to load localStorage liked

  const handleLiked = () => {
    setLiked((prevLiked) => !prevLiked);
    localStorage.setItem(id, liked)
  }

  return (
    <div className="buttons">
      <button
        title="Sitio web"
        onClick={website != null ? () => window.open(website, "_blank") : null}
      >
        <FontAwesomeIcon
          icon={faGlobe}
          size="lg"
          className="globe"
        ></FontAwesomeIcon>
      </button>
      <button
        title="Compartir"
        onClick={() => {
          share(url, name, address);
        }}
      >
        <FontAwesomeIcon
          icon={faShare}
          size="lg"
          className="share"
        ></FontAwesomeIcon>
      </button>
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
    </div>
  );
};

export default ShareBar;
