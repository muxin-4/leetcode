import { swap } from '../../utils'

/**
 * 简单写法：先排序，再比较得出相邻元素最大差值
 *
 * @param {Array} arr
 * @returns {Number}
 */
// function maximumGap(arr) {
// 	if (arr === null || arr.length < 2) return 0
// 	arr.sort()
// 	let max = 0
// 	for (let i = 0, tmp; i < arr.length - 1; i++) {
// 		tmp = arr[i + 1] - arr[i]
// 		if (tmp > max) {
// 			max = tmp
// 		}
// 	}
// 	return max
// }


/**
 * 升级写法：排序
 * 
 * @param {Array} arr 
 * @returns {Number}
 */
function maximumGap(arr) {
	if (arr === null || arr.length < 2) return 0
	let max = 0
	let len = arr.length - 1
	let space
	for (let i = len, tmp; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			tmp = arr[j]
			if (arr[j] > arr[j + 1]) {
				arr[j] = arr[j + 1]
				arr[j + 1] = tmp
			}
		}
		if (i < len) {
			space = arr[i + 1] - arr[i]
			if (space > max) {
				max = space
			}
		}
	}
	return Math.max(max, arr[1] - arr[0])
}

export default maximumGap