
         const numbers = [23, 44, 18, 35, 50];
    // numbers = [33];
    numbers.push(42);
    sum=0;
    num=0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
        num = numbers[i]
        if(numbers[i] != 50 && numbers[i] !=42){
            document.write('<br>'+'+' + num);
        }
         
    }
    document.write('<br>'+'-----------');
    document.write('<br>'+sum);
