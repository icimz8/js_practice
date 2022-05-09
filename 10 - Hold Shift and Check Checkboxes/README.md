##  Hold Shift and Check Checkboxes
 
 ### 배운 것    
+  event.shiftKey , 변수 활용하기   

+ checkbox```.checked``` : 체크박스에 체크된상태를 나타냄   

 ### KeyboardEvent```.shiftKey```
 + shift키가 눌러져 있는지 아닌지에 따라 T/F (boolean)값을 반환

 ### 복습    
 
```
    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
    let lastChecked;

    function handleCheck(e) {
      let inBetween = false;

      if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
          console.log(checkbox);
          if(checkbox === this || checkbox === lastChecked){
            inBetween = !inBetween;
            console.log('starting to check them inbetween');
          }
          if(inBetween){
            checkbox.checked =true;
          }
        });
      }
      lastChecked = this;
    }
    
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
  ```   
+   가져온 체크박스들의 요소에 클릭이벤트와  콜백함수로(handleCheck)를 실행 
+    최근에 선택한 키(lastChecked)를 전역변수로 선언하고, 함수내에 ```lastChecked = this;```을 써서 버튼 클릭할때마다 이 키를 업데이트해준다.
+  ```handleCheck```함수는 shift키가 눌러지고 체크된상태일때 가져온 체크박스들을 루프를 돌며 확인한다.
+ lastChecked를 만나면 inBetween을 true로 한다. 루프를 돌며 shift + 클릭한 요소인 this를 만나기전까지 true가 되며, this를 만나면 inBetween이 false가 된다. 
+ 이때 checkbox.checked =true가 되어 체크박스가 체크된다.

   