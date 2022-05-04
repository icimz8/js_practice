##  Fun with HTML5 Canvas
+ 예전에 그림판 강의 들었던 기억을 더듬어(그땐 강의보면서 따라썼지만), 먼저 구현해보았다. 

 ### 배운 것   
 
+ 그리는동안 (선굵기,색상) 변화시키기    

 ```
    function changeLineProperty() {
      if (ctx.lineWidth === 100) {
        direction = !direction;
      } else if (ctx.lineWidth == 1) {
        direction = !direction;
      }
      direction ? ctx.lineWidth++ : ctx.lineWidth--;
     
      //color
      direction ? color++ : color--;
      ctx.strokeStyle = `hsl(${color}, 100%, 50%)` 
    }

// 수정 후
    function changeLineProperty(e) {
      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
      direction ? ctx.lineWidth++ : ctx.lineWidth--;

      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      hue++;
      if (hue >= 360) {
        hue = 0;
      }
      // console.log(ctx.lineWidth, direction);
    }
 ```
  이 부분은 굵기에 제한을 주고 색도 제한을 같이줬다. hue 값이 0~360까지 있는데 생각에 갇혔던 것 같다. 굵기부분 조건절을 논리연산자 ```||``` 로 쓰니까 중복된 코드가 더 깔끔해졌다.


 + 빠르게 움직이면 끊겨져서 그려짐   

```
  //수정 전
    function draw(e) {
      const x = e.offsetX;
      const y = e.offsetY;

      if (state) {
        ctx.beginPath();
        ctx.moveTo(x, y); 
        ctx.lineTo(x, y);
        ctx.fill();
        ctx.stroke();
        changeLineProperty();
      } else {
        return;
      }
    }
  ```
  ```
  //수정 후
      [lastX, lastY] = [e.offsetX, e.offsetY];

      function draw(e) {
        if (!isDrawing) return; 
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        changeLineProperty();
        [lastX, lastY] = [e.offsetX, e.offsetY];
      }
  ```
  ```moveTo:``` 지정된 지점에서 새로운 하위 경로를 시작   
  ```lineTo:``` 마지막 지점을 지정된 좌표 lineTo()에 연결하여 현재 하위 경로에 직선을 추가 
  
  mousemove로 좌표가 계속 업데이트되는것을 간과했기때문에 강의를 보면서 lastX,와 e.offesetX로 다르게 설정한걸 가볍게 넘긴 것 같다. 내가 짠 코드에서 수정하려니 원인을 찾는데 시간을 허비했다. 
  이동이 끝나면 lastX,lastY에 각각 event.offset값 할당해줘서  이전 좌표값으로 기억시키기! 

   

### 구조분해 할당
+ 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
선언에서 분리한 할당
+ 변수의 선언이 분리되어도 구조 분해를 통해 값을 할당할 수 있다.

```
//MDN 예제
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```
```
 [lastX, lastY] = [e.offsetX, e.offsetY];
```   
