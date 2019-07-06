import firstMissingPositive from '../../src/code/sort/41. First Missing Positive'

test('input:1', () => {
	expect(firstMissingPositive([1, 2, 0])).toBe(3)
})

test('input:2', () => {
	expect(firstMissingPositive([3, 4, -1, 1])).toBe(2)
})

test('input:3', () => {
	expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1)
})

test('input:4', () => {
	expect(firstMissingPositive([1, 2, 3, 4, 5, 6])).toBe(7)
})
