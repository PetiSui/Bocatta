import { useState, useRef, useEffect } from "react";
import image1 from "../img/pascuala.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf as faStarHalfSolid } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./Card.css";

var datax = {
  address_components: [
    {
      long_name: "299",
      short_name: "299",
      types: ["street_number"],
    },
    {
      long_name: "Carrer del Doctor Lluch",
      short_name: "C. del Dr. Lluch",
      types: ["route"],
    },
    {
      long_name: "Poblados Marítimos",
      short_name: "Poblados Marítimos",
      types: ["sublocality_level_1", "sublocality", "political"],
    },
    {
      long_name: "València",
      short_name: "València",
      types: ["locality", "political"],
    },
    {
      long_name: "Valencia",
      short_name: "V",
      types: ["administrative_area_level_2", "political"],
    },
    {
      long_name: "Comunidad Valenciana",
      short_name: "VC",
      types: ["administrative_area_level_1", "political"],
    },
    {
      long_name: "España",
      short_name: "ES",
      types: ["country", "political"],
    },
    {
      long_name: "46011",
      short_name: "46011",
      types: ["postal_code"],
    },
  ],
  adr_address:
    '<span class="street-address">C. del Dr. Lluch, 299</span>, <span class="region">Poblados Marítimos</span>, <span class="postal-code">46011</span> <span class="locality">València</span>, <span class="region">Valencia</span>, <span class="country-name">España</span>',
  business_status: "OPERATIONAL",
  current_opening_hours: {
    open_now: false,
    periods: [
      {
        close: {
          date: "2024-01-08",
          day: 1,
          time: "1530",
        },
        open: {
          date: "2024-01-08",
          day: 1,
          time: "0900",
        },
      },
      {
        close: {
          date: "2024-01-09",
          day: 2,
          time: "1530",
        },
        open: {
          date: "2024-01-09",
          day: 2,
          time: "0900",
        },
      },
      {
        close: {
          date: "2024-01-10",
          day: 3,
          time: "1530",
        },
        open: {
          date: "2024-01-10",
          day: 3,
          time: "0900",
        },
      },
      {
        close: {
          date: "2024-01-11",
          day: 4,
          time: "1530",
        },
        open: {
          date: "2024-01-11",
          day: 4,
          time: "0900",
        },
      },
      {
        close: {
          date: "2024-01-12",
          day: 5,
          time: "1530",
        },
        open: {
          date: "2024-01-12",
          day: 5,
          time: "0900",
        },
      },
      {
        close: {
          date: "2024-01-13",
          day: 6,
          time: "1600",
        },
        open: {
          date: "2024-01-13",
          day: 6,
          time: "0900",
        },
      },
    ],
    weekday_text: [
      "lunes: 9:00–15:30",
      "martes: 9:00–15:30",
      "miércoles: 9:00–15:30",
      "jueves: 9:00–15:30",
      "viernes: 9:00–15:30",
      "sábado: 9:00–16:00",
      "domingo: Cerrado",
    ],
  },
  formatted_address:
    "C. del Dr. Lluch, 299, Poblados Marítimos, 46011 València, Valencia, España",
  formatted_phone_number: "963 71 38 14",
  geometry: {
    location: {
      lat: 39.4739762,
      lng: -0.3275017,
    },
    viewport: {
      south: 39.47258541970849,
      west: -0.328802230291502,
      north: 39.47528338029149,
      east: -0.3261042697084979,
    },
  },
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
  icon_background_color: "#FF9E67",
  icon_mask_base_uri:
    "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
  international_phone_number: "+34 963 71 38 14",
  name: "Bodega La Pascuala",
  opening_hours: {
    open_now: false,
    periods: [
      {
        close: {
          day: 1,
          time: "1530",
          hours: 15,
          minutes: 30,
          nextDate: 1705329000000,
        },
        open: {
          day: 1,
          time: "0900",
          hours: 9,
          minutes: 0,
          nextDate: 1705305600000,
        },
      },
      {
        close: {
          day: 2,
          time: "1530",
          hours: 15,
          minutes: 30,
          nextDate: 1704810600000,
        },
        open: {
          day: 2,
          time: "0900",
          hours: 9,
          minutes: 0,
          nextDate: 1704787200000,
        },
      },
      {
        close: {
          day: 3,
          time: "1530",
          hours: 15,
          minutes: 30,
          nextDate: 1704897000000,
        },
        open: {
          day: 3,
          time: "0900",
          hours: 9,
          minutes: 0,
          nextDate: 1704873600000,
        },
      },
      {
        close: {
          day: 4,
          time: "1530",
          hours: 15,
          minutes: 30,
          nextDate: 1704983400000,
        },
        open: {
          day: 4,
          time: "0900",
          hours: 9,
          minutes: 0,
          nextDate: 1704960000000,
        },
      },
      {
        close: {
          day: 5,
          time: "1530",
          hours: 15,
          minutes: 30,
          nextDate: 1705069800000,
        },
        open: {
          day: 5,
          time: "0900",
          hours: 9,
          minutes: 0,
          nextDate: 1705046400000,
        },
      },
      {
        close: {
          day: 6,
          time: "1600",
          hours: 16,
          minutes: 0,
          nextDate: 1705158000000,
        },
        open: {
          day: 6,
          time: "0900",
          hours: 9,
          minutes: 0,
          nextDate: 1705132800000,
        },
      },
    ],
    weekday_text: [
      "lunes: 9:00–15:30",
      "martes: 9:00–15:30",
      "miércoles: 9:00–15:30",
      "jueves: 9:00–15:30",
      "viernes: 9:00–15:30",
      "sábado: 9:00–16:00",
      "domingo: Cerrado",
    ],
  },
  photos: [
    {
      height: 729,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/105723734780810704860">Bodega La Pascuala</a>',
      ],
      width: 1296,
    },
    {
      height: 3024,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/105723734780810704860">Bodega La Pascuala</a>',
      ],
      width: 4032,
    },
    {
      height: 2160,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/100827325899314032483">Ciccio Ve</a>',
      ],
      width: 4096,
    },
    {
      height: 3000,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/112917788946700238616">Maximiliano Ravida</a>',
      ],
      width: 4000,
    },
    {
      height: 2448,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/106102621330399615278">Roberto Castello i Zaragoza</a>',
      ],
      width: 3264,
    },
    {
      height: 2232,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/100724767103604054599">Eduardo Aquiles</a>',
      ],
      width: 3968,
    },
    {
      height: 3000,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/106076642229716287543">Juan José Galiano</a>',
      ],
      width: 3000,
    },
    {
      height: 1080,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/102737208596678640571">Francisco Sutil</a>',
      ],
      width: 1920,
    },
    {
      height: 3024,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/112274103595223654044">Julio Franco</a>',
      ],
      width: 4032,
    },
    {
      height: 3456,
      html_attributions: [
        '<a href="https://maps.google.com/maps/contrib/100300085702009191307">VICENTE CAMBRALLA HERRERO</a>',
      ],
      width: 4608,
    },
  ],
  place_id: "ChIJvSOkUmhIYA0RUPf36xTalGc",
  plus_code: {
    compound_code: "FMFC+HX Valencia, España",
    global_code: "8CFXFMFC+HX",
  },
  price_level: 1,
  rating: 4.3,
  reference: "ChIJvSOkUmhIYA0RUPf36xTalGc",
  reviews: [
    {
      author_name: "A MC",
      author_url:
        "https://www.google.com/maps/contrib/114856707969865814654/reviews",
      language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/ACg8ocLSALcqgeCee7MhiooZc27fIXP8B5r9kTXUkrysMmSLOA=s128-c0x00000000-cc-rp-mo-ba4",
      rating: 5,
      relative_time_description: "Hace una semana",
      text: "Si buscas un buen esmorssaet, este es tu sitio. Llevaba tiempo sin venir y no decepciona. Bebida, cacaos, un buen bocadillo y café a un precio inigualable. Además, está cerca de la playa y tiene una buena terraza con sol hasta mediodía\nYo pedí medio de lomo, queso, cebolla y patatas y no pude acabarlo, aunque estaba espectacular! Lo recomendaré siempre!",
      time: 1703610474,
    },
    {
      author_name: "Angel Frances",
      author_url:
        "https://www.google.com/maps/contrib/106871174180961641729/reviews",
      language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjUzmmRT-yLMyUmFnzztbpTYZNCK1GgMZQeXfAbsA856_Ks=s128-c0x00000000-cc-rp-mo-ba4",
      rating: 5,
      relative_time_description: "Hace 1 mes",
      text: "Des 1921 sirviendo bocadillos de todo tipo de carnes. Son bocadillos muy generosos. Aunque hace 7 años se cambiaron de local  la calidad y atencion sigue siendo la misma. Los precios son buenos y están situados en el barrio del Cabañas muy cerca de la playa. Si es la primera vez que vas, te recomiendo que pidas el bocadillo entero. El de carne de Caballo es el más típico.",
      time: 1701340206,
    },
    {
      author_name: "thermooj",
      author_url:
        "https://www.google.com/maps/contrib/102573497595394163411/reviews",
      language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjVRql_-eV8Hqnv4-fGvAzpqT--MSU7h7QVsFIlFS-sqiyQ=s128-c0x00000000-cc-rp-mo-ba6",
      rating: 4,
      relative_time_description: "Hace 5 meses",
      text: "Lugar de esmorssaet por antonomasia en Valencia, si o si hay que ir. Puede que haya sitios mejores pero este es un clásico. Los bocadillos pueden ser de lo que tú quieras. Hay una carta por si no sabes que pedir, las raciones son Generosas, el pan de los bocatas es  una barra muy buena. Genial venir con los amigos, y hacer una competición de a ver quien come más. Lugar altamente recomendable",
      time: 1689956568,
    },
    {
      author_name: "Juan José Galiano",
      author_url:
        "https://www.google.com/maps/contrib/106076642229716287543/reviews",
      language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjXvMTQlacNrMHc5atywC9ev3TwGscgv-kg1itIw6Tpd-Rs=s128-c0x00000000-cc-rp-mo-ba6",
      rating: 3,
      relative_time_description: "Hace 1 mes",
      text: 'Otro "referente" que se "cae" de ese nivel. Bocadillos grandes (como en todos los sitios ya), poco o nada originales, de calidad normalisima y servicio lento para aburrir. Lo siento este local ya no es lo que era. Y el precio de un bocadillo de lomo con lomo adobado casi 9 €???',
      time: 1699989470,
    },
    {
      author_name: "Esther diaz fernandez",
      author_url:
        "https://www.google.com/maps/contrib/101981817315757134154/reviews",
      language: "es",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/ACg8ocJcTuNSj6AGnXi-F-4KQpaf5IJEakeJ6JCksTdX_FrM=s128-c0x00000000-cc-rp-mo",
      rating: 1,
      relative_time_description: "Hace 3 meses",
      text: "Fui por la cantidad de reseñas que tenía el lugar pero decepción total, el local muy básico no tienen una decoración cuidada, la atención tirando a mala, y los bocadillos puro aceite, pedí el de carne de caballo pensando que sería el más “saludable” pero el bocadillo estaba empapado en aceite, y para el chivito igual, mucho aceite… se nota que los huevos fritos los hacen y los dejan hechos hasta que se sirven por qué la yema estaba cocida.\nEl precio no está mal pero podrían mejorar, parece que les cuesta darte los cubiertos y servilletas sabiendo que con los bocadillos te pringas entero.",
      time: 1694805741,
    },
  ],
  types: ["restaurant", "food", "point_of_interest", "establishment"],
  url: "https://maps.google.com/?cid=7463830265852852048",
  user_ratings_total: 7916,
  utc_offset: 60,
  vicinity: "Carrer del Doctor Lluch, 299, València",
  website: "http://www.bodegalapascuala.es/",
  html_attributions: [],
  utc_offset_minutes: 60,
};

