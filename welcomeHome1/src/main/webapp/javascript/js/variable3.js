 //학생이름(name), 국어(kor)/수학(mat)/영어(eng) 점수를 담을수있도록 student1 오브젝트생성.
        //학생이름(name), 국어(kor)/수학(mat)/영어(eng) 점수를 담을수있도록 student2 오브젝트생성.
        //학생이름(name), 국어(kor)/수학(mat)/영어(eng) 점수를 담을수있도록 student3 오브젝트생성.

        const student1 = {
            name: '박주현',
            kor: 90,
            mat: 30,
            eng: 40
        }
        const student2 = {
            name: '홍미림',
            kor: 91,
            mat: 31,
            eng: 41
        }
        const student3 = {
            name: '김지연',
            kor: 11,
            mat: 31,
            eng: 41
        }

        const students = [];
        students.push(student1, student2, student3);

        const fields ={
            name: '학생이름',
            kor: '국어점수',
            mat: '수학점수',
            eng: '영어점수'
        }
       
        document.write('<table border ="1">'); 
        document.write('<thead>');
            for(field in fields){ //학생한명당쓰면 길어지니깐...반복문활용..알아두도로규ㅠㅠㅠㅠㅠㅠㅠㅠ
                document.write('<th>'+fields[field]+'</th>');
            }
            document.write('<tbody>');
                for(let i=0; i<students.length; i++){
                    document.write('<tr>');
                        for(field in students[i]){
                            document.write('<td>'+students[i][field]);
                        }
                        document.write('</tr>');   
                }
                document.write('</tbody>');
        document.write('</table>');
        

        