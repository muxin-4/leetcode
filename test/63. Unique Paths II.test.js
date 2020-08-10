import uniquePathsWithObstacles from '../src/code/63. Unique Paths II'

test('uniquePathsWithObstacles:1', () => {
	let arr = [
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	]
	expect(uniquePathsWithObstacles(arr)).toBe(2)
})

test('uniquePathsWithObstacles:2', () => {
	let arr = [[0, 1]]
	expect(uniquePathsWithObstacles(arr)).toBe(0)
})

test('uniquePathsWithObstacles:3', () => {
	let arr = [[1], [0]]
	expect(uniquePathsWithObstacles(arr)).toBe(0)
})

test('uniquePathsWithObstacles:4', () => {
	let arr = [[0], [1]]
	expect(uniquePathsWithObstacles(arr)).toBe(0)
})
