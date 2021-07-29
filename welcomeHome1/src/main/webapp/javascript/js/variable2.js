
const object = new Object();
object.name ='kim';
object.age = 30;
// 이렇게 가능하지만 {}가 오브젝트라고...

const obj = {
    name: 'Hong', //key : value
    age: 20,
    hobby: ['sleeping', 'dancing', 'eating']
};
console.log('이름:'+obj.name);
console.log('나이:'+obj['age']); 
console.log('취미:'+obj.hobby[0]);
console.log('취미:'+obj['hobby'][1]);
let hob = 'hobby';
console.log('취미:'+obj[hob][2]); //이게 더많이 쓰임...변수에넣으면 가변적이니깐~~age도 넣고 취미도넣고....

const mem1={ //오브젝트타입의 변수
    id: 'user1',
    name: '홍길동',
    passwd: '1234'
}

const mem2={ 
    id: 'user2',
    name: '박민수',
    passwd: '1212'
}

const mem3={ 
    id: 'user3',
    name: '김효영',
    passwd: '6543'
}
console.log('--------------');
for(field in mem3){
    console.log(field+':'+mem3[field]);
}
console.log('--------------');
const members = [mem1, mem2, mem3];
for(let i=0; i<members.length; i++){
    
    // console.log('아이디:'+members[i].id);
    // console.log('이름:'+members[i].name);
    // console.log('비번:'+members[i].passwd);
    for(field in members[i]){
        console.log(field+':'+members[i][field]);
    }
    console.log('--------------');
}
