"use client";

import { ReactNode, useState, useReducer } from "react";
import data from "../data/locations.json";
import { createContext } from "react";
import { init } from "next/dist/compiled/@vercel/og/satori";

type ModalView = "location" | "shop";

type ModalContextType = {
  view: ModalView;
  locations: {
    id: string;
    location: string;
  }[];
  current_location: string;
  title: string;
  description: string;
  store_url: string;
};

const initialModalContextState: ModalContextType = {
  view: "location",
  current_location: "",
  locations: [],
  title: "",
  description: "",
  store_url: "",
};

const reducer = (
  state: ModalContextType,
  action: Partial<ModalContextType>
) => {
  return { ...state, ...action };
};

const ModalContext = createContext<{
  state: ModalContextType;
  dispatch: React.Dispatch<Partial<ModalContextType>>;
}>({ state: initialModalContextState, dispatch: () => null });

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const locationList = data.locations.map(({ id, location }) => {
    return { id: id, location: location };
  });
  console.log(locationList);
  initialModalContextState.locations = locationList;
  const [state, dispatch] = useReducer(reducer, initialModalContextState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
