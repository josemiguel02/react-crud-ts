import axios from 'axios'
import { Camera } from '../interfaces'
import { BASE_URL } from '../utils/base-url'

export const addCamera = async (newCamera: Camera) => {
  const result = { dataCamera: {} as Camera, error: false }

  try {
    const { name, model, brand, connection_type, price } = newCamera

    const { data } = await axios.post(`${BASE_URL}/add`, {
      name,
      model,
      brand,
      price,
      connection_type,
      image:
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/03/mejores-camaras-vigilancia-ip-puedes-comprar-1887273.jpg?itok=9-0Vaxef'
    })

    result.dataCamera = data
  } catch (e) {
    result.error = true
    console.error(e)
  }

  return result
}

export const editCamera = async (id: string, cameraEdited: Camera) => {
  const result = { dataCamera: {} as Camera, error: false }

  const { name, model, brand, connection_type, price } = cameraEdited

  try {
    const { data } = await axios.put(`${BASE_URL}/edit/${id}`, {
      name,
      model,
      brand,
      price,
      connection_type
    })

    result.dataCamera = data
  } catch (e) {
    result.error = true
    console.error(e)
  }

  return result
}

export const deleteCamera = async (id: string) => {
  const result = { error: false }

  try {
    await axios.delete(`${BASE_URL}/delete/${id}`)
  } catch (e) {
    result.error = true
    console.error(e)
  }

  return result
}
