console.log('1. "Hello, World! ')
let  strmessage='Hello world';
console.log(strmessage);
console.log('-----------------------------')

console.log('2. To check Leap year.')
let year=2004;
let leapyear;

if(year % 4 == 0){
  leapyear = true;
  if(year % 100 == 0 && year % 400 != 0){
    leapyear = false;
  }
  
}else{
  leapyear = false;
}
if(leapyear){
  console.log(year + ' is a Leap year.');
}else{
  console.log(year + ' is Non-Leap year.');
}
console.log('-------------------------------')

console.log('3: count the no. of each word in that sentence. ')
function count(str) {
    var obj = {};
    console.log('User  Sentence is : '+ str)
    str.split(" ").forEach(function(el, i, arr) {
      obj[el] = obj[el] ? ++obj[el] : 1;
    });
    
    return obj;
  }
  
console.log(count("welcome pradip welcome pradip to new technical world"));
console.log('-------------------------------')


console.log('4. String Reverse')
let reversetext= (word)=> { console.log('Input Sentence is : '+ word) ;return word.split("").reverse().join(""); }
console.log(reversetext("pradip"));
console.log('-------------------------------')


console.log('5. Triangle is equilateral, isosceles, or scalene')
let triangle = (num1: number,num2:number,num3: number):void=>
{
    if((num1==num2)&&(num2==num3)&&(num1==num3))
    {
        console.log("Equilateral Traingle");
        console.log(num1,num2,num3);
    }
    else if ((num1 != num2)&&(num2 != num3)&&(num1!=num3))
    {
        console.log("Scalene Traingle");
        console.log(num1,num2,num3);
    }
    else 
    {
         console.log("Isosceles Traingle");
         console.log(num1,num2,num3);
    }
        
 }       
triangle(9,6,8); 

