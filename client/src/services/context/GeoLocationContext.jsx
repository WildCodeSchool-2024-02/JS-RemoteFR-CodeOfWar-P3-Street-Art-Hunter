import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const GeoLocationContext = createContext();

function GeoLocationProvider({ children }) {

    const [ userLocation, setUserLocation] = useState();

    const getSuccesLocation = (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude});
    };
    const getErrorLocation = (error) => {
        console.error("Erreur lors de la récupération des coordonnées", error)
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(getSuccesLocation, getErrorLocation, {
                enableHighAccuracy: true,
                timeout: 8000
          });
        }else{
            console.error("La géolocalisation n'est pas supportée par ce navigateur")
        }
      }, [])

  return (
    <GeoLocationContext.Provider value={userLocation}>
        {children}
    </GeoLocationContext.Provider>
  );
}

GeoLocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GeoLocationProvider, GeoLocationContext };