## 02. JS and CSS Clock
 + 어려웠던 부분: 회전축이 중심이 아닐때, 각을 표현할때 어려웠다. 

 + ```transform-origin: ``` → 회전 중심축을 이동   
 + new Date(); 메소드
 ```
  date.getHours(); 
  date.getMinutes(); 
  date.getSeconds();
  등등
 ```
  1)현재 시간을 date메소드로 가져온다.   
  2)함수로 시침,분침,초침을 transform-rotate시킨다. (변수는 현재시간을 각도로 대입)   
  3) setInterval로 함수를 1초마다 실행시킨다.