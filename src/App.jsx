import { useState, useRef, useEffect } from "react";
import Card from "./components/Card.jsx";
import "./App.css";
import { REACT_APP_GOOGLE_MAPS_KEY } from "./constants/constants";


let autoComplete;
var addressObject;

const searchEstablishment = () => {google.maps.event.trigger(autoComplete, 'place_changed');};

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
  document.getElementsByTagName("head")[0].appendChild(script);
};

function App() {
  const [establishment, setEstablishment] = useState("");
  const autoCompleteRef = useRef(null);

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

  const handlePlaceSelect = async (updateQuery) => {
    addressObject = await autoComplete.getPlace();

    const query = addressObject.formatted_address;
    updateQuery(query);
    //console.log({ query });
    //console.dir(addressObject);

    const latLng = {
      lat: addressObject?.geometry?.location?.lat(),
      lng: addressObject?.geometry?.location?.lng(),
    };

    //console.log({ latLng });
  };

  useEffect(() => {
    console.log("LOADED LIBRARY");
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyB08y8T9MQJpbtkr0sW8FdncZzsBewqqM8&libraries=places`,
      () => handleScriptLoad(setEstablishment, autoCompleteRef)
    );

    return () => { setEstablishment('') }
  }, []);

  useEffect(() => {}, [addressObject]);

  return (
    <>
      <div className="app">
        <main className="main">
          <h1>Inserte establecimiento</h1>
          <div className="params">
            <label>Nombre: </label>
            <input
              ref={autoCompleteRef}
              type="text"
              className="inputName"
              name="Nombre"
              value={establishment}
              placeholder="Nombre"
              onChange={(e) => setEstablishment(e.target.value)}
            />
          </div>
          <button
            className="buttonSearch"
            onClick={() => {
              searchEstablishment();
            }}
          >
            Buscar
          </button>
        </main>

        {addressObject != null ? <Card data={addressObject} /> : null}
      </div>
    </>
  );
}

export default App;
