
export const generateNumericArray = (length: number, min = 0, max = 100): number[] => {
  if (
    length <= 0 ||
    min > max
  ) return []

  return [...Array(length)].map(() => {
    return Math.floor(Math.random() * (max - min) + min)
  })
}
