import { FC } from 'react'
import NoImage from '../assets/no-image.png'

interface FileInputProps {
  name: string
  imgSelected: string | ArrayBuffer
}

export const FileInput: FC<FileInputProps> = ({
  children,
  name,
  imgSelected
}) => {
  return (
    <div className='bg-white'>
      <div className='max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl'>
        <div className='md:flex'>
          <div className='w-full'>
            <div className='h-20 relative border-dotted rounded-lg border-dashed border-2 border-cyan-500 bg-gray-100 flex justify-center items-center'>
              <div className='absolute'>
                <div className='flex flex-col items-center'>
                  <img
                    src={(imgSelected as string) || NoImage}
                    alt={name}
                    className='h-10 w-10 object-cover rounded-full'
                  />
                  <span className='block text-gray-400 font-normal'>
                    {name}
                  </span>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
