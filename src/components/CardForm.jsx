import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CardForm({ data, setData, modifyData, indexImg, decrementIndex, incrementIndex }) {
  //let [imageIndex, setImageIndex] = useState(0);
  
    return (
    <>
      <div className="edit_params">
        <div className="update_image">
          <button onClick={() => decrementIndex()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
            <span>{indexImg}/9</span>
          <button onClick={() => incrementIndex()}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <input type="file" name="newImage" id="image" />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input type="text" name="rating" size="4"/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" size="50"/>
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" size="50"/>
        </div>
        <div>
          <label htmlFor="telephone">Telephone: </label>
          <input type="text" name="telephone" />
        </div>
        <div>
          <label htmlFor="website">Website: </label>
          <input type="text" name="website" size="35"/>
        </div>
      </div>
    </>
  );
}

export default CardForm;
