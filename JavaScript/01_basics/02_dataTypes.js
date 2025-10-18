"use strict"; // treat all JS code as newer version

// alert("Hello"); // we are using nodejs, not browser

// code readability should be high

let name = "ankit";
let age = 18;
let isLoggedIn = false;

// primitive datatypes

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value assign nahi hui h 
// symbol => unique

// object

console.log(typeof null) // object
console.log(typeof undefined) // undefined

// primitives datatypes are stored in stack memory
// non-primitive datatypes are stored in heap memory

// primitive data types 
// Number, String, Boolean, null, undefined, Symbol, BigInt

// reference data types
// Object, Array, Function

// ******************************************

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "byteswithankit";

let anotherName = myYoutubeName;
anotherName = "ChaiAurCode";

console.log(myYoutubeName)
console.log(anotherName)

let user = 
{
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = user;

user.email = "a@a.com";

console.log(user)
console.log(userTwo)