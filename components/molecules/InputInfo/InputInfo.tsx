import { Input } from '../../atoms'
import { LabelWrapper, Span } from './inputInfo.styles'
import { InputProps } from '../../../interface'
import { FC } from 'react'

interface InputInfoProps {
  title: string
  inputProps: InputProps
}

const InputInfo: FC<InputInfoProps> = ({ title, inputProps }) => {
  return (
    <LabelWrapper>
      <Span>{title}</Span>
      <Input {...inputProps} />
    </LabelWrapper>
  )
}

export default InputInfo
