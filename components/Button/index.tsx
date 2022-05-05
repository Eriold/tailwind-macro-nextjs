import { FC } from "react";
import { ButtonTest } from "./buton.styles"

interface PropsButton {
  onClick: () => void;
}
const Button:FC<PropsButton> = ({onClick}) => {
  return (
    <ButtonTest onClick={onClick}>Button</ButtonTest>
  )
}

export default Button