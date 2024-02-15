import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

const Pricing = ({ priceLevel }) => {
  if (!priceLevel || priceLevel == "") return null;

  let MAX_PRICE = 3;
  let pricing = parseInt(priceLevel);
  if (pricing > MAX_PRICE) {
    pricing = MAX_PRICE;
  }
  if (pricing < 0) {
    pricing = 0;
  }

  let euros = Array.from({ length: MAX_PRICE });

  let i;
  for (i = 0; i < pricing; i++) {
    euros[i] = (
      <FontAwesomeIcon
        icon={faEuroSign}
        size="lg"
        className="euro"
        key={uuidv4()}
      ></FontAwesomeIcon>
    );
  }

  return <div className="pricing">{euros}</div>;
};

export default Pricing;
