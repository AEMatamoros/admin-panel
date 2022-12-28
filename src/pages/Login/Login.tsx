import logo from '../../assets/img/logo_banco_single_white.svg'
import { useCreateForm } from '../../hooks'
import { iControls } from '../../interfaces/generic.interfaces'
import { iLogin } from '../../interfaces'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const onLogin = (data: iLogin) => {
    alert(JSON.stringify(data))
    navigate('/Dashboard', { replace: true })
  }

  let LoginFormValuesInit: iControls[] = [
    {
      controlOptions: {
        controlType: 'input',
        type: 'text',
        placeholder: 'Ingresa tu nombre de usuario',
      },
      label: 'Usuario',
      id: 'idUsuario',
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
      id: 'idContrasena',
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
