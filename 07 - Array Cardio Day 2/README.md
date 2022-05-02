##  Array Cardio Day 2

 ### 배운 것    
+ some(), every() 
+ find(), findIndex()


### some(), every(), find(), findIndex()
+ ```.some()``` :  배열의 각 요소에 대해서 테스트 함수의 반환 값이 하나라도 true인지 확인  
+ ```.every()``` : 배열의 각 요소에 대해서 테스트 함수의 반환 값이 모두 true인지 확인  
   
+ ```.find()```   :  조건에 맞는 (콜백함수)아이템을 찾을때, 제일먼저 조건에 맞는 아이템을 반환    
+ ```.findIndex()```   :  조건에 맞는 아이템의 인덱스를 반환

 
### 복습
+ 전개연산자 이용해서 새 배열 만들기
 ```
    const newComments = [ 
      ...comments.slice(0, index),
      ...comments.slice(index + 1),
    ]
    console.log(newComments);
 ```
 
