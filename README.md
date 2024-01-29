# Generador de tarjetas para establecimientos

Selecciona cualquier establecimento y genera una tarjeta con la información más relevante que ofrece la [API Autocomplete de Google](https://developers.google.com/maps/documentation/javascript/place-autocomplete?hl=es-419#javascript).

## Tecnologías

* Vite v.5.0.8
* React JS v.18.2
* SWC
* CSS3

## Librerías

* FontAwesome Icons
* Librería Autocomplete de Google

## Instalación

Clonar el repositorio
    
Obtener tu API Key de Google
    
Crea un archivo que contenga la API Key en el directorio **/constants/constants.js**
    
Dentro del archivo exporta la API Key de esta manera: 
```javascript
export const REACT_APP_GOOGLE_MAPS_KEY = "YOUR API KEY";
```

Ejecutar el proyecto

```sh
npm run dev
```
