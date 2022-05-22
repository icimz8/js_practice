##  Adding Up Times with Reduce

### 복습(알게된 것)     
```
    const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
```
  + document.selectorAll로 가져오는 것은 ```NodeList```로 배열이랑 다르다. 배열메서드(map) 사용하기위해서 ```Array.from()``` 으로 배열 만들어주기

### parseFloat(string)  
부동소수점 실수로 파싱해 반환, 숫자를 파싱할수 없는 경우 NAN (Not a number)반환    
+) ```parseInt()``` : 메서드는 문자열 인자를 파싱해서 특정 진수(수의 진법 체계에서 기준이 되는 값)정수를 반환

### Math.floor
함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환 
 

<Br/>
 https://developer.mozilla.org/ko/docs/Web/API/NodeList