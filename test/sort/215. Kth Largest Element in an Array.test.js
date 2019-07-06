import findKthLargest from '../../src/code/sort/215. Kth Largest Element in an Array'

test('sort:input 2', () => {
	expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})


test('sort:input 3', () => {
	expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).toBe(4)
})

test('sort:input 4', () => {
	expect(findKthLargest([2, 1], 2)).toBe(1)
})


test('sort:input 5', () => {
	expect(findKthLargest([7,6,5,4,3,2,1], 5)).toBe(3)
})