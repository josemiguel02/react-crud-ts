import { FC, FormEvent, useState } from 'react'
import { useCameras } from '../hooks/useCameras'
import { useForm } from '../hooks/useForm'
import { Camera } from '../interfaces'
import { addCamera, editCamera } from '../services'
import { Button } from './Button'
import { RawModal } from './RawModal'
import { TextInput } from './TextInput'

interface ModalProps {
  onClose: () => void
  isEdit?: boolean
  item?: Camera
}

export const Modal: FC<ModalProps> = ({ onClose, isEdit, item }) => {
  const [isValid, setIsValid] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const [error, setError] = useState(false)

  const { dispatch } = useCameras()

  const { values, handlerChange } = useForm<Camera>({
    name: isEdit ? item!.name : '',
    model: isEdit ? item!.model : '',
    brand: isEdit ? item!.brand : '',
    connection_type: isEdit ? item!.connection_type : 'WIFI',
    price: isEdit ? item!.price : ''
  })

  const { name, model, brand, connection_type, price } = values

  const handlerAdd = async (e: FormEvent) => {
    e.preventDefault()

    if (name !== '' && model !== '' && brand !== '' && price !== 0) {
      setBtnLoading(true)
      setIsValid(false)
      setError(false)

      const { error, dataCamera } = await addCamera({
        name,
        model,
        brand,
        connection_type,
        price
      })

      if (!error) {
        dispatch({ type: 'ADD_CAMERA', payload: dataCamera })

        onClose()
        return
      }

      setError(true)
      setBtnLoading(false)
      return
    }

    setIsValid(true)
    setError(false)
  }

  const handlerEdit = async (e: FormEvent) => {
    e.preventDefault()
    if (name !== '' && model !== '' && brand !== '' && price !== 0) {
      setBtnLoading(true)
      setIsValid(false)
      setError(false)

      // Do something with the data
      const { error, dataCamera } = await editCamera(item?._id!, values)

      if (!error) {
        dispatch({
          type: 'EDIT_CAMERA',
          payload: { ...item!, ...dataCamera }
        })

        onClose()
        return
      }

      setError(true)
      setBtnLoading(false)
      return
    }

    setIsValid(true)
    setError(false)
  }

  return (
    <RawModal onClose={onClose}>
      <form
        onSubmit={isEdit ? handlerEdit : handlerAdd}
        className='flex flex-col -mt-4 p-5 space-y-4 lg:px-8 sm:pb-6 xl:pb-8'
      >
        <h3 className='text-xl text-center font-medium text-gray-600'>
          {isEdit ? 'Edit camera' : 'Add a new Camera'}
        </h3>

        <TextInput
          name='name'
          placeholder='Name'
          value={name}
          onChange={handlerChange}
        />

        <TextInput
          name='model'
          placeholder='Model'
          value={model}
          onChange={handlerChange}
        />

        <TextInput
          name='brand'
          placeholder='Brand'
          value={brand}
          onChange={handlerChange}
        />

        <TextInput
          isNumberic
          name='price'
          placeholder='Price'
          value={price}
          onChange={handlerChange}
        />

        <select
          value={connection_type}
          onChange={handlerChange}
          name='connection_type'
          className='py-1 px-3 border-2 border-gray-200 rounded-xl transition ease-in-out focus:border-cyan-500 focus:outline-none'
        >
          <option value='WIFI'>Wifi</option>
          <option value='ETHERNET'>Ethernet</option>
          <option value='IP'>IP</option>
        </select>

        {/* Validation and Errors */}
        {isValid && (
          <div className='flex items-center justify-end'>
            <p className='text-red-500 text-sm font-bold'>
              All fields are required.
            </p>
          </div>
        )}

        {error && (
          <div className='flex items-center justify-end'>
            <p className='text-red-500 text-sm font-bold'>
              Something went wrong.
            </p>
          </div>
        )}

        <hr />

        {/* Footer */}
        <div className='flex items-center justify-end space-x-2'>
          <Button label='Close' isClose click={onClose} />
          <Button
            label={btnLoading ? 'Loading...' : isEdit ? 'Edit' : 'Add'}
            isSubmit
            isLoading={btnLoading}
          />
        </div>
      </form>
    </RawModal>
  )
}
