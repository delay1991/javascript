
        document.addEventListener('DOMContentLoaded', function () {
            ajax('dataset.xml', 1);
            //ajax = Asynchronuos Javascript And XML , 순차실행-동기, 비동기는 함께시작
            //서버-클라이언트 데이터요청시 xml은 <태그></태그>로 확인
            let btns = document.querySelectorAll('.pagination > button');
            for (let i = 0; i < btns.length; i++) {
                btns[i].addEventListener('click', function () {
                   //클릭이벤트 시 button의 클래스를 초기화
                    for (let i = 0; i < btns.length; i++) {
                        btns[i].className = '';
                    }
                    let page = this.innerHTML;
                    this.className = 'active';
                    ajax('dataset.xml', page);
                });
            }
        });

        function ajax(url, page) {
            let xhtp = new XMLHttpRequest(); //클릭시이동?불러오기?처럼~ new object해서 자체기능+오브젝트기능
            xhtp.open('get', url);
            xhtp.send(); //까지 적어줘야 페이지요청
            xhtp.onreadystatechange = function () {
                if (xhtp.readyState == 4 && xhtp.status == 200) {
                    // console.log(JSON.parse(xhtp.response)); 
                    // console.log(xhtp.responseXML);
                    // console.log(xhtp.responseText);
                    // document.getElementById('show').innerHTML = makePage(xhtp.responseXML);
                    makePage(xhtp.responseXML, page);

                }
            }
        }

        function makePage(data, page) {
            //기존에 있던 데이터를 화면삭제후..
            let divShow = document.querySelector('#show');
            let cnt = divShow.children.length;
            for (let i = 0; i < cnt; i++)
                divShow.removeChild(divShow.children[0]);


            //페이지 건수만큼 화면에 보여주도록/
            let records = data.getElementsByTagName('record');
            let startCnt, endCnt;
            startCnt = (page - 1) * 10;
            endCnt = page * 10 - 1;
            endCnt = endCnt > records.length - 1 ? records.length - 1 : endCnt;
            console.log(endCnt);

            for (let i = startCnt; i <= endCnt; i++) {
                let div = document.createElement('div');
                div.className = 'row';

                let span = document.createElement('span');
                span.innerText = records[i].children[0].innerHTML;
                let strong = document.createElement('strong');
                strong.innerText = records[i].children[1].innerHTML;
                let strong1 = document.createElement('strong1');
                strong1.innerText = records[i].children[2].innerHTML;
                let strong2 = document.createElement('strong2');
                strong2.innerText = records[i].children[3].innerHTML;
                div.appendChild(span);
                div.appendChild(strong);
                div.appendChild(strong1);
                div.appendChild(strong2);
           
              

                document.getElementById('show').appendChild(div);
            }
        }
   