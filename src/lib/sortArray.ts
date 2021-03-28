
export function * sortBubble (
  arr: number[] = [],
): Generator<number[], number[], undefined> {
  const sorted = arr.slice()

  let didASwap = true
  while (didASwap) {
    didASwap = false
    for (let i = 0; i < sorted.length - 1; i++) {
      const [num1, num2] = [sorted[i], sorted[i + 1]]
      if (num1 <= num2) continue

      sorted[i] = num2
      sorted[i + 1] = num1

      didASwap = true
      yield sorted.slice()
    }
  }

  return sorted
}
