import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Telephone = ({ telephoneNumber }) => {
    if (!telephoneNumber) return null;
    return (
      <div className="phone_details" title="Teléfono de contacto">
        <FontAwesomeIcon icon={faPhone} className="phone"></FontAwesomeIcon>
        <a href={`tel:${telephoneNumber}`} className="telephone_number">
          {telephoneNumber}
        </a>
      </div>
    );
  };

export default Telephone