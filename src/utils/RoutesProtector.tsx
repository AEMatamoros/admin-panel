import { Outlet, Navigate } from 'react-router-dom'
import { logInResponse } from '../db/loginResponse'

export default function RoutesProtector(props: any) {
  let canContinue = false
  let user = JSON.parse(
    sessionStorage.getItem('portfolioadminpaneluser') || '{}',
  )
  canContinue = !!user._id
  return canContinue ? <Outlet /> : <Navigate to="/login" />
}
