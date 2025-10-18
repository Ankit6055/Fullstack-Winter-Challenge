const name = "ankit";
const repoCount = 43;

console.log(name + " " + repoCount);

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Chai Aur Code");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // CHAI AUR CODE

console.log(gameName); // [String: 'Chai Aur Code']
console.log(name); // ankit

console.log(gameName.charAt(12)); // e

console.log(gameName.indexOf("e")); // 12
console.log(gameName.indexOf("m")); // -1

const newString = gameName.substring(0, 12); // last index is excluded in the range & cannot use -ve value
console.log(newString) 

const anotherString = gameName.slice(-8, 12); // can use -ve value
console.log(anotherString)

const newString1 = "   ankit    ";
console.log(newString1.trim()) // ankit

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')) // https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh')) // true

console.log(gameName.split(" ")) // [ 'Chai', 'Aur', 'Code' ]
