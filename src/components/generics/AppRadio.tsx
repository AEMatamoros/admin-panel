import React from "react";
import { iCheck } from "../../interfaces/generic.interfaces";

export default function ({
  id,
  label,
  register,
  errors,
  errorMsg,
  setValue,
  options,
}: iCheck) {
  return (
    <>
      <label htmlFor="exampleFormControlInput1">
        {label || "Example Label"}
      </label>
      <div className="flex justify-start">
        {options.map(({ name, value }, index) => (
          <div className="form-check" key={name}>
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name={id}
              id={`${index}`}
              value={value}
              {...register}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor={id}
            >
              {name}
            </label>
          </div>
        ))}
      </div>
      {errors && errors[id] && (
        <span className="text-red-900 text-sm font-bold">{errorMsg}</span>
      )}
    </>
  );
}
