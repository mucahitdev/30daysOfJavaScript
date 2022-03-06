//--------------------- Level 1

// ----- 1 ------

let values = ["Mücahit", "Kökdemir", "Türkiye", "İstanbul", 25, false]
let [firstName, lastName, country, city, age, isMarried] = values
console.log(values)

// ----- 2 ------

let a = 10;
let b = "10";
console.log(a === b)

// ----- 3 ------

console.log(parseInt("9.8") == 10)

// ----- 4 ------
console.log(false == '', false == "", false == ``, 3 == 4, 5 === "5", 5 > 6)

// ----- 5 ------

console.log(4 > 3,
    4 >= 3,
    4 < 3,
    4 <= 3,
    4 == 4,
    4 === 4,
    4 != 4,
    4 !== 4,
    4 != '4',
    4 == '4',
    4 === '4'
)

console.log(true,true,false,false,true,true,false,false,false,true,false)
console.log("python".length != "jargon".length)

// ----- 6 ------

console.log(4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4')
)
console.log(true,false,true,true,false,true,true,false,true,true)
// ----- 7 ------

//What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth()+1;
let date = now.getDate();
let nowDate = `${date}:${month}:${year}`;
let hours = now.getHours();
let minutes = now.getMinutes();

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const years = day * 365;

let time = Math.round(now.getTime() / years);
console.log(year,month,nowDate,date,hours,minutes,": " + time)




