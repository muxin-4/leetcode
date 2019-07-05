export default function swap(indexA, indexB, arr) {
	[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}
