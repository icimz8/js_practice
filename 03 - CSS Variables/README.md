## 03. CSS Variables
 + 배운 것: 인풋 부분 변수를 각각 style.padding, style.backGround 등 하나씩 넘겨줘서 중복되어 보였음, 강의에서 setProperty와 dataset값을 이용해서 한줄로 만든 게  인상깊었다.
 + Event 
    +  ```change``` : 요소 변경이 끝나면 이벤트 발생, 텍스트 입력의 경우 포커스를 잃을 때 실행
     +   ```mousemove``` :해당 element에서 마우스를 움직였을 때 발생 

     +   ```input``` : 텍스트가 입력될 때마다 이벤트 발생, change와 달리 즉시 실행 

 ```
   const suffix = this.dataset.sizing || '';
 ```
+ ```|| '';``` color는 hex값을가지고 dataset(data-sizing)을 지정해주지않았기때문에 콘솔창에 출력시 undefined로 뜬다. 그래서 빈문자열을 넘겨주어 suffix값으로 만들어줌.

```
data-id
```
+ data-* 속성은 표준이 아닌 속성이나 추가적인 DOM 속성, Node.setUserData()과 같은 다른 조작을 하지 않고도, HTML 요소에 추가 정보를 저장할 수 있도록 해준다.
+ JS에서 접근할때는 dataset.id 으로 접근 
+ CSS에서는 속성선택자 [data-id]로 접근