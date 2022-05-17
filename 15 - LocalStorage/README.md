## LocalStorage

- localStorage 사용법

## 복습(알게된 것)   

+ ``` HTMLFormElement.reset()```: 폼을 초기하는 form 객체에서 제공하는 표준 메서드   

### this이용
```
//before
  let item = addItems.querySelector('input').value;

//after
  let text =(this.querySelector('[name=item]')).value;
  const item = {
    text,  //text: text, ES6+그대로받으면 축약 가능 
    done: false
  }
```
+ 호출하는 곳에 this바인딩되므로 this로 하면 재사용하기 좋음

### localStorage

```localStorage``` : 데이터를 사용자 로컬에 보존하는 방식
```
localStorage.setItem('items', JSON.stringify(items));
```
setItem메소드 사용시 문자열로 입력해야한다.

- JSON.stringify() 메소드는 인수로 객체를 받는다. 받은 객체는 문자열로 치환됨
- JSON.parse() 메소드는 문자열을 인수로 받는다. 받은 문자열을 객체로 치환됨

```
//before
    let items = [];
    const loadItemList = localStorage.getItem('items');
    if (loadItemList !== null) {
      const parsedItemList = JSON.parse(loadItemList);
      items = parsedItemList;
    }
//after
    const items = JSON.parse(localStorage.getItem('items')) || [];

```


### 페이지 리로드시 checked상태 유지시키기
다 구현한줄 알았는데 리로드할때 checked상태유지하는것을 놓쳤다.
```
    function toggleDone(e) {
      if (!e.target.matches('input')) return; //skip this unless it's an input
      const el = e.target;
      const index = el.dataset.index;
      console.log(index);
      items[index].done = !items[index].done;
      localStorage.setItem('items', JSON.stringify(items));
      populateList(items, itemsList);
    }

```
+ item에 done 속성을 만들고, 클릭이벤트마다 done속성을 toggle한다. toggle한 값을 업데이트해주기위해 로컬스토리지 와 populate함수 실행   

<br/>

참고 :https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage