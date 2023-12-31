"use client";
import MapIcon from "./map_icon";
import { ModalProvider } from "./ModalContext";
import CoffeeMap from "./CoffeeMap";
import Modal from "./Modal";
import RepoButton from "./RepoButton";

export default function Home() {
  return (
    <ModalProvider>
      <main className="flex flex-col min-h-screen px-24 py-14 md:py-8 text-hsr-dark">
        <div className="z-10 w-full max-w-4xl text-sm lg:flex">
          <div className="flex space-y-3">
            <span>
              <MapIcon width="50%" />
            </span>
            <div className="flex flex-col">
              <span className="text-2xl">Navigation</span>
              <span className="text-3xl text-hsr-light drop-shadow-[0.5px_0.5px_0_rgba(0,0,0,0.8)] font-medium">
                Earth
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-[75vh] my-10 md:my-2 grow">
          <CoffeeMap />
          <RepoButton />
          <Modal />
        </div>
        <span className="text-xl font-medium text-hsr-light drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">
          UID:6133823555
        </span>
      </main>
    </ModalProvider>
  );
}
