import React from 'react'
import { useForm } from 'react-hook-form'
import { AppInputs, AppSelect, AppCheckbox, AppRadio } from '../components'
import { iControls } from '../interfaces/generic.interfaces'

export default function useCreateForm(
  controls: iControls[],
  submitAction: (data: any) => void,
  formHeader: string,
  submitButtonText: string,
) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm()

  return {
    handleSubmit,
    setValue,
    generatedForm: (
      <>
        <form
          className="bg-white w-full p-8 py-10 border-2 shadow-lg flex flex-row flex-wrap"
          onSubmit={handleSubmit(submitAction)}
        >
          <h4 className="text-center w-full">{formHeader}</h4>
          {controls.map((control: any, index) => {
            return (
              <div
                key={index}
                className={`${
                  !!control.size && control.size != 'full'
                    ? control.size == 'half'
                      ? 'w-2/4'
                      : 'w-1/3'
                    : 'w-full'
                } p-1`}
              >
                {control.controlOptions.controlType === 'input' && (
                  <AppInputs
                    label={control.label}
                    type={control.controlOptions.type}
                    placeholder={control.controlOptions.placeholder}
                    register={{
                      ...register(control.id, {
                        required: control.required,
                        pattern: control.pattern,
                      }),
                    }}
                    errors={errors}
                    errorMsg={control.errorMsg}
                    id={control.id}
                    setValue={setValue}
                  >
                    <AppInputs.Label></AppInputs.Label>
                    <AppInputs.Input></AppInputs.Input>
                  </AppInputs>
                )}
                {control.controlOptions.controlType === 'select' && (
                  <AppSelect
                    register={{
                      ...register(control.id, {
                        required: control.required,
                        pattern: control.pattern,
                      }),
                    }}
                    defaultDisabled={control.controlOptions.defaultDisabled}
                    errors={errors}
                    errorMsg={control.errorMsg}
                    id={control.id}
                    label={control.label}
                    setValue={setValue}
                    options={control.controlOptions.options}
                  ></AppSelect>
                )}
                {control.controlOptions.controlType === 'checkbox' && (
                  <AppCheckbox
                    register={{
                      ...register(control.id, {
                        required: control.required,
                        pattern: control.pattern,
                      }),
                    }}
                    errors={errors}
                    errorMsg={control.errorMsg}
                    id={control.id}
                    label={control.label}
                    setValue={setValue}
                    options={control.controlOptions.options}
                  ></AppCheckbox>
                )}
                {control.controlOptions.controlType === 'radio' && (
                  <AppRadio
                    register={{
                      ...register(control.id, {
                        required: control.required,
                        pattern: control.pattern,
                      }),
                    }}
                    errors={errors}
                    errorMsg={control.errorMsg}
                    id={control.id}
                    label={control.label}
                    setValue={setValue}
                    options={control.controlOptions.options}
                  ></AppRadio>
                )}
              </div>
            )
          })}
          <button
            type="submit"
            className="btn-app w-full mt-4"
            title="Finalizar"
          >
            {submitButtonText}
          </button>
        </form>
      </>
    ),
  }
}
