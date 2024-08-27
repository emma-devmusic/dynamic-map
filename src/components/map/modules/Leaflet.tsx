'use client'

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { pinIcon } from "./icon";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const Leaflet = () => {

    
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{
                height: '500px',
                width: '100%',
                maxWidth: '900px'
            }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} icon={pinIcon}>
                <Popup>
                    Este es un hermoso lugar.
                </Popup>
            </Marker>

            <Marker position={[40.505, -0.09]} icon={pinIcon}>
                <Popup>
                    2do Lugar
                </Popup>
            </Marker>

            <Marker position={[51.505, -30]} icon={pinIcon}>
                <Popup>
                    3er Lugar
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Leaflet;