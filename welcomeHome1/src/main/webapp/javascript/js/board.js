function submitFun(e) {
    e.preventDefault(); //aa.html로 안넘어가게함
    console.log('dd');

    if (document.board.num.value == '') {
        alert('번호를 입력하세요');
        document.board.num.focus();
        retrun;
    }
    if (document.board.title.value == '') {
        alert('제목을 입력하세요');
        document.board.title.focus();
        retrun;
    }
    if (document.board.writer.value == '') {
        alert('작성자를 입력하세요');
        document.board.writer.focus();
        retrun;
    }
    if (document.board.regDate.value == '') {
        alert('날짜를 입력하세요');
        document.board.regDate.focus();
        retrun;
    }
    let list = document.querySelector('#list > tbody');
    let v1 = document.board.num.value;
    let v2 = document.board.title.value;
    let v3 = document.board.writer.value;
    let v4 = document.board.regDate.value;
 
    let childCnt = list.children.length;
    if (childCnt % 2 == 1) {
        let liTag = createTr(v1, v2, v3, v4);
        liTag.setAttribute('class', 'altRow');
        //liTag.className= 'altRow';
        list.appendChild(liTag);
    } else {
        list.appendChild(createTr(v1, v2, v3, v4));
    }
    addTrEvent();

}


function createTr(num, title, writer, regDate) {

    let trTag = document.createElement('tr');
    trTag.setAttribute('id', num); //새로운값도 id값을 주려고

    for (let i = 0; i < arguments.length; i++) {
        let tdTag = document.createElement('td');
        tdTag.setAttribute('class', 'td' + (i + 1));
        let text = document.createTextNode(arguments[i]);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    let td = document.createElement('td'); //체크박스추가
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    td.appendChild(checkbox);
    trTag.appendChild(td);

    return trTag;
}

//기존에 생성되어있는 tr에 이벤트등록
function addTrEvent(){ //새로등록되 행도 수정이벤트 하기위해서...ㅠㅠ
let trs = document.querySelectorAll('#list > tbody > tr');
console.log('trs');
for (let i = 0; i < trs.length; i++) {
    trs[i].addEventListener('click', function () {
        console.log('번호:', this.children[0].innerHTML);
        //form 화면의 각 요소의 값 <= this.children[0].innerHTML
        document.getElementById('num').value = this.children[0].innerHTML;
        document.getElementById('title').value = this.children[1].innerHTML;
        document.getElementById('writer').value = this.children[2].innerHTML;
        document.getElementById('regDate').value = this.children[3].innerHTML;
    }); // 매개값(event, function)

} //펑션안에 안넣어서 바로실행됌

}

//수정버튼클릭시 실행될eventHandler(코드);
let updateBtn = document.querySelector('#inputForm > form >input[type="button"]'); //첫번째꺼하나만가져옴
console.log(updateBtn);
updateBtn.addEventListener('click', function () {
    //폼태그안에 사용자가 수정한 값을 테이블에서 찾아와서(tr=id기준) 하위요소값 변경.
    // console.log(numInput.value); //수정하고자하는 게시판의글번호.
    let numInput = document.getElementById('num');
    let titleInput = document.getElementById('title');
    let wriInput = document.getElementById('writer').value;
    let dateInput = document.getElementById('regDate');
    let searchId = numInput.value;

    let findTr = document.getElementById(searchId);
    console.log(findTr);
    //제목:
    findTr.children[1].innerHTML = titleInput.value;
    //이름:
    findTr.children[2].innerHTML = wriInput;
    //날짜:
    findTr.children[3].innerHTML = dateInput.value;
});

//선택삭제버튼 클릭시, 선택값만 삭제처리
document.getElementById('delBtn').addEventListener('click', function () {
    console.log('hhh');
    //체크박스가 선택된 값을 가져와야함
    let checkedbox = document.querySelectorAll('#list>tbody>tr>td>input[type="checkbox"]:checked');
    console.log(checkedbox);
    for (let i = 0; i < checkedbox.length; i++) {
        checkedbox[i].parentNode.parentNode.remove();
    }

    //남은 데이터의 tr건수만큼 가져와서 class=> altRow;
    let remainTr= document.querySelectorAll('#list > tbody > tr');
    for(let i=0; i<remainTr.length; i++){
        if(i%2 ==0){
            remainTr[i].className ='altRow';
        
        } else{
            remainTr[i].className ='';
        }
    }
});