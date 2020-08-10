function MyCircularQueue(k) {
	this.storage = []; // 用来保存数据长度为 k 的数据结构
	this.currentSize = 0;
	this.maxSize = k; // 队列的长度
	this.front = 0; // 头指针
	this.rear = -1; // 尾指针
};

MyCircularQueue.prototype.enQueue = function (value) { // 若队列未满，则插入 value 为新的队尾元素
	if (this.currentSize >= this.maxSize) { // 队列满的判断
		return false;
	};

	this.rear = (++this.rear) % this.maxSize;
	this.storage[this.rear] = value;
	this.currentSize++;

	return true;
};

MyCircularQueue.prototype.deQueue = function () {
	if (this.currentSize === 0) {
		return false;
	};

	this.front = (++this.front) % this.maxSize;
	this.currentSize--;

	return true;
};

MyCircularQueue.prototype.Front = function () {
	return this.currentSize === 0 ? -1 : this.storage[this.front];
};

MyCircularQueue.prototype.Rear = function () {
	return this.currentSize === 0 ? -1 : this.storage[this.rear];
};

MyCircularQueue.prototype.isEmpty = function () {
	return this.currentSize === 0;
};

MyCircularQueue.prototype.isFull = function () {
	return this.currentSize === this.maxSize;
};

export default MyCircularQueue
