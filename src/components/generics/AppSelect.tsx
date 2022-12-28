import { createContext, useContext } from "react";
import { iSelect } from "../../interfaces/generic.interfaces";

export default function AppSelect({
  id,
  label,
  defaultDisabled,
  register,
  errors,
  errorMsg,
  setValue,
  options,
}: iSelect) {
  return (
    <>
      <label htmlFor="exampleFormControlInput1">
        {label || "Example Label"}
      </label>
      <select
        className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        id={id}
        {...register}
        defaultValue={""}
      >
        {!!defaultDisabled && (
          <option disabled value="">
            {defaultDisabled}
          </option>
        )}
        {options.map(({ name, value }, index) => (
          <option value={`${value}`} key={`${index}`}>
            {name}
          </option>
        ))}
      </select>
      {errors && errors[id] && (
        <span className="text-red-900 text-sm font-bold">{errorMsg}</span>
      )}
    </>
  );
}
