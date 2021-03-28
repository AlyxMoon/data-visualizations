import { generateNumericArray } from '@/lib/generateArray'

describe('array generation', () => {
  describe('generateNumericArray()', () => {
    it('generates array of correct length', () => {
      expect(generateNumericArray(10).length).toBe(10)
      expect(generateNumericArray(20).length).toBe(20)
      expect(generateNumericArray(0).length).toBe(0)
    })

    it('returns empty array when length < 0', () => {
      expect(generateNumericArray(-1)).toEqual([])
    })

    it('returns empty array if min is greater than max', () => {
      expect(generateNumericArray(10, 20, 19)).toEqual([])
    })

    it('returns a different array on consecutive calls', () => {
      const arr1 = generateNumericArray(10)
      const arr2 = generateNumericArray(15)
      const arr3 = generateNumericArray(20)

      expect(arr1).not.toEqual(arr2)
      expect(arr1).not.toEqual(arr3)
      expect(arr2).not.toEqual(arr3)
    })

    it('returns array with all numbers within range of min and max', () => {
      const arrWithMinPositiveMaxPositive = generateNumericArray(1000, 10, 20)
      for (const num of arrWithMinPositiveMaxPositive) {
        expect(num).toBeGreaterThanOrEqual(10)
        expect(num).toBeLessThanOrEqual(20)
      }

      const arrWithMinNegativeMaxPositive = generateNumericArray(1000, -10, 10)
      for (const num of arrWithMinNegativeMaxPositive) {
        expect(num).toBeGreaterThanOrEqual(-10)
        expect(num).toBeLessThanOrEqual(20)
      }

      const arrWithMinNegativeMaxNegative = generateNumericArray(1000, -20, -10)
      for (const num of arrWithMinNegativeMaxNegative) {
        expect(num).toBeGreaterThanOrEqual(-20)
        expect(num).toBeLessThanOrEqual(-10)
      }
    })
  })
})
