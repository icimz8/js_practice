##  Flex Panel Gallery
 
 ### 배운 것    
+ 처음에는 클릭이벤트로만 했다가 원본답안(클릭시 이미지가 커지고 글자가 내려옴)과 결과랑 달랐다. 앞서 배운 transitionend 를 떠올려서 이벤트를 다르게 처리 

 ```
    const panels = document.querySelectorAll('.panel');
    
    //변경 전
    panels.forEach(panel => panel.addEventListener('click', (e)=>{
      panel.classList.toggle('open');
      panel.classList.toggle('open-active');
    }));
    //변경 후
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
    
    function toggleActive(e){
      // console.log(e.propertyName);
      if(e.propertyName =='flex-grow'){
        this.classList.toggle('open-active');
      }

    }
 ```
+ safari에서는 프로퍼티네임이 flex로, flex-grow로 입력할 시 에러    
```e.propertyName =='flex-grow'``` -> ```e.propertyName.includes('flex')``` 
 
```
//최종
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    function toggleOpen(e) {
        this.classList.toggle('open');
    }

    function toggleActive(e) {
      // console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }
  ```