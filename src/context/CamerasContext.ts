import { createContext, Dispatch } from 'react'
import { CamerasActions, ContextState } from '../interfaces'

interface CamerasContextI {
  state: ContextState
  dispatch: Dispatch<CamerasActions>
}

const CamerasContext = createContext<CamerasContextI>({} as CamerasContextI)

export default CamerasContext
