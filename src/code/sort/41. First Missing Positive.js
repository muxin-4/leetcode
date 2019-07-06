// function firstMissingPositive(arr) {
// 	// 过滤掉非正整数
// 	arr = arr.filter(item => item > 0)

// 	// 正整数数组是不是为空
// 	if (!arr.length) return 1

// 	arr.sort((a, b) => a - b)

// 	// 如果第一个元素不为 1，则返回 1
// 	if (arr[0] !== 1) return 1

// 	for (let i = 0, len = arr.length - 1; i < len; i++) {
// 		if (arr[i + 1] - arr[i] > 1) {
// 			return arr[i] + 1
// 		}
// 	}
// 	return arr[arr.length - 1] + 1

// 	return 1
// };

function firstMissingPositive(arr) {
	arr = arr.filter(item => item > 0)
	// 实现选择排序，先拿到最小值，如果第一个元素不是 1 直接返回 1，如果是 1，就要比相邻元素差值
	for (let i = 0, len = arr.length, min; i < len; i++) {
		min = arr[i]
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < min) {
				let c = min
				min = arr[j]
				arr[j] = c
			}
		}
		arr[i] = min
		if (i > 0) {
			if (arr[i] - arr[i - 1] > 1) {
				return arr[i - 1] + 1
			}
		} else {
			if (min !== 1) {
				return 1
			}
		}
	}
	return arr.length ? arr[arr.length - 1] + 1 : 1
}

export default firstMissingPositive
