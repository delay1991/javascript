//js.variable.js


let var1='Hello'; //변수
console.log(typeof var1);
var1 = 'World'; //string 
var1 = 100; //int
var1 = true; // boolean 

//값이 할당될때 어떤타입인지 정해진다........
console.log(var1);

const con1='Good'; //상수
// cont1='Morning'; 상수는 두번할당X
let num1 = 1;
let num2 = 1;
console.log(num1*num2);

//document는 웹페이지내에서 바로사용가능~~
document.write('<h1>Hello</h1>');
document.write('<ul>');
document.write(' <li>apple</li>');
document.write(' <li>banana</li>');
document.write('</ul>');

let str="<ul>";
str +="<li>Orange</li>";
str +="<li>Mango</li>";
str +="</ul>"
document.write(str);

// 자바의 컬렉션을 자바스크립트는 배열이담당
let fruits = ['수박', '딸기', '복숭아'];

fruits = new Array();
fruits.push('수박');
fruits.push('딸기');
fruits[2]='복숭아';
fruits[fruits.length]='옥수수';
fruits[fruits.length]='감자';
fruits.pop();//마지막위치삭제.
fruits.pop();
fruits.unshift('옥수수'); //맨앞삽입
fruits.shift(); //맨앞지우기


console.log(typeof fruits);

document.write('<ul>');
for(let i =0; i<fruits.length; i++){
    document.write('<li>'+fruits[i]+'</li>');
}
document.write('</ul>');