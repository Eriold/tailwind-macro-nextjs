import tw, { styled } from 'twin.macro'

export const StyledTable = styled.div`
  && tbody > tr:hover > td {
    ${tw`bg-indigo-300 cursor-pointer`}
  }
`;