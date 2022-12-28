import { createContext, useContext } from 'react'
import { iCard } from '../../interfaces/generic.interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExpand,
  faRotate,
  faCompress,
} from '@fortawesome/free-solid-svg-icons'

//Header
function Header() {
  let { id, title, subTitle } = useContext(CardContext)

  const OpenFullScreen = () => {
    let element = document.getElementById(id)
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      element?.requestFullscreen()
    }
  }

  return (
    <div className="grid grid-cols-2 bg-primary rounded-t-md text-white border-b-2 bg-app">
      <h2>{title}</h2>
      {subTitle != null ? <h5>{subTitle}</h5> : null}
      <div>
        <button
          type="button"
          className="float-right rounded-lg border border-gray-300 bg-white p-1 m-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={OpenFullScreen}
        >
          <FontAwesomeIcon
            icon={document.fullscreenElement ? faExpand : faCompress}
          />
        </button>
        <button
          type="button"
          className="float-right rounded-lg border border-gray-300 bg-white p-1 my-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <FontAwesomeIcon spin={false} icon={faRotate} />
        </button>
      </div>
    </div>
  )
}

//Content
/* function Content({children}:iCard) {
  let {cols} =  useContext(CardContext);
  return <div className={`p-4 grid grid-cols-${cols}`}>{children}</div>;
}
 */
//Footer
function Footer() {
  let { footer } = useContext(CardContext)
  return (
    <div className="bg-primary rounded-b-md text-white border-b-2 ">
      <h4>{footer}</h4>
    </div>
  )
}

//Component principal
const CardContext = createContext({} as iCard)
export default function AppCard({
  id,
  cols,
  title,
  subTitle,
  footer,
  children,
}: iCard) {
  const { Provider } = CardContext

  return (
    <Provider value={{ id, cols, title, subTitle, footer }}>
      <div className="p-4">
        <div id={id} className="bg-white rounded-md overflow-auto ">
          <Header />
          <div className={`p-4 grid grid-cols-${cols}`}>{children}</div>
          <Footer />
        </div>
      </div>
    </Provider>
  )
}

AppCard.Footer = Footer
