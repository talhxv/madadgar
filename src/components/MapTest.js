import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'tailwindcss/tailwind.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const MapboxMap = () => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidHhsaGEiLCJhIjoiY2xxanNzNjB0MjV3MjJrcnFsYnV0aHBrMSJ9.QQlxdGir8iUl5f5PbW_ouQ';


        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/txlha/clpnx3cft00zv01p92hpw00xo',
            center: [73.0479, 33.6844],
            zoom: 14,
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
                geolocateButton.style.bottom = 'calc(20% + 30px)';
                geolocateButton.style.left = '50%';
                geolocateButton.style.transform = 'translateX(-50%)';

            }
        });


        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
        });

        map.addControl(geocoder);


        return () => map.remove();
    }, []);

    return <div className="absolute top-0 bottom-0 w-full"
                id="map"></div>;
};

export default MapboxMap;