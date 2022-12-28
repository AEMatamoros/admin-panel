import logo from '../../assets/img/logo_banco_single_white.svg'
import { useAlert, useCreateForm } from '../../hooks'
import { iControls } from '../../interfaces/generic.interfaces'
import { iLogin } from '../../interfaces'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const navigate = useNavigate()

  let { genericAlert } = useAlert()
  const onLogin = async (data: iLogin) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}auth/signin`,
        data,
      )
      sessionStorage.setItem(
        'portfolioadminpaneluser',
        JSON.stringify(response.data),
      )
      navigate('/Dashboard', { replace: true })
    } catch (error) {
      genericAlert(
        `Acceso Denegado`,
        'warning',
        '<p>Verifica tus credencuiales de acceso</p>',
        false,
        false,
        false,
        'Entendido',
        '',
        '',
        'Thumbs',
        'gray',
      )
        .then((res) => console.log('Delete'))
        .catch((err) => console.log('err'))

      console.log(error)
    }
  }

  let LoginFormValuesInit: iControls[] = [
    {
      controlOptions: {
        controlType: 'input',
        type: 'text',
        placeholder: 'Ingresa tu nombre de usuario',
      },
      label: 'Usuario',
      id: 'username',
      required: true,
      errorMsg: 'El usuario es requerido',
    },
    {
      controlOptions: {
        controlType: 'input',
        type: 'password',
        placeholder: 'Ingresa tu contraseña',
      },
      label: 'Contraseña',
      id: 'password',
      required: true,
      errorMsg: 'La contraseña es requerida',
    },
  ]

  const { generatedForm } = useCreateForm(
    LoginFormValuesInit,
    onLogin,
    'Inicio de Sesión',
    'Iniciar',
  )

  return (
    <div className="main-container flex justify-center items-center main-bg-img flex-col">
      <i className="fa-brands fa-font-awesome fa-2x text-white"></i>
      <span className="text-center w-full font-bold text-white mb-2">
        Panel de Administracion - PORTFOLIO
      </span>
      <div className="sm:w-full lg:w-2/12">{generatedForm}</div>
    </div>
  )
}
