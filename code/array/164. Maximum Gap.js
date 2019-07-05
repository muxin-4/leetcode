function maximumGap(arr) {
	if (arr === null || arr.length < 2) return 0
	arr.sort()
	let max = 0
	for (let i = 0, tmp; i < arr.length - 1; i++) {
		tmp = arr[i + 1] - arr[i]
		if (tmp > max) {
			max = tmp
		}
	}
	return max
}

export default maximumGap
