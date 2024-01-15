import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CardForm({
  data,
  modifyData,
  indexImg,
  decrementIndex,
  incrementIndex,
}) {

  return (
    <>
      <div className="edit_params">
        <div className="update_image">
          <button onClick={() => decrementIndex()} className="button_counter">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span>{indexImg}/{data?.photos.length-1}</span>
          <button onClick={() => incrementIndex()} className="button_counter">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <input type="file" name="newImage" id="image" />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input type="text" name="rating" defaultValue={data?.rating} size="4" onChange={(e) => {modifyData("rating", e.target.value.replace(',','.'))}}/>
        </div>
        <div>
          <label htmlFor="description">Name: </label>
          <input type="text" name="name" defaultValue={data?.name} size="50" onChange={(e) => {modifyData("name", e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" defaultValue={data?.address} size="50" onChange={(e) => {modifyData("address", e.target.value)}} />
        </div>
        <div>
          <label htmlFor="telephone">Telephone: </label>
          <input type="text" name="telephone" defaultValue={data?.telephone} onChange={(e) => {modifyData("telephone", e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="website">Website: </label>
          <input type="text" name="website" defaultValue={data?.website} size="35" onChange={(e) => {modifyData("website", e.target.value)}}/>
        </div>
        <button className="button_send">ENVIAR</button>
      </div>
    </>
  );
}

export default CardForm;
