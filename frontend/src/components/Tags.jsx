import React from "react";
import { v4 as uuidv4 } from "uuid";

const Tags = ({ tags }) => {

  if(!tags || tags.length === 0) return;
  console.log(tags);

  let categories = Array.from({ length: tags.length });

  for (let i = 0; i < tags.length; i++) {
    categories[i] = (
      <span key={uuidv4()} className={["tag", tags[i].toLowerCase()].join(" ")}>
        {tags[i]}
      </span>
    );
  }

  return <div className="tags">{categories}</div>;
};

export default Tags;
