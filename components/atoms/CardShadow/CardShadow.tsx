import { FC, ReactNode } from 'react'
import { Card } from './cardShadow.styles'

interface Props {
  children: ReactNode
}

const CardShadow: FC<Props> = ({ children }) => {
  return <Card>{children}</Card>
}

export default CardShadow
