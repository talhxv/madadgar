import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'tailwindcss/tailwind.css';

const MapboxMaptwo = () => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidHhsaGEiLCJhIjoiY2xxanNzNjB0MjV3MjJrcnFsYnV0aHBrMSJ9.QQlxdGir8iUl5f5PbW_ouQ';

        // Create a map centered at an initial location
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/txlha/clqmx6wpt00pl01o9hz94djpm', // style URL
            center: [73.0479, 33.6844], // Default center in case geolocation fails
            zoom: 14, // starting zoom
            attributionControl: false,
        });

        // Add geolocate control to the map.
        const geolocateControl = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: true,
            showUserHeading: true,
        });

        map.addControl(geolocateControl);

        // Add a listener for the geolocate control button
        geolocateControl.on('geolocate', (event) => {
            const geolocateButton = document.querySelector('.mapboxgl-ctrl-geolocate');
            if (geolocateButton) {
                // Add custom styles
                geolocateButton.style.backgroundColor = '#4CAF50'; // Change the background color
                geolocateButton.style.color = '#fff'; // Change the text color
                geolocateButton.style.borderRadius = '200px'; // Add border-radius
                geolocateButton.style.position = 'absolute';
                geolocateButton.style.bottom = '20px'; // Adjust the bottom position as needed
                geolocateButton.style.left = '50%'; // Center horizontally
                geolocateButton.style.transform = 'translateX(-50%)'; // Center horizontally
                // Add more styles as needed
            }
        });

        // Clean up on unmount
        return () => map.remove();
    }, []); // Empty dependency array ensures the effect runs once when the component mounts

    return <div className="absolute top-0 bottom-0 w-full" id="map"></div>;
};

export default MapboxMaptwo;
