import { FC, useReducer, useEffect } from 'react'
import axios from 'axios'
import CamerasContext from './CamerasContext'
import CamerasReducer from '../reducers/CamerasReducer'
import { Cameras, ContextState } from '../interfaces'
import { API_URL } from '../utils/base-url'

const INIT_STATE: ContextState = {
  cameras: [],
  loading: true,
  error: null
}

const CamerasProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(CamerasReducer, INIT_STATE)

  const getCameras = async () => {
    try {
      const { data } = await axios.get<Cameras>(API_URL)
      dispatch({ type: 'SET_CAMERAS', payload: data })
    } catch (e) {
      dispatch({ type: 'SET_ERROR', payload: 'Something went wrong.' })
      console.error(e)
    }
  }

  useEffect(() => {
    getCameras()
  }, [])

  return (
    <CamerasContext.Provider value={{ state, dispatch }}>
      {children}
    </CamerasContext.Provider>
  )
}

export default CamerasProvider
