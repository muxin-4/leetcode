import leastInterval from '../../src/code/queue/621. Task Scheduler'

test('leastInterval', () => {
	expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8)
})
