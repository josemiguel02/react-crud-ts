import { useState, ChangeEvent } from 'react'

export const useForm = <T>(initValue: T) => {
  const [values, setValues] = useState(initValue)

  const handlerChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target

    setValues({
      ...values,
      [name]: value
    })
  }

  return {
    values,
    handlerChange,
    setValues
  }
}
