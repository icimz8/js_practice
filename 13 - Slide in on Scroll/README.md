##  Slide in on Scroll
 ### 배운 것    
+  scroll - WEP API들 (브라우저에서 스크롤 정보를 가져오는 방법)
  
### 복습
 스크롤마다 함수를 호출하는것은 무수히 많은 함수를 호출하게되고 유지관리에도 좋지않다.  
```Debounce```는 연속적으로 호출하는 함수들 중  마지막 함수(또는 제일 처음)만 호출하도록 하는 것, wait 값을 변경해서 일정시간마다 호출할수 있다.   
```
 function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
```
: 여기서 함수구조가 잘 이해가 안 간다..   
<br/>   

```
 const sliderImages = document.querySelectorAll('.slide-in');

    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      })
      // console.count(e);
    }
    window.addEventListener('scroll', debounce(checkSlide));
```
 
```slideInAt``` 슬라이드를띄우고싶은 좌표지점)  현재 사용자 화면의 가장 밑인 지점에서 해당 이미지높이의 반만큼 위로 올라간 지점의 y좌표   

```window.scrollY``` 는 스크롤에따른 (현재) 뷰포트 위쪽 모서리의 Y좌표를 반환  
```window.innerHeight``` 는 수평스크롤 막대 높이 포함한 창의 내부 높이
```sliderImage.height /2``` 는 이미지의 중간 높이   

```isHalfShown ``` slideInAt을 이미지의 가장 위의 Y좌표와 비교했을때 스크롤을 통해 반이상이 보이는지를 말한다.
 
```.offsetTop``` 제일 위에서 이미지까지 얼마나 떨어져있는지 

```imageBottom``` 이미지의 가장위 Y좌표와 이미지의 높이를 더해 가장 아랫부분 y좌표를 구함

```const isNotScrolledPast = window.scrollY < imageBottom;```   
스크롤해 지나갔는지 판별함   
<br>
```   
if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
```
이미지가 반이상 보이고, 아직 스크롤해 지나가지않았다면 보이도록 한다.


 