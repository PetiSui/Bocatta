import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usePrefersColorScheme from 'use-prefers-color-scheme'

const LikeButton = ({ id }) => {
  let likedEstablishments = JSON.parse(localStorage.getItem("likedEstablishments")) || [];
  // console.log(likedEstablishments);

  let [likedPlaces, setLikedPlaces] = useState(likedEstablishments);
  let [clicked, setClicked] = useState(false);

  const prefersColorScheme = usePrefersColorScheme();
  const colorScheme = prefersColorScheme === "dark" ? "dark" : "light";
  // console.log("Clicked " + clicked);

  let set = new Set(likedEstablishments);
  // console.log(set);

  // let found = likedEstablishments.includes(id);
  let found = set.has(id);
  // console.log(found);

  const notifyLiked = () =>
    toast.success("Me gusta! 😄", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: colorScheme
    });
  const notifyDisliked = () =>
    toast.info("No me gusta 😟", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: colorScheme,
    });

  const handleLiked = () => {
    // found ? likedEstablishments = likedEstablishments.filter(item => item != id) : likedEstablishments.push(id);
    found ? set.delete(id) : set.add(id);

    // localStorage.setItem('likedEstablishments', JSON.stringify(likedEstablishments));
    likedEstablishments = JSON.stringify(Array.from(set));
    localStorage.setItem("likedEstablishments", likedEstablishments);
    setLikedPlaces(likedEstablishments);

    found ? notifyDisliked() : notifyLiked();
  };

  return (
    <>
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={colorScheme}
      />
    </>
  );
};

export default LikeButton;
