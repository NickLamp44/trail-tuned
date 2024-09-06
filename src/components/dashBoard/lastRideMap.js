import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RideMap = ({ ride }) => {
  const { date, duration, distance, averageSpeed, routeCoordinates } = ride;

  // Convert duration from seconds to minutes and seconds
  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };

  // Format date to a readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="ride-container">
      {/* Map Section */}
      <MapContainer center={routeCoordinates[0]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={routeCoordinates} />
      </MapContainer>

      {/* Ride Details Section */}
      <div className="ride-details">
        <h3>Ride Details</h3>
        <p>
          <strong>Date:</strong> {formatDate(date)}
        </p>
        <p>
          <strong>Duration:</strong> {formatDuration(duration)}
        </p>
        <p>
          <strong>Distance:</strong> {distance.toFixed(2)} km
        </p>
        <p>
          <strong>Avg Speed:</strong> {averageSpeed.toFixed(2)} km/h
        </p>
      </div>
    </div>
  );
};

export default RideMap;
