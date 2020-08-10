/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
	if (!obstacleGrid.length || !obstacleGrid[0].length)
		return 0
	let dp = new Array(obstacleGrid.length).fill(0).map(val => new Array(obstacleGrid[0].length).fill(0))
	dp[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1;
	for (let i = 1; i < obstacleGrid.length; i++) {
		if (obstacleGrid[i][0] == 0 && dp[i - 1][0] == 1)
			dp[i][0] = 1
	}
	for (let i = 1; i < obstacleGrid[0].length; i++) {
		if (obstacleGrid[0][i] == 0 && dp[0][i - 1] == 1)
			dp[0][i] = 1
	}
	for (let i = 1; i < obstacleGrid.length; i++) {
		for (let j = 1; j < obstacleGrid[0].length; j++) {
			if (obstacleGrid[i][j] == 1)
				dp[i][j] = 0
			else
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
		}
	}
	return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};

export default uniquePathsWithObstacles
