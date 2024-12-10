let myDate  = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(myDate.getDate());
console.log(myDate.getFullYear());

console.log(typeof myDate);

let myCreatedDate = new Date(2024,11,10,16,25)
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("12-10-2024")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp  = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));

//mdn documentation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date






