##  Array Cardio Day 1

  ```
  const inventors = [
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  ];
  ```
 ### 배운 것    
+ ```.filter()``` : 주어진 함수의 테스트를 통과하는 모든 요소를 모아   새로운 배열로 반환   

```
  //1500s의 객체만 필터링하기
  inventors.filter(obj => (obj.year >=1500 && obj.year <1600)); 
```
  <br/>  

  
+  ```.map()``` : 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환   

 ```
     const fullNames =inventors.map(inventor => `${inventor.first} ${inventor.last}`);
 ```
   <br/>   
   
+ ```.sort()``` : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환   
  + 주의! 복사본이 만들어지는게 아니라 원 배열을 정렬함   

```
  const ordered = inventors.sort((a,b)=> a.year > b.year ? 1: -1);
  ```
<br/>  

+ ```.reduce()``` :메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환    
  + ```Arr.reduce((누적값, 현재값, 인덱스, 요소)=>{return 결괏값}, 초깃값);```   
```
  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
   }, 0);
```



  
 
