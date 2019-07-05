import selectionSort from '../../src/code/sort/2. selectionSort'

test('冒泡排序', () => {
	expect(selectionSort([1, 9, 5, 3, 4])).toEqual([1, 3, 4, 5, 9])
})