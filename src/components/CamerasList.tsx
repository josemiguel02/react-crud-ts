import { useState } from 'react'
import { useCameras } from '../hooks/useCameras'
import { Button } from './Button'
import { CamerasItem } from './CamerasItem'
import { Modal } from './Modal'
import { Spinner } from './Spinner'
import { Table } from './Table'

export const CamerasList = () => {
  const { cameras, loading, error } = useCameras()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {loading && <Spinner />}

      {!loading && !error && (
        <>
          <div className='flex flex-col items-end mt-5'>
            <Button label='New camera' click={() => setShowModal(!showModal)} />
          </div>

          <Table>
            {cameras.map(item => (
              <CamerasItem key={item._id} camera={item} />
            ))}

            {!cameras.length && (
              <tr className='bg-white'>
                <td colSpan={7} className='py-4 px-6 text-sm text-center'>
                  <p className='font-semibold'>There are no cameras. 😢</p>
                </td>
              </tr>
            )}
          </Table>
        </>
      )}

      {error && (
        <div className='flex items-center justify-center h-89v'>
          <p className='font-bold text-red-500 text-xl'>
            {error} 😢
          </p>
        </div>
      )}

      {showModal && <Modal onClose={() => setShowModal(!showModal)} />}
    </>
  )
}
