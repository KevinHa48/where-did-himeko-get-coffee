"use client";
import { useEffect, useState } from "react";
import { Map } from "leaflet";

const Zoom = ({ map }: { map: Map }) => {
  // modify with props later to handle any map
  const MIN_ZOOM = map.getMinZoom();
  const MAX_ZOOM = map.getMaxZoom();
  const [sliderValue, setSliderValue] = useState(map.getZoom());

  useEffect(() => {
    // const handleZoomEnd = () => {
    //   const zoom = map.getZoom();
    //   if (zoom !== sliderValue) {
    //     console.log("retard");
    //     setSliderValue(zoom);
    //   }
    // };

    map.on("zoom", () => {
      setSliderValue(map.getZoom());
    });
    return () => {
      map.off("zoom");
    };
  }, []);

  // useEffect(() => {
  //   map.setZoom(sliderValue);
  // }, [sliderValue]);

  const handleSlideOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newZoomValue = parseInt(event.target.value);
    map.setZoom(newZoomValue);
    setSliderValue(newZoomValue);
  };

  const decreaseZoom = () => {
    if (sliderValue !== MIN_ZOOM) {
      const newSliderValue = sliderValue - 1;
      map.setZoom(newSliderValue);
    }
  };

  const increaseZoom = () => {
    if (sliderValue !== MAX_ZOOM) {
      const newSliderValue = sliderValue + 1;
      map.setZoom(newSliderValue);
    }
  };

  return (
    <div className="flex items-center bg-hsr-dark w-fit rounded-full p-1 font-medium">
      <button
        onClick={decreaseZoom}
        className="rounded-full w-8 h-8 bg-hsr-light m-1"
      >
        —
      </button>
      <input
        className="mx-4"
        type="range"
        min={MIN_ZOOM}
        max={MAX_ZOOM}
        step="1"
        value={sliderValue}
        onChange={handleSlideOnChange}
      />
      <button
        onClick={increaseZoom}
        className="rounded-full w-8 h-8 bg-hsr-light m-1 text-2xl"
      >
        +
      </button>
    </div>
  );
};
export default Zoom;
