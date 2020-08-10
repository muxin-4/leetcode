/**
 * 方法一：暴力法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j< nums.length; j++) {
            if(nums[i] + nums[j] === target) {
               return [i, j];
            }
        }
    }
};

/**
 * 方法二：Hash法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = new Map();
	nums.forEach((v, i) => {
		map.set(v, i) // 将 arr 的键值放入 map
	})
	for (let i = 0; i < nums.length; i++) {
		let tmp = target - nums[i]  // 目标元素
		//我们将检查每个元素内有无目标元素
		if (map.has(tmp) && map.get(tmp) != i) {
			return [i, map.get(tmp)]
		}
	}
};