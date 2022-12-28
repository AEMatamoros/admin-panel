import { appRoutes } from '../../routes/routes'

import { Link } from 'react-router-dom'

function SideItem({
  name,
  to,
  icon,
  showText,
}: {
  name: string
  to: string
  icon?: string
  showText?: boolean
}) {
  return (
    <div
      className="flex w-full items-center justify-center rounded-md hover:bg-app-hover px-2"
      title={name}
    >
      <Link
        to={`${to}`}
        className={`flex w-full cursor-pointer items-center rounded-lg pr-4 py-2 transition duration-300 ease-in-out ${
          !showText && 'justify-center px-3'
        }`}
      >
        <i className={`${icon} ${!showText && 'text-center w-full'}`}></i>
        <span
          className={`${
            showText && 'mx-2'
          } font-bold transition-all duration-300 overflow-hidden`}
          style={{ fontSize: `${!showText ? '0' : '1rem'}` }}
        >
          {name}
        </span>
      </Link>
    </div>
  )
}

interface iatr {
  width: number
  show: boolean
}
interface iProps {
  atr: iatr
  sidebarState: () => void
}
export default function Sidebar({ atr, sidebarState }: iProps) {
  return (
    <div
      // h-screen
      className="relative flex flex-col justify-between bg-app text-white transition-all duration-300"
      style={{
        width: `${atr.show ? atr.width : '5'}vw`,
        // marginLeft: atr.show ? 0 : `-${atr.width}vw`,
        minHeight: '100vh',
        padding: `${atr.show ? '0 10' : '0 2'}px`,
      }}
    >
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center justify-center  p-4 ">
            <i className="fa-brands fa-font-awesome fa-2x"></i>
            {atr.show && (
              <h4 className="text-center font-bold p-0 m-0">
                Modulo de Administracion - Portfolio
              </h4>
            )}
          </div>
          <hr className="w-full text-white" />
        </div>
        {appRoutes.map(({ nested }, index) => {
          return (
            <div
              key={index}
              className={`${
                !atr.show && 'flex flex-col justify-center'
              } w-full`}
            >
              {nested?.map(({ name, to, icon }, routeindex) => {
                return (
                  <SideItem
                    name={name}
                    to={to}
                    key={routeindex}
                    icon={icon}
                    showText={atr.show}
                  ></SideItem>
                )
              })}
            </div>
          )
        })}
        <hr className="w-full text-white mt-6" />
        <div className="w-full flex justify-center my-4">
          <div
            className="overflow-hidden relative w-10 h-10  rounded-full bg-custom-transparent cursor-pointer flex justify-center items-center text-white "
            onClick={sidebarState}
          >
            {atr.show ? (
              <i className="fa-solid fa-chevron-left "></i>
            ) : (
              <i className="fa-solid fa-chevron-right"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
