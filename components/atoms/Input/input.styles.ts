import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
${tw`p-2`}
`

export const InputWrapper = styled.input`
  ${tw`font-sans
    font-bold
    md:text-xl
    px-3
    py-2
    bg-white
    border
    shadow-sm
    border-indigo-300
    placeholder-indigo-300
    focus:outline-none
    focus:border-indigo-700
    text-indigo-700
    block
    w-full
    rounded-md
    sm:text-sm
    focus:ring-1
`}
`
