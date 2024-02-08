import { useState, useRef, useEffect } from "react";
import Card from "./components/Card.jsx";
import "./styles/App.css";
import { REACT_APP_GOOGLE_MAPS_KEY } from "./constants/constants";
import CardForm from "./components/CardForm.jsx";

let autoComplete;
var addressObject;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  script.async = true;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function App() {
  const [establishment, setEstablishment] = useState("");
  const [establishmentData, setEstablishmentData] = useState({});
  const autoCompleteRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleScriptLoad = (query, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      {
        types: ["establishment"],
        componentRestrictions: { country: "ES" },
      }
    );

    autoComplete.addListener("place_changed", () => {
      handlePlaceSelect(query);
    });
  };

  const toDataURL = (url) =>
    fetch(url, {mode: 'no-cors'})
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      ).catch( err => console.log(err));

  const handlePlaceSelect = async (updateQuery) => {
    addressObject = await autoComplete.getPlace();
    //console.dir(addressObject);

    let data = {
      address: addressObject?.formatted_address || "",
      name: addressObject?.name || "",
      telephone: addressObject?.formatted_phone_number || "",
      url: addressObject?.url || "",
      website: addressObject?.website || "",
      photos: addressObject?.photos.map( photo => photo.getUrl({
        maxWidth: 400,
        maxHeight: 300,
      })) || [],
      rating: addressObject?.rating || "",
      priceLevel: addressObject?.price_level || "",
      totalReviews: addressObject?.user_ratings_total || "",
      categories: [],
    };
    //console.dir(data);
    updateQuery(data);
    setEstablishment(data?.address);
  };

  function handleSubmit(e) {
    e.preventDefault();

    handlePlaceSelect(setEstablishmentData);
  }

  // Attach your callback function to the `window` object
  window.initMap = function () {
    // JS API is loaded and available
    // console.log("LOADED LIBRARY");
    handleScriptLoad(setEstablishmentData, autoCompleteRef);
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyB08y8T9MQJpbtkr0sW8FdncZzsBewqqM8&libraries=places&callback=initMap&loading=async`,
      () => {}
    );

    return () => {
      setEstablishment("");
    };
  }, []);

  function decrementIndex() {
    setImageIndex((prevIndex) => (prevIndex == 0 ? establishmentData?.photos?.length-1 : prevIndex - 1));
  }

  function incrementIndex() {
    setImageIndex((prevIndex) => (imageIndex == establishmentData?.photos?.length-1 ? 0 : imageIndex + 1));
  }

  function modifyData(id, ...value) {
    //TEST FOR BUGS
    if(id === 'photos') value = value[0];
    console.dir(establishmentData);
    console.log(`ID:${id} with value ${value}`);
    setEstablishmentData((prevState) => ({
      ...prevState,
      [id]: value, //[...value]
    }));
    console.dir(establishmentData);
  }

  return (
    <>
      <div className="app">
        <main className="main">
          <form onSubmit={handleSubmit}>
            <h1>Inserte establecimiento</h1>
            <div className="params">
              <label htmlFor="nombre">Nombre: </label>
              <input
                ref={autoCompleteRef}
                type="text"
                className="inputName"
                name="Nombre"
                id="nombre"
                value={establishment}
                placeholder="Nombre"
                onChange={(e) => setEstablishment(e.target.value)}
              />
            </div>
          </form>
        </main>

        <div className="tarjeta">
          {Object.entries(establishmentData).length != 0 ? (
            <>
              <Card data={establishmentData} indexImg={imageIndex}></Card>
              <CardForm
                data={establishmentData}
                modifyData={modifyData}
                indexImg={imageIndex}
                decrementIndex={decrementIndex}
                incrementIndex={incrementIndex}
                setImageIndex={setImageIndex}
              ></CardForm>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
