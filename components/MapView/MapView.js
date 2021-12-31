import React from "react";
import classes from "./MapView.module.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MapView = (props) => {
  return (
    <div className={classes.map}>
      <Map
        google={props.google}
        zoom={15}
        initialCenter={{
          lat: 34.003989,
          lng: -118.486563,
        }}
        styles={[
          {
            stylers: [
              {
                saturation: -100,
              },
            ],
          },
        ]}
      >
        <Marker />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapView);
