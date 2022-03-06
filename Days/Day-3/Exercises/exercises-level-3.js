//--------------------- Level 3



// ----- 1 ------
let now = new Date()

let year = now.getFullYear();
let month = now.getMonth()+1
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();

console.log(`${year}-${month}-${day} ${hour<10?0:""}${hour}:${minute<10?0:""}${minute}`);

