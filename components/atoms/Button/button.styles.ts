import tw, { styled } from 'twin.macro';
import { Colors } from '../../../types/colors';

// Types
export const Wrapper = styled.button<{
  color: Colors;
  fullWidth?: boolean;
}>`
  ${tw`
      font-sans
      rounded-lg
      py-2
      px-5
      font-bold
      tracking-widest
      uppercase
      flex
      justify-center
      items-center
      sm:w-full
      md:w-auto
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

${({ fullWidth }) => fullWidth && tw`sm:w-full`}

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
