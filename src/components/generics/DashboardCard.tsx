import React from "react";
export default function DashboardCard({
  width,
  icon,
  text,
  porcentage,
  color,
}: {
  width: string;
  icon?: string;
  text?: string;
  porcentage: number;
  color: string;
}) {
  return (
    <div
      className="flex  mt-2 cursor-pointer trasnform hover:scale-105 ease-out duration-150 p-0 border border-gray-200 rounded-md"
      style={{ width: width }}
    >
      <div className="flex justify-center items-center md:flex-row md:max-w-xl rounded-lg bg-white hover:shadow-lg  pl-2">
        <i
          className={`h-12 w-12 text-${color}-400 fa-3x  ${
            icon || "fa-solid fa-house"
          }`}
        />
        <p className="p-4 text-gray-800 text-sm ">
          {text ||
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et illo
             quae nemo labore consequuntur ratione natus`}
        </p>
        <i
          className={`fa-2x  bg-green-400 text-white h-full w-full text-center flex justify-center items-center`}
        >
          {porcentage}%
        </i>
      </div>
    </div>
  );
}
