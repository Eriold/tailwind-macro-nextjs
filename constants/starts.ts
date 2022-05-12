export const rankingStarts = (rate: string) => {
  switch (rate) {
    case '5':
      return '⭐⭐⭐'
    case '3':
      return '⭐⭐'
    default:
      return '⭐'
  }
}
export const ratingStarts = (rate: any) => {
  switch (rate[0]) {
    case 'best_price':
      return '5'
    case 'fastest':
      return '3'
    default:
      return '1'
  }
}
