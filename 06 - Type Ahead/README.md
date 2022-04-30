## Type Ahead
+ json원하는 값 가져오는 것부터 어려웠던 챌린지, 해설강의를 보는데 모르는 것 투성이였다. 이번챌린지를 잘 정리하고 복기하기
 ### 배운 것    
+ fetch() 복습
+ 전개연산자(spread operator) 
+ 정규표현식(Regular Expression)
+ arr 메서드 복습(filter,map) + 추가로 알게된 메서드 replace, join , match

### 전개 연산자(Spread Operator)
+ 전개 연산자의 쓰임은 배열 혹은 객체요소를 전개하는 것 
 ```
     fetch(endpoint)
      .then(blob => blob.json())
      .then(data => cities.push(...data)); 
 ```
+ 전개 연산자를 쓰지않고 data를 푸쉬해주면 객체(또는 배열 그대로 들어가 2차원 객체(배열)이 만들어진다.
전개 연산자를 사용하게 되면 array 내부의 요소 하나하나가 삽입이 된다.

 ```
 ex)
  const arr1 = [0, 1, 2];
  let arr2 = [3, 4, 5];
  let arr3 = [3, 4, 5];
  arr2.push(arr1);
  console.log(arr2) // [3, 4, 5, [0, 1, 2]]

  arr3.push(...arr1);
  console.log(arr3) // [3, 4, 5, 0, 1, 2]

 ```

### 정규 표현식(Regular Expression)
+ ```정규 표현식``` : 일정한 ‘패턴’을 가진 ‘문자열’의 ‘집합’을 표현하기 위해 사용하는 ```형식 언어(formal language)``` 
+ 역할:  문자 검색(search), 문자 대체(replace), 문자 추출(extract)

```
//RegExp 생성자 함수를 호출하여 사용
    const regex = new RegExp(this.value, 'gi');
```
+ 플래그   
  g :	모든 문자와 여러 줄 일치(global)   
  i :	영어 대소문자를 구분 않고 일치(insensitive, ignore case)


### replace(), .match(),  join()
+ ```.replace()``` : 특정 문자열을 찾아 다른 문자열로 바꾸는 메서드    
```문자열.replace(정규식,대체문자)```   
+ ```.match()``` : 일치하는 문자열의 배열(Array) 반환   
 ```문자열.match(정규식)```    
   
+ ```.join()```   :  배열의 모든 요소를 연결해 하나의 문자열로 만듦      
```arr.join([separator])```   

  + ```매개변수(separator)``` 배열의 각 요소를 구분할 문자열을 지정하면 문자열로 변환됨, 생략하면 배열의 요소들이 쉼표로 구분, separator가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결됨
 