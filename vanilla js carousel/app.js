const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener('transitionend', () => {
  console.log(carouselImages[counter]);
console.log(-size * counter);

  if (carouselImages[counter].id === 'lastClone') {
    counter = carouselImages.length - 2;
    carouselSlide.style.transition="none"
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
  if (carouselImages[counter].id === 'firstClone') {
    counter = carouselImages.length -counter;
    carouselSlide.style.transition="none"
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
});
