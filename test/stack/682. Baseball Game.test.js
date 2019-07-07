import calPoints from '../../src/code/stack/682. Baseball Game'


test('calPoints:input1', () => {
	expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30)
})

test('calPoints:input2', () => {
	expect(calPoints(["5","-2","4","C","D","9","+","+"])).toBe(27)
})
