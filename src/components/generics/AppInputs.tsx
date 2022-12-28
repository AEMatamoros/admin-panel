import { createContext, useContext } from "react";
import { iInputs } from "../../interfaces/generic.interfaces";

const handleFiles = (id: string, e: any, setValue: any) => {
  if (e.target.files[0]) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setValue(`${id}`, reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
};
export function AppLabel() {
  let { label } = useContext(InputContext);
  return (
    <label htmlFor="exampleFormControlInput1">{label || "Example Label"}</label>
  );
}

export function AppInput() {
  let { type, id, placeholder, register, errors, errorMsg, setValue } =
    useContext(InputContext);

  return (
    <>
      {type !== "file" ? (
        <>
          <input
            type={type || "text"}
            className="w-full py-1.5 px-2 outline-none font-normal"
            id={id}
            placeholder={placeholder || "Example Placeholder"}
            {...register}
          />

          {errors && errors[id] && (
            <span className="text-red-600 text-sm font-bold">{errorMsg}</span>
          )}
        </>
      ) : (
        <>
          <input
            type={type || "text"}
            className="w-full py-1.5 px-2 outline-none font-normal"
            id={id}
            placeholder={placeholder || "Example Placeholder"}
            onChange={(e) => {
              if (type === "file") {
                handleFiles(id, e, setValue);
              }
            }}
          />

          {errors && errors[id] && (
            <span className="text-red-600 text-sm font-bold">{errorMsg}</span>
          )}
        </>
      )}
    </>
  );
}
const InputContext = createContext({} as iInputs);

export default function AppInputs({
  id,
  label,
  type,
  placeholder,
  register,
  errors,
  errorMsg,
  children,
  setValue,
}: iInputs) {
  const { Provider } = InputContext;

  return (
    <Provider
      value={{
        id,
        label,
        type,
        placeholder,
        register,
        errors,
        errorMsg,
        setValue,
      }}
    >
      <div className="mb-3 w-full">{children}</div>
    </Provider>
  );
}

AppInputs.Label = AppLabel;
AppInputs.Input = AppInput;
