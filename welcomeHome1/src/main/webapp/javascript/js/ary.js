const numbers = [23, 43, 77, 88, 65];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let num of numbers) {
//     console.log(num);
// }

let sum = 0;
let fData = numbers.filter(function (val, idx) { //필터
    return val > 40;
    // if (idx < 3) {
    //     return val;
    // }
});
console.log(`fData: ${fData}`);

mData = fData.map(function (val, idx) { //매핑
    return val * 2;
});
console.log(`fData: ${mData}`);

mData.forEach(sumCallBack) //포이치(익명함수_값/인덱스/배열)or(콜백함수), 리턴값없음
function sumCallBack(v, i) {
    sum += v;
}
console.log(`합계: ${sum}`);
console.log(`-----------------`);

numbers.filter(function (val, idx) {
        return val > 40;
    })
    .map(function (val, idx) {
        return val * 2;
    })
    .forEach(function (val, idx) {
        console.log(`val:${val}, idx:${idx}`);
    });