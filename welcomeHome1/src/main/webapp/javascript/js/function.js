 //var와 let의 차이
 let num1 = 10; 
 console.log('global: ' + num1);

 function tempFun() {
     let num1 = 20;  //let 또는 const를 선언해서 사용. var가 혼란스러움?
     let num2 =30; //let은 따로선언안하면 전역으로 간주. 
     console.log('local: ' + num1+','+num2);
 }

 tempFun();
 console.log('global: ' + num1+','+num2);