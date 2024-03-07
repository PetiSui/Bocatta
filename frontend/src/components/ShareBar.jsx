import { React } from "react";

import LikeButton from "./LikeButton";
import Share from "./Share";
import Website from "./Website";

const ShareBar = ({ url, website, name, address, id }) => {
  
  return (
    <div className="buttons">
      <Website website={website}></Website>
      <Share url={url} name={name} address={address}></Share>
      <LikeButton id={id}></LikeButton>
    </div>
  );
};

export default ShareBar;
