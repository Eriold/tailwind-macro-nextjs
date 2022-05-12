import { FC, ReactNode } from 'react';

// Types
import { Colors } from '../../../types/colors';

// Styles
import { Content, Wrapper } from './button.styles';

// Props
interface ButtonProps {
  color?: Colors;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({
  color = Colors.primary,
  disabled,
  fullWidth,
  onClick,
  children
}) => {
  return (
    <Wrapper
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Button;