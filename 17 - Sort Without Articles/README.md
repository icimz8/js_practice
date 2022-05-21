##  Sort Without Articles

### 복습(알게된 것)    
(replace,정규표현식- 06.Type Ahead README도 참고) 

### 정규표현식
```  
  bandName.replace(/^(a |the |an )/i, '').trim();
```
정규표현식 리터럴 : 슬래시로 패턴을 감싸서 작성   
```^``` : 데이터의 시작점   
```a |the |an ```  : 'a 'or 'the 'or 'an ' (띄어쓰기도 인식, 다른결과를 가져와서 조금 헤맨 부분)   
```i``` : 대소문자 가리지않음  

### String.prototype```.trim()```   
 trim() 메서드는 문자열 양 끝의 공백을 제거
```
ex)
let orig = '   foo  ';
console.log(orig.trim()); // 'foo'
```
<br>  

```
   sortedBands
      .map(band => `<li>${band}</li>`)
      .join('');
```
```map사용시 의도치않은 쉼표가 같이 출력될때``` : map함수가 문자열 형태로 값을 반환할 때는 기본적으로 쉼표(,)로 묶어서 리턴한다. 뒤에 .join('')을 쓰면 해결가능

### 
<Br/>

[정규표현식(MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)   
 