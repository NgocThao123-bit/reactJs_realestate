import { MapContainer, TileLayer } from 'react-leaflet';
import React, { useRef, useState } from 'react'
// import ReactMapGL from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import osm from './provider';
import "leaflet/dist/leaflet.css";


export const MapGl = () => {

    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 })
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    // const [viewPort, setViewPort] = useState({
    //     width: "80vw",
    //     height: "50vh",
    //     latitude: 21.0244246,
    //     longitude: 105.7938072,
    //     zoom: 16
    // });
    return (
        // <ReactMapGL
        //     {...viewPort}

        //     onViewPortChange={(viewPort) => setViewPort(viewPort)}
        //     mapboxApiAccessToken="pk.eyJ1IjoibmdvdGhhbyIsImEiOiJjbDJrOWJwajYwMjFvM2twY2tqdjJ1bjAwIn0.tG1mIDRZZyigTDgeIR_EMQ"
        //     mapStyle="mapbox://styles/mapbox/streets-v11"
        // >

        // </ReactMapGL>

        <MapContainer
            center={center}
            zoom={ZOOM_LEVEL}
            ref = {mapRef}
        >
            <TileLayer
                url={osm.maptiler.url}
                // attribution={osm.maptiler.attriibution}
            />

        </MapContainer>
    )
}
