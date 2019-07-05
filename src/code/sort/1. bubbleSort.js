import swap from '../../utils.js'

/**
 * @param {Array} arr 
 * @return {Array}
 */
function bubbleSort(arr) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {				 // 冒泡次数
		let flag = 0
		for (let j = 0; j < len - 1 - i; j++) {  // 一趟冒泡，进行两数交换，找每次的最大数，排到最后
			if (arr[j] > arr[j + 1]) {           // 相邻元素两两对比
				swap(j, j + 1, arr)
				flag = 1;						 // 标识发生了交换
			}
		}
		if (flag === 0) break;
	}
	return arr;
}

export default bubbleSort
