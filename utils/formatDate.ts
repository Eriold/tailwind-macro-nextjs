import { monthSpanish } from '../constants/date'

export const dateSpanish = (lastDate: string, days: number) => {
  const date = new Date(lastDate)
  date.setDate(date.getDate()+days)
  return `${date.getDate()} de ${
    monthSpanish[date.getMonth()]
  } del ${date.getFullYear()}`
}
