import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'tailwindcss/tailwind.css';

const MapboxMaptwo = () => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidHhsaGEiLCJhIjoiY2xxanNzNjB0MjV3MjJrcnFsYnV0aHBrMSJ9.QQlxdGir8iUl5f5PbW_ouQ';


        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/txlha/clqmx6wpt00pl01o9hz94djpm',
            center: [73.0479, 33.6844],
            zoom: 14, // starting zoom
            attributionControl: false,
        });


        const geolocateControl = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: true,
            showUserHeading: true,
        });

        map.addControl(geolocateControl);


        geolocateControl.on('geolocate', (event) => {
            const geolocateButton = document.querySelector('.mapboxgl-ctrl-geolocate');
            if (geolocateButton) {
                geolocateButton.style.backgroundColor = '#4CAF50';
                geolocateButton.style.color = '#fff';
                geolocateButton.style.borderRadius = '200px';
                geolocateButton.style.position = 'absolute';
                geolocateButton.style.bottom = '20px';
                geolocateButton.style.left = '50%';
                geolocateButton.style.transform = 'translateX(-50%)';

            }
        });

        return () => map.remove();
    }, []);
    return <div className="absolute top-0 bottom-0 w-full"
                id="map"></div>;
};

export default MapboxMaptwo;
