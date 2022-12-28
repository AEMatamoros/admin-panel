// Redux
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store/store'
import { setToUpdateRegister } from '../slices/usersSlice'

export default function useToUpdate() {
  const dispatch = useDispatch()

  const handleRegisterToUpdate = (element: any) => {
    dispatch(setToUpdateRegister(element))
  }

  const reset = () => {
    dispatch(setToUpdateRegister({}))
  }

  const toUpdate = useSelector(
    (state: RootState) => state.tables.toUpdateregister,
  )

  return { handleRegisterToUpdate, toUpdate, reset }
}
