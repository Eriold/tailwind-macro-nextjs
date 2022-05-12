export interface InputProps {
  type?: 'text' | 'number' | 'email' | 'tel' | 'password'
  placeholder?: string
  value?: string
  onChange?: (e:any) => void
  max?: string
  min?: string
  name: string
}
