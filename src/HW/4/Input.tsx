import { ChangeEvent, FC } from 'react'

type InputPropsType = {
  currentText: string
  setCurrentText: (text: string) => void
}

export const Input: FC<InputPropsType> = ({ currentText, setCurrentText }) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.currentTarget.value)
  }

  return (
    <input
      id={'hw04-input'}
      type="text"
      value={currentText}
      onChange={onChangeHandler}
    />
  )
}
