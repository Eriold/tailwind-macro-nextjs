import { FC } from 'react'
import { InputWrapper, Wrapper } from './input.styles'
import { InputProps } from '../../../interface';

const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  max,
  min,
  name,
}) => {
  return (
    <Wrapper>
      <InputWrapper
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        max={max}
        min={min}
        name={name}
      />
    </Wrapper>
  )
}

export default Input
