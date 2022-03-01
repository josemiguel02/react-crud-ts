import { FC } from 'react'

interface ButtonProps {
  label: string
  click?: () => void
  isClose?: boolean
  isSubmit?: boolean
  isLoading?: boolean
  solid?: boolean
}

export const Button: FC<ButtonProps> = ({
  label,
  click,
  isSubmit,
  isClose,
  isLoading,
  solid
}) => {
  return (
    <button
      className={`${
        isClose
          ? 'bg-white text-red-500 active:bg-red-600 active:text-white border border-red-500 hover:bg-red-500 hover:text-white'
          : solid ? 'bg-red-500 text-white active:bg-red-600' :'bg-cyan-500 text-white active:bg-cyan-600 border border-transparent'
      } font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
      onClick={click}
      type={isSubmit ? 'submit' : 'button'}
    >
      {isLoading && (
        <svg
          role='status'
          className='inline -ml-2 mr-2 w-4 h-4 text-white animate-spin'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth={4}
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      )}

      {label}
    </button>
  )
}
