import { FC } from 'react'

type ButtonPropsType = {
  callBack: () => void
  name: string
}

export const Button: FC<ButtonPropsType> = ({ callBack, name }) => {
  const callBackHandler = () => {
    callBack()
  }

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {name}
    </button>
  )
}
