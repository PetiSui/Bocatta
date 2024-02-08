import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import fileTypeChecker from "file-type-checker";
import axios from "axios";

function CardForm({
  data,
  modifyData,
  indexImg,
  decrementIndex,
  incrementIndex,
  setImageIndex,
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

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  async function addImage(image) {
    let base64Image = await toBase64(image)
      .then((result) => modifyData("photos", [...data.photos, result]))
      .catch((error) => console.log(error));
  }

  function handleFileUpload(event) {
    const types = ["jpeg", "png", "gif"];
    const file = event.target.files[0];
    try {
      if (file) {
        const fileReader = new FileReader();

        fileReader.onload = async () => {
          const isImage = fileTypeChecker.validateFileType(
            fileReader.result,
            types
          );

          if (!isImage) {
            alert(
              "Solo estám soportados los formatos .jpeg, .png y .gif. Intentelo de nuevo."
            );
          }
          await addImage(file);
          setImageIndex(() => data?.photos.length);
        };

        fileReader.readAsArrayBuffer(file);
      }
    } catch (err) {
      console.error("Error: ", err.message);
    }
  }

  const UpdateImage = () => {
    return (
      <div className="update_image">
        <div className="img_selector">
          <button onClick={() => decrementIndex()} className="button_counter">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span>
            {indexImg + 1}/{data?.photos.length}
          </span>
          <button onClick={() => incrementIndex()} className="button_counter">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <input
          type="file"
          name="image"
          id="image"
          accept=".gif,.jpeg,.png"
          onChange={(e) => handleFileUpload(e)}
        />
      </div>
    );
  };

  async function handleSubmitData() {
    const baseURL = "http://localhost:4000";
    const postData = {
      ...data,
      photos: data?.photos[indexImg],
    };
    await axios
      .post(`${baseURL}/cards`, JSON.stringify(postData))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="edit_params">
        <UpdateImage></UpdateImage>
        <div className="categorias">
          {categorias.map((categoria) => {
            return (
              <div key={uuidv4()}>
                <input
                  key={uuidv4()}
                  type="checkbox"
                  id={categoria}
                  title={categoria}
                  checked={categoriasSeleccionadas.includes(categoria)}
                  value={categoria}
                  name={categoria}
                  onChange={() => handleCategorias(categoria)}
                />
                <label key={uuidv4()} htmlFor={categoria}>
                  {categoria}
                </label>
              </div>
            );
          })}
        </div>
        <div>
          <label htmlFor="rating">Valoración: </label>
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
          <label htmlFor="description">Nombre: </label>
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
          <label htmlFor="address">Dirección: </label>
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
          <label htmlFor="telephone">Teléfono: </label>
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
          <label htmlFor="website">Sitio Web: </label>
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
        <button
          onClick={() => handleSubmitData()}
          className="button_send button_search"
        >
          ENVIAR
        </button>
      </div>
    </>
  );
}

export default CardForm;
