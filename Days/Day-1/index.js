let adc = 'adwawd'

console.log(adc)
//comments can make code readable

/*comments can make code readable,
 easy to reuse and informative*/

// let firstName = "Elif Nur", // Elif Nurun yaptığı
//     lastName = " Çevik",
//     age = 23,
//     isMarried = false

let person = { 
    firstName: "Elif Nur", 
    lastName: "Çevik", 
    date: 1999, 
    isMarried: true 
};


console.log(
`Benim adım ${person.firstName}, 
Soyadım ${person.lastName}
Yaşım ${new Date().getFullYear()- person.date}
Ben ${person.isMarried == false ?  'evli değilim' : 'evliyim'}
`);


let name = "Serhat"

let age = 20

let isNight = false

console.log(
    typeof isNight
)

let sena; 

console.log(typeof sena)
  
 sena = "hdssdjhdk"
 console.log(typeof sena)


let adcd = 'Asdf';

console.log(adcd);


//comments can make code readable


function Consecutive(arr) { 
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return  max - min - arr.length + 1
}

console.log(Consecutive([-2,10,4]))
let Selam = "1"
console.log();