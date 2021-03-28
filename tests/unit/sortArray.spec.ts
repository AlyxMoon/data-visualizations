import { sortBubble } from '@/lib/sortArray'

describe('array sorting', () => {
  describe('sortBubble()', () => {
    it('returns a generator which solves it in steps', () => {
      const func = sortBubble([4, 2, 3, 1, 5])

      expect(func.next().value).toEqual([2, 4, 3, 1, 5])
      expect(func.next().value).toEqual([2, 3, 4, 1, 5])
      expect(func.next().value).toEqual([2, 3, 1, 4, 5])
      expect(func.next().value).toEqual([2, 1, 3, 4, 5])
      expect(func.next().value).toEqual([1, 2, 3, 4, 5])
    })

    it('does not change the input array', () => {
      const arr = [8, 1, 5]
      const func = sortBubble(arr)

      func.next()
      func.next()
      func.next()

      expect(arr).toEqual([8, 1, 5])
    })

    it('does not change the final result if intermediate returns are changed', () => {
      const arr = [8, 1, 5]
      const func = sortBubble(arr)

      const intermediate = func.next().value
      intermediate.push(2)

      func.next()
      const final = func.next()

      expect(final.done).toBe(true)
      expect(final.value).toEqual([1, 5, 8])
    })
  })
})
