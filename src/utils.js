function swap(indexA, indexB, arr) {
	[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}


class BinaryTreeNode {
	constructor(val = null, left = null, right = null) {
		// 自己本身值
		this.val = val
		// 左结点
		this.left = left
		// 右结点
		this.right = right
	}
}

class BinaryTree {
	constructor(arr) {
		// 默认 层序遍历构建二叉树
		return this.buildTreeByLevelOrder(arr);
	}

	/**
	 * 创建结点列表
	 * @return {[]|*[]}
	 */
	createNodeList(arr) {
		if (!Array.isArray(arr) || arr.length < 1) {
			return []
		}
		// 用一个集合来存放每一个结点node
		let nodesList = []
		for (let i = 0; i < arr.length; i++) {
			let node = new BinaryTreeNode(arr[i], null, null, null)
			nodesList.push(node)
		}
		return nodesList
	}

	/**
	 * @name 层序遍历
	 * @description
	 * left = index * 2 + 1，例如：根节点的下标为0，则左节点的值为下标array[0＊2+1]=1
	 * right = index * 2 + 2，例如：根节点的下标为0，则右节点的值为下标array[0＊2+2]=2
	 * 序数 >= floor(N/2)都是叶子节点，例如：floor(9/2) = 4，则从下标4开始的值都为叶子节点
	 * index>0，index的结点的父节点为Math.ceil((index/2)-1，
	 * @param arr {number}
	 * @return {null|[]}
	 */
	buildTreeByLevelOrder(arr) {
		let nodesList = this.createNodeList(arr)
		console.log('nodesList', nodesList);
		let length = nodesList.length
		if (length === 0) {
			return null
		}
		// 确定每个结点的左右结点
		for (let i = 0; i < length / 2 - 1; i++) {
			if (2 * i + 1 < length) nodesList[i].left = nodesList[2 * i + 1]
			if (2 * i + 2 < length) nodesList[i].right = nodesList[2 * i + 2]
		}
		// 判断最后一个根结点：因为最后一个根结点可能没有右结点，所以单独拿出来处理
		let lastIndex = Math.round(length / 2) - 1
		// 左结点
		nodesList[lastIndex].left = nodesList[lastIndex * 2 + 1]
		// 右结点，如果数组的长度为奇数才有右结点
		if (length % 2 === 1) {
			nodesList[lastIndex].right = nodesList[lastIndex * 2 + 2]
		}

		return nodesList[0];
	}
}


function BinarySearchTree(keys) {
	//Node构造函数
	let Node = function (key) {
		this.key = key
		this.left = null
		this.right = null
	}
	let root = null
	let insertNode = (node, newNode) => {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode
			} else {
				insertNode(node.left, newNode)
			}
		} else {
			if (node.right === null) {
				node.right = newNode
			} else {
				insertNode(node.right, newNode)
			}
		}
	}
	this.insert = (key) => {
		let newNode = new Node(key)
		if (root === null) {
			root = newNode
		} else {
			insertNode(root, newNode)
		}
	}
	keys.forEach((key) => {
		this.insert(key)
	})
	return root
}
