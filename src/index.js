import letterCombinations from './code/array/17. Letter Combinations of a Phone Number'
import maximumGap from './code/array/164. Maximum Gap'

import bubbleSort from './code/sort/1. bubbleSort'
import selectionSort from './code/sort/2. selectionSort'
import findKthLargest from './code/sort/215. Kth Largest Element in an Array'
import firstMissingPositive from './code/sort/41. First Missing Positive'

import restoreIpAddresses from './code/recur/93. Restore IP Addresses'

import uniquePathsWithObstacles from './code/dp/63. Unique Paths II'

letterCombinations('234')
maximumGap([13, 16, 19, 1]);

bubbleSort([1, 9, 5, 3, 4])
selectionSort([1, 9, 5, 3, 4])
findKthLargest([2, 1], 2)
firstMissingPositive([3, 4, -1, 1])

restoreIpAddresses('010010')

// let uniquePathsWithObstaclesArr = [
// 	[0, 0, 0],
// 	[0, 1, 0],
// 	[0, 0, 0]
// ]
let uniquePathsWithObstaclesArr =
	[[1], [0]]
uniquePathsWithObstacles(uniquePathsWithObstaclesArr)
