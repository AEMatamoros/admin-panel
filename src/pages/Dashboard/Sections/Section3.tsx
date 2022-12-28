import React from "react";
import { iControls } from "../../../interfaces/generic.interfaces";
import { useCreateForm } from "../../../hooks";

export default function Section1() {
  let LoginFormValuesInit: iControls[] = [
    {
      controlOptions: {
        controlType: "input",
        type: "text",
        placeholder: "Ingresa tu nombre de usuario",
      },
      label: "Usuario",
      id: "idUsuario",
      required: false,
      errorMsg: "El usuario es requerido",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "password",
        placeholder: "Ingresa tu contraseña",
      },
      label: "Contraseña",
      id: "idContrasena",
      required: false,
      errorMsg: "La contraseña es requerida",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "range",
        placeholder: "Ingresa un Rango",
      },
      label: "Rango",
      id: "idRango",
      required: false,
      errorMsg: "Rango requerido",
      size: "half",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "color",
        placeholder: "Selecciona un color",
      },
      label: "Color",
      id: "idColor",
      required: false,
      errorMsg: "Color Requerido",
      size: "half",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "number",
        placeholder: "Selecciona un valor",
      },
      label: "Valor",
      id: "idvalor",
      required: false,
      errorMsg: "valor requerido",
      size: "small",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "date",
        placeholder: "Selecciona una fecha",
      },
      label: "Fecha",
      id: "idFecha",
      required: false,
      errorMsg: "Fecha Requerido",
      size: "small",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "datetime-local",
        placeholder: "Selecciona una fecha y hora",
      },
      label: "Fecha y Hora",
      id: "idFechaHora",
      required: false,
      errorMsg: "Fecha y Hora Requerido",
      size: "small",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "month",
        placeholder: "Selecciona un mes",
      },
      label: "Mes",
      id: "idmes",
      required: false,
      errorMsg: "Mes requerido",
      size: "small",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "week",
        placeholder: "Selecciona una semana",
      },
      label: "Semana",
      id: "idSemana",
      required: false,
      errorMsg: "Semana requerido",
      size: "small",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "time",
        placeholder: "Seleccionr hora",
      },
      label: "Hora",
      id: "idHora",
      required: false,
      errorMsg: "Hora requerido",
      size: "small",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "email",
        placeholder: "Email",
      },
      label: "Email",
      id: "idEmail",
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      errorMsg: "Ingrese un Email o verifique su formato",
      size: "full",
    },
    {
      controlOptions: {
        controlType: "input",
        type: "file",
      },
      label: "Archivo",
      id: "idArchivo",
      errorMsg: "Selecciona un archivo",
      size: "full",
      required: false,
    },
    {
      controlOptions: {
        controlType: "select",
        defaultDisabled: "Seleccionar",
        options: [
          { name: "Opcion 1", value: "1" },
          { name: "Opcion 2", value: "2" },
          { name: "Opcion 3", value: "3" },
        ],
      },
      label: "Opciones",
      id: "idOpciones",
      errorMsg: "Selecciona un a opcion",
      size: "full",
      required: false,
    },
    {
      controlOptions: {
        controlType: "checkbox",
        options: [
          { name: "Opcion 1", value: "1" },
          { name: "Opcion 2", value: "2" },
          { name: "Opcion 3", value: "3" },
        ],
      },
      label: "Opciones 2",
      id: "idOpciones2Check",
      errorMsg: "Selecciona una opcion",
      size: "full",
      required: false,
    },
    {
      controlOptions: {
        controlType: "radio",
        options: [
          { name: "Opcion 1", value: "1" },
          { name: "Opcion 2", value: "2" },
          { name: "Opcion 3", value: "3" },
        ],
      },
      label: "Opciones 3",
      id: "idRadio",
      errorMsg: "Selecciona una opcion",
      size: "full",
      required: true,
    },
  ];
  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  const { generatedForm } = useCreateForm(
    LoginFormValuesInit,
    onSubmit,
    "Formulario de  Prueba",
    "Submit"
  );

  return (
    <>
      {/* Inner Bar */}
      <div className="w-full border-b-2 border-gray-400">
        <h5 className="m-0 p-0 text-gray-600">Example Section Dinamic Forms</h5>
        {generatedForm}
      </div>
    </>
  );
}
