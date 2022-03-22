export interface Camera {
  _id: string
  name: string
  brand: string
  model: string
  price: number | string
  connection_type: 'WIFI' | 'ETHERNET' | 'IP'
  image: string
  createdAt?: string
  __v: number
}

export type Cameras = Array<Camera>
export type CameraDTO = Omit<Camera, '_id' | 'image' | 'createdAt' | '__v'>

export interface ContextState {
  cameras: Cameras
  loading: boolean
  error: string | null
}

export type CamerasActions =
  | { type: 'SET_CAMERAS', payload: Cameras }
  | { type: 'SET_LOADING', payload: boolean }
  | { type: 'SET_ERROR', payload: string }
  | { type: 'ADD_CAMERA', payload: Camera }
  | { type: 'EDIT_CAMERA', payload: Camera }
  | { type: 'DELETE_CAMERA', payload: string }
