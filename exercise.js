
let abc = "this is my codespace";
let value = abc.slice(11,20);
console.log(value);

let abcd = "this is my codespace";
let valuee = abc.slice(11);
console.log(valuee);

let trim = "Hello World";
let valueTrim = trim.slice(0,5);
console.log(valueTrim);

let pastart= 922;
let valpad=pastart.toString();
console.log(valpad.padStart(11,'*'));

let paend= 922;
let valend=paend.toString();
console.log(valend.padEnd(11,'*'));

let repeatme= "mohib khan";
console.log(repeatme.repeat(3));

let repl = "mohibullah";
console.log(repl.replace('mohibullah',90090));

// let use replace in button when we press button and it chnage the string data 
function replStr(){
  let replVal = document.getElementById('demo').innerHTML;
  document.getElementById('demo').innerHTML=replVal.replace("mohib khan",'rauf khan');
}