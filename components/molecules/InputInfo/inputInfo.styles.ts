import tw, { styled } from 'twin.macro'

export const LabelWrapper = styled.label`
  ${tw`block`}
`

export const Span = styled.span`
  ${tw`after:content-['*']
    after:ml-0.5
    after:text-red-500
    block
    text-lg
    line-height[18px]
    font-bold
    text-indigo-900
    px-2
    pt-2
    -mb-1
  `}
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
