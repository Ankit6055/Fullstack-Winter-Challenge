// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// myArr.push(6) // add at the end of the array
// myArr.pop() // remove the last value

// myArr.unshift(9); // 9 will be inserted at the start of the array
// myArr.shift() // remove that 9 from the start

// console.log(myArr.includes(5)) // true
// console.log(myArr.indexOf(5)) // 5
// console.log(myArr.indexOf(9)) // -1

// const newArr = myArr.join()
// console.log(newArr) // 0,1,2,3,4,5
// console.log(typeof newArr) //string


// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // 3rd index will not be included
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3); // 3rd index will be included and it will remove all
// those elements from that array too(original array will be manipulated)
console.log(myn2);
console.log(myn2); // [ 1, 2, 3 ] (manipulated one)

