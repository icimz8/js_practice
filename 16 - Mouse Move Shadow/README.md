## Mouse Move Shadow

### 복습(알게된 것)   

+ 구조 분해 할당(객체 구조 분해)
```  
// const width = hero.offsetWidth;
// const height = hero.offsetHeight;
const { offsetWidth: width, offsetHeight: height } = hero;
```
객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당    


### Web APIs > MouseEvent 
+ ```element.offsetWidth```, ```element.offsetHeight```   
  특정 DOM 요소의 너비와 높이    
 
+ ```event.offsetX```, ```event.offsetY ```   
  이벤트 대상이 기준이 되어 상대적인 x,y좌표값을 반환 (대상 객체의 왼쪽 모서리 좌표가 0이 됨)

<Br/>

[구조 분해 할당(MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)   
[offsetWidth(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth)