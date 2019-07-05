function sortArrayByParityII(arr) {
	arr.sort((a, b) => a - b);

	let result = [];

	for (let i = 0, even = 0, odd = 1; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			result[even] = arr[i];
			even += 2;
		} else {
			result[odd] = arr[i];
			odd += 2;
		}
	}
	return result;
}

export default sortArrayByParityII
