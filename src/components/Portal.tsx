import { FC } from 'react'
import { createPortal } from 'react-dom'

export const Portal: FC = ({ children }) => {
  const element = document.getElementById('portal')
  return createPortal(children, element!)
}
