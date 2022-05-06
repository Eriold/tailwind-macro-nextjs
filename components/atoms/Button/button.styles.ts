import tw, { styled } from 'twin.macro';
import { Colors } from '../../../types/colors';

// Types
export const Wrapper = styled.button<{
  color: Colors;
  fullWidth?: boolean;
}>`
  ${tw`
      font-family['Nunito']
      rounded-2xl
      py-2
      px-5
      font-bold
      tracking-widest
      uppercase
      flex
      justify-center
      items-center
    `}
  ${({ color }) => {
    if (color === Colors.primary) {
      return tw`
        bg-indigo-700
        text-white
        hover:bg-indigo-500
      `;
    }
  }}

${({ fullWidth }) => fullWidth && tw`w-full`}

  &:disabled {
    ${tw`
      bg-gray-400
      text-gray-500
    `}
  }
`;

export const Content = styled.span`
  ${tw`px-1.5 py-2 leading-6 `}
`;
