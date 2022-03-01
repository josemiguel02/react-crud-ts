import { FC } from 'react'
import { Button } from './Button'
import { RawModal } from './RawModal'

interface DialogProps {
  click?: () => void
  onClose: () => void
  error?: boolean
  btnLoading?: boolean
}

export const Dialog: FC<DialogProps> = ({
  click,
  onClose,
  error,
  btnLoading
}) => {
  return (
    <RawModal onClose={onClose}>
      <div className='flex flex-col -mt-4 p-5 space-y-4 lg:px-8 sm:pb-6 xl:pb-8'>
        <p className='text-xl font-bold text-center'>
          Are you sure you want to delete this item?
        </p>

        {error && (
          <p className='text-md font-bold text-red-500 text-center'>
            Something went wrong!
          </p>
        )}

        <div className='flex flex-col p-2 space-y-3'>
          <Button
            label={btnLoading ? 'Loading...' : 'Yes, sure'}
            click={click}
            solid
            isLoading={btnLoading}
          />
          <Button label='Cancel' click={onClose} />
        </div>
      </div>
    </RawModal>
  )
}
