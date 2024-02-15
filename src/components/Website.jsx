import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Website = ({ website }) => {
  if (!website || website === "") return;
  console.log(website);
  return (
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
  );
};

export default Website;
