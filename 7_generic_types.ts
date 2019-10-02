// Generic type <T> mutates for any typ of array

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayOfStrings: Array<string> = ['a', 'b', 'c']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
