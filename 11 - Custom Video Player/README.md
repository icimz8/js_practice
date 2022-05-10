##   Custom Video Player
 ### 배운 것    
+``` parseFloat()```: 문자열을 소수점 표현이 가능한 실수로 변환하는 함수
  
 
### 복습
+ 논리연산자로 체크하기
+ and연산자(&&) 를 쓸때 좌항의 값이 false라면 우항은 실행 안됨
+ and연산자(&&) 를 쓸때 좌항의 값이 true라면 우항 값이 할당되거나 함수실행
 ```
let mousedown = false;
progress.addEventListener('mousemove', () => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));

 ```
 
