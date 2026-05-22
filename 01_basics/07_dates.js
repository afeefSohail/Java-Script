// Dates
let myDate = new Date()
console.log(typeof myDate); //object
console.log(myDate); // 2026-05-22T09:53:15.358Z
console.log(myDate.toString()); // Fri May 22 2026 14:53:15 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString()); // Fri May 22 2026
console.log(myDate.toISOString()); // 2026-05-22T09:53:15.358Z
console.log(myDate.toLocaleDateString()); // 5/22/2026
console.log(myDate.toLocaleString()); // 5/22/2026, 2:53:15 PM
console.log(myDate.toLocaleTimeString()); // 2:53:15 PM
console.log(myDate.toTimeString()); // 14:55:17 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toTimeString()); // 14:55:17 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toUTCString()); // Fri, 22 May 2026 09:55:17 GMT
console.log(myDate.getTimezoneOffset()); // -300


let birthDate = new Date(1992, 5, 12);
console.log(birthDate.toLocaleString()); // => 6/12/1992, 12:00:00 AM

let createdDate01 = new Date(1992, 5, 12, 5, 3);
console.log(createdDate01.toLocaleString()); // => 6/12/1992, 5:03:00 AM

let createdDate02 = new Date("1992-06-12"); // YY-MM-DD
console.log(createdDate02.toLocaleString()); // => 6/12/1992, 5:00:00 AM

let createdDate03 = new Date("06-12-1992"); // MM-DD-YY
console.log(createdDate03.toLocaleString()); // => 6/12/1992, 12:00:00 AM
console.log(createdDate03.getDay()); // 5 => 12 is 5th day of that week
console.log(createdDate03.getMonth()); // 5 => starting from 0
console.log(createdDate03.getHours()); // 0
console.log(createdDate03.getMinutes()); // 0
console.log(createdDate03.getSeconds()); // 0
console.log(createdDate03.getTime()); // 708289200000

let timeStamp = Date.now()
console.log(timeStamp); //1779444370173

console.log(Math.floor(Date.now() / 1000)); // 1779444638

console.log(`${myDate.getDay()} of that week. Accorindg to Day of Date`);


myDate.toLocaleString('default', {
    weekday: "long",
})