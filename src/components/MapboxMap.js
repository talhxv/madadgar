import React, { useState, useEffect } from "react";
import { Map } from "react-map-gl";

const MapboxMap = () => {
    const AccessToken = "pk.eyJ1IjoidHhsaGEiLCJhIjoiY2xxanNzNjB0MjV3MjJrcnFsYnV0aHBrMSJ9.QQlxdGir8iUl5f5PbW_ouQ";
    const [viewport, setViewport] = useState({
        latitude: 33.715541,
        longitude: 73.028654,
        zoom: 14,
        width: "60vw",
        height: "60vh",
    });

    useEffect(() => {
        // Fetch the user's current location using Geolocation API
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setViewport((prevViewport) => ({
                    ...prevViewport,
                    latitude,
                    longitude,
                }));
            },
            (error) => {
                console.error("Error getting user's location:", error);
            }
        );
    }, []); // Empty dependency array ensures the effect runs once when the component mounts

    return (
        <div id="map">
            <Map
                mapboxAccessToken={AccessToken}
                initialViewState={viewport}
                mapStyle="mapbox://styles/mapbox/streets-v9?access_token=pk.eyJ1IjoidHhsaGEiLCJhIjoiY2xxanNzNjB0MjV3MjJrcnFsYnV0aHBrMSJ9.QQlxdGir8iUl5f5PbW_ouQ"
            />
        </div>
    );
};

export default MapboxMap;
