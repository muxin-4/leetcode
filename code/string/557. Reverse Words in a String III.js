// const reverseWords = (str) => {
//   // The string is separated by Spaces and the array is saved
//   // The order of the elements in the array is the order of the words
//   let arr = str.split(' ')
//   // Iterate through the array, then invert each element
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// const reverseWords = (str) => {
//   // The string is separated by Spaces and the array is saved
//   // The order of the elements in the array is the order of the words
//   // Iterate through the array, then invert each element

//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// const reverseWords = (str) => {
//   // The string is separated by Spaces and the array is saved
//   // The order of the elements in the array is the order of the words
//   // Iterate through the array, then invert each element

//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// const reverseWords = (str) => {
//   // The string is separated by Spaces and the array is saved
//   // The order of the elements in the array is the order of the words
//   // Iterate through the array, then invert each element

//   return str.match(/[\w']+/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// const reverseWords = (str) => {
//   // reverse string word by word
//   return str.split(' ').reduce((reversed, curr) => {
//     reversed.push(curr.split('').reverse().join(''))
//     return reversed
//   }, []).join(' ')
// }

const reverseWords = (str) => {
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

export default reverseWords
