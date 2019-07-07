import maximalRectangle from '../../src/code/stack/85. Maximal Rectangle'

test('maximalRectangle:1', () => {
	let input = [
		["1", "0", "1", "0", "0"],
		["1", "0", "1", "1", "1"],
		["1", "1", "1", "1", "1"],
		["1", "0", "0", "1", "0"]
	]
	expect(maximalRectangle(input)).toBe(6)
})
