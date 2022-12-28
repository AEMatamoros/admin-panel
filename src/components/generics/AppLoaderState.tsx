import React from "react";
import { ClockLoader } from "react-spinners";

export const AppLoaderState = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000079] z-50 duration-300 flex justify-center items-center">
      <ClockLoader color="#fff" loading size={100} speedMultiplier={1} />
    </div>
  );
};
