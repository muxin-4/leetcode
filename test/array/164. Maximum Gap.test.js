import maximumGap from '../../src/code/array/164. Maximum Gap'

test('sort:input2', () => {
	expect(maximumGap([3, 6, 9, 1])).toBe(3)
})

test('sort:input3', () => {
	expect(maximumGap([10])).toBe(0)
})

test('sort:input4', () => {
	expect(maximumGap([13, 16, 19, 1])).toBe(12)
})
