import { Outlet, Navigate } from 'react-router-dom'
import { logInResponse } from '../db/loginResponse'

export default function RoutesProtector(props: any) {
  let canContinue = false
  canContinue = !!logInResponse.id
  return canContinue ? <Outlet /> : <Navigate to="/login" />
}
