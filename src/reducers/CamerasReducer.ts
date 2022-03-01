import { CamerasActions, ContextState } from '../interfaces'

const CamerasReducer = (state: ContextState, action: CamerasActions): ContextState => {
  switch (action.type) {
    case 'SET_CAMERAS':
      return {
        ...state,
        loading: false,
        cameras: action.payload
      }

    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case 'ADD_CAMERA':
      return {
        ...state,
        cameras: [...state.cameras, action.payload]
      }

    case 'DELETE_CAMERA':
      return {
        ...state,
        cameras: state.cameras.filter(camera => camera._id !== action.payload)
      }

    case 'EDIT_CAMERA':
      const index = state.cameras.findIndex(item => item._id === action.payload._id)

      return {
        ...state,
        cameras: state.cameras.map(camera => {
          if(camera._id === action.payload._id) {
            Object.assign(state.cameras[index], action.payload)

            return {
              ...camera
            }
          }

          return camera
        })
      }

    default:
      return state
  }
}

export default CamerasReducer
