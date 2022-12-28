import React, { useEffect } from "react";
import { useAlert, useToUpdate } from "../../hooks";

export function CreateForm() {
  return <div>CreateForm</div>;
}

export function UpdateForm() {
  let { toUpdate, reset } = useToUpdate();
  useEffect(() => {
    // !!toUpdate.firstName && setValue("firstName", toUpdate.firstName);
    // !!toUpdate.lastName && setValue("lastName", toUpdate.lastName);
    return () => {
      reset();
    };
  }, [toUpdate]);
  return (
    <div>
      UpdateForm asdjfkl asdjflkasj
      <p>{JSON.stringify(toUpdate)}</p>
    </div>
  );
}

export default function ExampleCRUD() {
  let { genericAlert } = useAlert();

  let handleDeleteAlert = (id: string) => {
    genericAlert(
      `DELETE ${id}`,
      "warning",
      "<p>Delete Alert</p>",
      true,
      false,
      true,
      "Confirmar",
      "ok",
      "Cancelar",
      "Thumbs",
      "#d33"
    )
      .then((res) => console.log("Delete"))
      .catch((err) => console.log("err"));
  };

  return {
    CreateForm: <CreateForm></CreateForm>,
    UpdateForm: <UpdateForm></UpdateForm>,
    handleDeleteAlert,
  };
}
