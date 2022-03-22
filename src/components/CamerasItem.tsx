import { FC, useState } from 'react'
import { useCameras } from '../hooks/useCameras'
import { Camera } from '../interfaces'
import { deleteCamera } from '../services'
import { Dialog } from './Dialog'
import { Modal } from './Modal'
import { BASE_URL } from '../utils/base-url'

interface CamerasItemProps {
  camera: Camera
}

export const CamerasItem: FC<CamerasItemProps> = ({ camera }) => {
  const { name, model, brand, price, _id, image, connection_type } = camera

  const { dispatch } = useCameras()
  const [showDialogDelete, setShowDialogDelete] = useState(false)
  const [showDialogEdit, setShowDialogEdit] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const [error, setError] = useState(false)

  const handlerDelete = async () => {
    setBtnLoading(true)
    setError(false)

    const { error } = await deleteCamera(_id)

    if (!error) {
      dispatch({ type: 'DELETE_CAMERA', payload: _id })
      return
    }

    setError(true)
    setBtnLoading(false)
  }

  return (
    <>
      <tr className='border-b odd:bg-white even:bg-gray-100 odd:bg-white even:bg-gray-50 border-gray-50'>
        <td className='py-4 px-6 text-sm'>
          <img
            src={`${BASE_URL}/${image}`}
            alt={name}
            className='h-10 w-10 object-cover rounded-full'
          />
        </td>
        <td className='py-4 px-6 text-sm'>{name}</td>
        <td className='py-4 px-6 text-sm whitespace-nowrap'>{model}</td>
        <td className='py-4 px-6 text-sm whitespace-nowrap'>{brand}</td>
        <td className='py-4 px-6 text-sm whitespace-nowrap'>
          {connection_type}
        </td>
        <td className='flex py-4 px-6 text-sm whitespace-nowrap'>
          <p className='font-bold'>$</p>
          {price}
        </td>
        <td className='py-4 px-6 text-sm whitespace-nowrap space-x-3'>
          <button
            onClick={() => setShowDialogEdit(true)}
            className='bg-green-500 hover:bg-green-600 text-white font-bold p-1.5 rounded-xl'
          >
            ✏️
          </button>
          <button
            className='bg-red-500 hover:bg-red-600 text-white font-bold p-1.5 rounded-xl'
            onClick={() => setShowDialogDelete(true)}
          >
            🚫
          </button>
        </td>
      </tr>

      {showDialogDelete && (
        <Dialog
          click={handlerDelete}
          onClose={() => {
            setShowDialogDelete(false)
            setError(false)
            setBtnLoading(false)
          }}
          error={error}
          btnLoading={btnLoading}
        />
      )}

      {showDialogEdit && (
        <Modal isEdit item={camera} onClose={() => setShowDialogEdit(false)} />
      )}
    </>
  )
}
