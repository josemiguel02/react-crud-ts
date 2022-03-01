import { FC, MouseEventHandler } from 'react'
import { Portal } from './Portal'

interface RawModalProps {
  onClose: () => void
}

export const RawModal: FC<RawModalProps> = ({ onClose, children }) => {
  return (
    <Portal>
      <div
        className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-gray-500 bg-opacity-60'
        onClick={({ target, currentTarget }) =>
          target === currentTarget && onClose()
        }
      >
        <div className='bg-white w-96 h-auto rounded-xl mx-4'>
          {/* Close Btn */}
          <div className='flex justify-end p-2'>
            <button
              onClick={onClose}
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
              data-modal-toggle='authentication-modal'
            >
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>

          {/* Content */}
          {children}
        </div>
      </div>
    </Portal>
  )
}
