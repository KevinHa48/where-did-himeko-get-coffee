"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useContext, useState, useMemo, use, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { LatLngTuple, Map } from "leaflet";
import { ModalContext } from "./ModalContext";
import Zoom from "./zoom";
import SpaceAnchor from "../public/space_anchor.png";
import { Icon } from "leaflet";
import data from "../data/locations.json";

const myIcon = new Icon({
  iconUrl: SpaceAnchor.src,
  iconSize: [40, 40],
});

type iLocation = {
  id: string;
  location: string;
  coffee_shops: {
    name: string;
    description: string;
    location: number[];
    site_url: string;
  }[];
  leaflet_map_url: string;
};

const CoffeeMap = () => {
  const { state, dispatch } = useContext(ModalContext);
  const [map, setMap] = useState<Map | null>(null);
  const [currentMap, setCurrentMap] = useState<iLocation>();

  useEffect(() => {
    const locations = data.locations.find(
      (item) => item.location === state.current_location
    );
    if (locations && locations.coffee_shops && locations.leaflet_map_url) {
      console.log("hit");
      setCurrentMap(locations);
    }
  }, [state]);

  const displayMap = useMemo(
    () => (
      <MapContainer
        minZoom={0}
        maxZoom={4}
        center={[0, 0]}
        zoom={2}
        style={{ width: "100%", height: "100%", background: "none" }}
        attributionControl={false}
        zoomControl={false}
        ref={setMap}
      >
        <TileLayer
          noWrap={true}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={currentMap?.leaflet_map_url || ""}
        />
        {currentMap?.coffee_shops.map((shop) => {
          return (
            <Marker
              key={shop.name}
              eventHandlers={{
                click: () => {
                  dispatch({
                    view: "shop",
                    title: shop.name,
                    description: shop.description,
                  });
                },
              }}
              icon={myIcon}
              position={shop.location as LatLngTuple}
            ></Marker>
          );
        })}
      </MapContainer>
    ),
    [currentMap]
  );
  return (
    <div className="flex flex-col w-3/4 items-center">
      {displayMap}

      {map ? <Zoom map={map} /> : null}
    </div>
  );
};

export default CoffeeMap;
