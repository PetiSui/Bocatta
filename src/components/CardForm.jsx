import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

function CardForm({
  data,
  modifyData,
  indexImg,
  decrementIndex,
  incrementIndex,
}) {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  useEffect(() => {
    console.log(categoriasSeleccionadas);
    modifyData("categories", ...categoriasSeleccionadas);
  }, [categoriasSeleccionadas]);

  const categorias = [
    "Almuerzos",
    "Argentino",
    "Bocadillos",
    "Buffet",
    "Desayunos",
    "Hamburguesas",
    "Horchateria",
    "Mexicano",
    "Pizza",
    "Sushi",
    "Tapas",
  ];

  function handleCategorias(categoria) {
    categoriasSeleccionadas.includes(categoria)
      ? setCategoriasSeleccionadas((prevCategorias) =>
          prevCategorias.filter((categ) => categ != categoria)
        )
      : setCategoriasSeleccionadas((prevCategorias) => [
          ...prevCategorias,
          categoria,
        ]);
  }

  return (
    <>
      <div className="edit_params">
        <div className="update_image">
          <button onClick={() => decrementIndex()} className="button_counter">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span>
            {indexImg + 1}/{data?.photos.length}
          </span>
          <button onClick={() => incrementIndex()} className="button_counter">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <input type="file" name="newImage" id="image" />
        </div>
        <div className="categorias">
          {categorias.map((categoria) => {
            return (
              <div key={uuidv4()}>
                <input
                  key={uuidv4()}
                  type="checkbox"
                  id={categoria}
                  checked={categoriasSeleccionadas.includes(categoria)}
                  value={categoria}
                  name={categoria}
                  onChange={() => handleCategorias(categoria)}
                />
                <label key={uuidv4()} htmlFor={categoria}>{categoria}</label>
              </div>
            );
          })}
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            type="text"
            name="rating"
            id="rating"
            key="rating"
            defaultValue={data?.rating}
            size="4"
            onChange={(e) => {
              modifyData("rating", e.target.value.replace(",", "."));
            }}
          />
        </div>
        <div>
          <label htmlFor="description">Name: </label>
          <input
            type="text"
            name="description"
            id="description"
            key="description"
            defaultValue={data?.name}
            size="50"
            onChange={(e) => {
              modifyData("name", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            key="address"
            defaultValue={data?.address}
            size="50"
            onChange={(e) => {
              modifyData("address", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="telephone">Telephone: </label>
          <input
            type="text"
            name="telephone"
            id="telephone"
            key="telephone"
            defaultValue={data?.telephone}
            onChange={(e) => {
              modifyData("telephone", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="website">Website: </label>
          <input
            type="text"
            name="website"
            id="website"
            key="website"
            defaultValue={data?.website}
            size="35"
            onChange={(e) => {
              modifyData("website", e.target.value);
            }}
          />
        </div>
        <button className="button_send button_search">ENVIAR</button>
      </div>
    </>
  );
}

export default CardForm;
