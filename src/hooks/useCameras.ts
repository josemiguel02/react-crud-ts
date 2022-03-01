import { useContext } from 'react'
import CamerasContext from '../context/CamerasContext'

export const useCameras = () => {
  const { state, dispatch } = useContext(CamerasContext)

  return {
    ...state,
    dispatch
  }
}
