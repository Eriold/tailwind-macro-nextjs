import { FC } from "react";
import { Wrapper } from "./title.styles";

interface TitleProps {
    text: string;
}

const Title:FC<TitleProps> = ({text}) => {
  return (
    <Wrapper>{text}</Wrapper>
  )
}

export default Title