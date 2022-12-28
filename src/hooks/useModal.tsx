import { Fragment, ReactElement, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export interface iProps {
  modalHeader: string
  modalBody: ReactElement | ReactElement[]
}

export default function useModal({ modalHeader, modalBody }: iProps) {
  const handleModalShow = () => {
    setOpen(!open)
  }

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  return {
    modal: (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div
            className="flex items-end justify-center min-h-screen pt-4  pb-20 text-center sm:block
         sm:p-0"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0 bg-opacity-75 transition-opacity"
                style={{ backgroundColor: 'rgba(0,0,0,.3)' }}
              />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block align-bottom bg-white 
               text-left 
            overflow-hidden shadow-xl 
            transform transition-all 
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              >
                <div className="w-full ">
                  <div className="sm:flex sm:items-start w-full">
                    <div className="mt-3 text-left sm:mt-0 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium  px-4 bg-indigo-400 text-white"
                      >
                        {modalHeader}
                      </Dialog.Title>
                      <div className="mt-2 p-4">{modalBody}</div>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center
                  rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700
                    hover:bg-gray-50 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    <FontAwesomeIcon icon={faClose}></FontAwesomeIcon> 
                    Cerrar
                  </button>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    ),
    handleModalShow,
  }
}
