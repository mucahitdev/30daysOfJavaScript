//--------------------- Level 3

// ----- 1 ------
let sit =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let regex = /love/gi;
console.log(sit.match(regex).length);

// ----- 2 ------
let sit2 =
  "You cannot end a sentence with because because because is a conjunction";
let regex2 = /because/g;
console.log(sit2.match(regex2).length);

// ----- 3 ------
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let regex3 = /[%@$&#;]/gi;
let cek1 = sentence.replace(regex3, "");
console.log(cek1);

var wordCounts = {};

var words = cek1.split(" ");

for (var i = 0; i < words.length; i++){
  wordCounts[ words[i]] = (wordCounts[ words[i]] || 0) + 1;
  
}
console.log(wordCounts)

// ----- 4 ------

let kel = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let re = /[0-9]\d+/g
var result;
let num = kel.match(re)
let sum = (+num[0] * 12) + +num[1] + (+num[2] * 12)


console.log(sum)