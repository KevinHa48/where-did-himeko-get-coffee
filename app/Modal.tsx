import { useContext, useState } from "react";
import { ModalContext } from "./ModalContext";

const Modal = () => {
  const { state, dispatch } = useContext(ModalContext);
  const [activeLocation, setActiveLocation] = useState("");

  const handleLocationClick = (location: string) => {
    dispatch({ current_location: location });
    setActiveLocation(location);
  };

  const LocationView = () => {
    return (
      <div className="flex flex-col w-[600px]">
        <div className="flex bg-hsr-dark h-14 items-center justify-center rounded-full box-border mb-6 outline outline-1 outline-hsr-light">
          <span className="text-2xl text-hsr-light">
            Where Did Himeko Get Coffee?
          </span>
        </div>
        <div className="bg-hsr-grey flex flex-col text-hsr-dark font-medium grow">
          <ul className="list-disc list-inside">
            {state.locations.map(({ id, location }) => {
              console.log(location);
              return (
                <li
                  key={location}
                  onClick={() => handleLocationClick(location)}
                  className={`${
                    activeLocation === location ? "active-location-item" : ""
                  } location-item cursor-pointer text-2xl p-10 outline outline-2 outline-transparent  mb-1`}
                >
                  {location}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  const ShopView = () => {
    return (
      <div className="bg-hsr-grey w-[600px] flex flex-col items-center text-hsr-dark font-medium">
        <div className="p-6 w-full bg-hsr-dark">
          <span className="text-hsr-gold text-3xl">{state.title}</span>
        </div>
        <div className="p-6 text-2xl grow leading-10">{state.description}</div>
        <div className="flex bg-hsr-light h-14 w-[90%] items-center justify-center rounded-full box-border mb-4 outline outline-1 outline-offset-[-5px] outline-hsr-grey">
          <a href={state.store_url}>
            <span className="text-2xl">Go to Website</span>
          </a>
        </div>
      </div>
    );
  };
  return state.view === "location" ? <LocationView /> : <ShopView />;
};
export default Modal;
