import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRightToBracket,
  faArrowCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons'

export interface iProps {
  handleSidebar: () => void
  sidebarState: boolean
}

export default function Navbar({ handleSidebar, sidebarState }: iProps) {
  const [showOptions, setshowOptions] = useState(true)

  const handleOptions = () => {
    setshowOptions(!showOptions)
  }
  const clearUser = () => {
    sessionStorage.clear()
  }
  return (
    <nav
      className="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        p-5
        bg-white
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
        flex-row-reverse
      "
      style={{ height: '80px' }}
    >
      <div>
        <div className="relative inline-block text-left">
          <div>
            <div
              className="overflow-hidden relative w-10 h-10  rounded-full dark:bg-gray-600 cursor-pointer flex justify-center items-center text-white bg-red-500"
              onClick={handleOptions}
            >
              <strong>AM</strong>
            </div>
          </div>

          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
            hidden={showOptions}
          >
            <div className="py-1" role="none">
              <Link to="/">
                <button
                  type="submit"
                  className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-3"
                >
                  <strong onClick={clearUser}>
                    <FontAwesomeIcon icon={faRightToBracket} /> Cerrar Sesion
                  </strong>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative inline-block text-right cursor-pointer">
        {sidebarState ? (
          <FontAwesomeIcon
            className="text-green-400"
            onClick={handleSidebar}
            icon={faArrowCircleLeft}
          />
        ) : (
          <FontAwesomeIcon
            className="text-green-400"
            onClick={handleSidebar}
            icon={faArrowAltCircleRight}
          />
        )}
      </div> */}
    </nav>
  )
}
