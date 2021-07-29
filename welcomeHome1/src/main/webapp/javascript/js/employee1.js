let jsonData = `[{"id":1,"first_name":"Lee","last_name":"Stovold","email":"lstovold0@cisco.com","gender":"Genderqueer"},
{"id":2,"first_name":"Gae","last_name":"Midlar","email":"gmidlar1@amazonaws.com","gender":"Male"},
{"id":3,"first_name":"Coriss","last_name":"Grumley","email":"cgrumley2@sourceforge.net","gender":"Male"},
{"id":4,"first_name":"Claudie","last_name":"Mc Mechan","email":"cmcmechan3@gnu.org","gender":"Polygender"},
{"id":5,"first_name":"Georg","last_name":"Bynold","email":"gbynold4@europa.eu","gender":"Male"},
{"id":6,"first_name":"Sybila","last_name":"Roseburgh","email":"sroseburgh5@stanford.edu","gender":"Agender"},
{"id":7,"first_name":"Lonnie","last_name":"Ortega","email":"lortega6@mlb.com","gender":"Polygender"},
{"id":8,"first_name":"Cleve","last_name":"Worge","email":"cworge7@shareasale.com","gender":"Male"},
{"id":9,"first_name":"Keen","last_name":"Blennerhassett","email":"kblennerhassett8@nhs.uk","gender":"Polygender"},
{"id":10,"first_name":"Lanae","last_name":"Cuppleditch","email":"lcuppleditch9@businessweek.com","gender":"Agender"}]`;

console.log(jsonData); //json데이터: {}에들어있음
let objData = JSON.parse(jsonData); //json을 javaobject타입으로 변환
console.log(objData);

document.addEventListener('DOMContentLoaded', function () {
    let tbody = document.querySelector('#list > tbody');

    for (let i = 0; i < objData.length; i++) {

        let newTr = makeRow(objData[i]);
        tbody.appendChild(newTr);
    }

    document.getElementById('list').setAttribute('border', '1');

});


function makeRow(obj) { // tr마우스오버/아웃

    // <tr><td>id</td><td>first_name</td><td>last_name</td></tr>
    let tr = document.createElement('tr');
    tr.addEventListener('mouseover', mover, true);
    tr.addEventListener('mouseout', mout, true);
    tr.addEventListener('click', trClick, false); //true는 상위부터, false는 하위부터-stoppropagtion작동

    // 필드의 갯수만큼 반복할 때 fon .. in 반복문 사용.
    for (let field in obj) {
        // console.log('필드:' + field + '값:' + obj[field]);
        console.log(`필드: +${field}, 값:${obj[field]}`);

        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    // 삭제버튼 생성.
    let td = document.createElement('td');
    let btn = document.createElement('input');
    btn.type = 'button'; // btn.setAttribute('type', 'button') 같음.
    btn.value = '삭제';
    btn.addEventListener('click', deletRow); //콜백함수_()<<실행코드없이 클릭시실행됨으로 

    td.appendChild(btn);
    tr.appendChild(td);
    return tr;
}

let deletRow = (arg) => {
    arg.stopPropagation(); //이벤트의 전파를 차단. -상위?하위? thinking
    //arrow funtion 일 경우에는 this 키워드는 window오브젝트.
    arg.target.parentElement.parentElement.remove();
}

let mover =function(arg) {
    this.style.backgroundColor = 'yellow';
}
let mout = function(arg) { //function일경우에는 this키워드는 이벤트대상.
    this.style.backgroundColor = '';
}

let trClick = function(){
    window.alert(this.children[0].innerHTML);
}