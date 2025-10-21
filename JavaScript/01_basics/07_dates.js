// Dates

let myDate = new Date();
// console.log(myDate) // 2025-10-21T18:09:43.261Z
// console.log(myDate.toString()) // Tue Oct 21 2025 23:40:15 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) // Tue Oct 21 2025
// console.log(myDate.toLocaleString()) // 10/21/2025, 11:41:20 PM
// console.log(typeof myDate) // object

// let myCreatedDate = new Date(2025, 0, 25)
// console.log(myCreatedDate.toDateString()) // Sat Jan 25 2025

// let myCreatedDate = new Date(2025, 0, 25, 5, 3)
// console.log(myCreatedDate.toLocaleString()) // 1/25/2025, 5:03:00 AM

let myCreatedDate = new Date("2025-01-14");
// console.log(myCreatedDate.toLocaleString()) // 1/14/2025, 5:30:00 AM

let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // 10
console.log(newDate.getDay()); 

newDate.toLocaleString("default", {
    weekday: "long"
})
