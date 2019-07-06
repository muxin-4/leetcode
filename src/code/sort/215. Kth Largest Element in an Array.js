import { swap } from '../../utils'

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// function findKthLargest(arr, k) {
// 	return arr.sort((a, b) => b - a)[k - 1];
// };

function findKthLargest(arr, k) {
	let len = arr.length
	for (let i = 0; i < k; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(j, j + 1, arr)
			}
		}
	}
	return arr[len - k]
};

export default findKthLargest