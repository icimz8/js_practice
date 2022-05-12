##   Key Sequence Detection
 ### 배운 것    
+  splice(시작하는 인덱스, 삭제하고싶은 카운트, 추가 아이템)   
    +  음수인 경우 배열의 끝에서부터 요소를 세어나갑니다.(원점 -1, 즉 -n이면 요소 끝의 n번째 요소를 가리키며 array.length - n번째 인덱스와 같음)
 
### 복습

 
 ```
   window.addEventListener('keyup',(e) =>{
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length -1,pressed.length - secretCode.length);

 ```   

키를 많이 누를수록 배열의 길이가 길어짐, 원하는 secretCode 길이만큼만 남기고 그 안에서 검사한다.    
```-secretCode.length -1``` 은 배열의 뒤에서부터 secretCode의 길이만큼을 세고 난 바로 다음요소부터 삭제하며 ,```pressed.length - secretCode.length)``` 두배열의 차이만큼이니까 시작하는 인덱스로부터 pressed배열의 0번 인덱스까지 카운팅된다.

```
키를 누르면 콘솔에 이런식으로 출력됨 
(6) ['s', 'w', 'e', 's', 'b', 'o'] 
(6) ['e', 's', 'b', 'o', 's', 'h'] 
(6) ['t', 'd', 'o', 'x', 'd', 's']
```

```
if(pressed.join('').includes(secretCode)){
      console.log('DING DING');
      cornify_add();
    }
```
원하는 키 조합과 매치되면  ```cornify_add();``` 로 유니콘을 불러낸다.


<img src="../image/12.JPG" height="320px"> 