function Card(data) {
  //let liked = true; // TODO : change for localStorage
  let [liked, setLiked] = useState();
  const [imageSourceUrl, setImageSourceUrl] = useState("");
  console.log(data);

  if (data.length === 0) {
    return;
    //console.log(
    //  data?.data?.photos[0]?.getUrl({ maxWidth: 500, maxHeight: 500 })
    //);
  }

  function share(link, name, address) {
    let shareData = {
      title: name,
      text: address,
      url: link,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Sharing failed:", error));
    }
  }

  const Rating = ({ starCount }) => {
    let MAX_RATING = 5;
    let rating = parseFloat(starCount);
    if (rating > MAX_RATING) {
      rating = MAX_RATING;
    }
    if (rating < 0.0) {
      rating = 0.0;
    }
    let wholeStars = Math.floor(rating);

    let stars = Array.from({ length: MAX_RATING });

    let i;
    for (i = 0; i < wholeStars; i++) {
      stars[i] = (
        <FontAwesomeIcon
          icon={faStarSolid}
          className="star"
          key={i}
        ></FontAwesomeIcon>
      );
    }

    if (rating - wholeStars > 0 && rating - wholeStars < 1) {
      stars[i] = (
        <FontAwesomeIcon
          icon={faStarHalfSolid}
          className="star half-star"
          key={i}
        ></FontAwesomeIcon>
      );
    }

    return <div className="rating">{stars}</div>;
  };

  const Telephone = ({ telephoneNumber }) => {
    if (!telephoneNumber) return null;
    return (
      <div className="phone_details">
        <FontAwesomeIcon icon={faPhone} className="phone"></FontAwesomeIcon>
        <a href={`tel:${telephoneNumber}`} className="telephone_number">
          {telephoneNumber}
        </a>
      </div>
    );
  };

  const Street = ({ address, url }) => {
    return (
      <div className="street_details">
        <FontAwesomeIcon icon={faMapLocation} className="map"></FontAwesomeIcon>
        <a href={url} target="_blank" className="address">
          {address}
        </a>
      </div>
    );
  };

  const ShareBar = () => {
    return (
      <div className="buttons">
        <button
          onClick={
            data?.data?.website != null
              ? () => window.open(data?.data?.website, "_blank")
              : null
          }
        >
          <FontAwesomeIcon
            icon={faGlobe}
            size="lg"
            className="globe"
          ></FontAwesomeIcon>
        </button>
        <button
          onClick={() => {
            share(data?.data?.url, data?.data?.name, data?.data?.address);
          }}
        >
          <FontAwesomeIcon
            icon={faShare}
            size="lg"
            className="share"
          ></FontAwesomeIcon>
        </button>

        <button
          onClick={() => {
            setLiked(!liked);
            console.log(liked);
          }}
        >
          {!liked ? (
            <FontAwesomeIcon
              icon={faHeartBroken}
              className="like"
              size="lg"
              data-liked={liked}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              className="like"
              size="lg"
              data-liked={liked}
            ></FontAwesomeIcon>
          )}
        </button>
      </div>
    );
  };

  const Image = ({ images, rating, name }) => {
    const image = images[8].getUrl({ maxWidth: 400, maxHeight: 300 });
    setImageSourceUrl(image);
    return (
      <div className="relative">
        <img className="caratula" src={imageSourceUrl} alt={name} />
        <Rating className="rating" starCount={rating}></Rating>
      </div>
    );
  };
  return Object.entries(data?.data).length != 0 ? (
    <>
      <div className="card">
        <Image images={data?.data?.photos} rating={data?.data?.rating} description={data?.data?.name}></Image>
        <p className="descripcion">{data?.data?.name}</p>

        <Street url={data?.data?.url} address={data?.data?.address}></Street>
        <Telephone telephoneNumber={data?.data?.telephone}></Telephone>

        <ShareBar></ShareBar>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Card;
