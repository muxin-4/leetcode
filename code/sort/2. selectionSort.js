import swap from './swap'

function selectionSort(arr) {
	let len = arr.length
	let minIndex
	for (let i = 0; i < len - 1; i++) {
		minIndex = i							// 存储最小元素的索引
		for (let j = i + 1; j < len; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j					//  更新最小元素的索引
			}
		}
		if (i !== minIndex) {
			swap(i, minIndex, arr)
		}
	}
	console.log('arr', arr);
	return arr
}

export default selectionSort
