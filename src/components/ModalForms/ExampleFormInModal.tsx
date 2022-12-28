import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AppInputs } from '..'
import { useToUpdate } from '../../hooks'
interface iProps {
  firstName?: string
  lastName?: string
}

export default function ExampleFormInModal() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm()

  let { toUpdate, reset } = useToUpdate()
  useEffect(() => {
    console.log(!!toUpdate.firstName)
    !!toUpdate.firstName && setValue('firstName', toUpdate.firstName)
    !!toUpdate.lastName && setValue('lastName', toUpdate.lastName)
    return () => {
      reset()
    }
  }, [toUpdate])

  const onLogin = (data: any) => alert(JSON.stringify(data))
  return (
    <form className="bg-white w-full py-4" onSubmit={handleSubmit(onLogin)}>
      <AppInputs
        label="Nombre"
        type="text"
        placeholder="Ingrese su nombreo"
        register={{ ...register('firstName', { required: true }) }}
        errors={errors.firstName}
        errorMsg="Este campo es requerido"
        id="firstName"
      >
        <AppInputs.Label></AppInputs.Label>
        <AppInputs.Input></AppInputs.Input>
      </AppInputs>
      <AppInputs
        label="Apellido"
        type="text"
        placeholder="Ingrese su apellido"
        register={{ ...register('lastName', { required: true }) }}
        errors={errors.lastName}
        errorMsg="Este campo es requerido"
        id="contrasena"
      >
        <AppInputs.Label></AppInputs.Label>
        <AppInputs.Input></AppInputs.Input>
      </AppInputs>
      <button type="submit" className="btn-app w-full">
        Iniciar
      </button>
    </form>
  )
}
