//tabs price
const menuItem = document.querySelectorAll('.price__menu-item');
const tabsItems = document.querySelectorAll('.price__text-container');

menuItem.forEach(function(item) {
  item.addEventListener('click', function() {

    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    menuItem.forEach(function(item) {
      item.classList.remove('active');

    });

    tabsItems.forEach(function(item) {
      item.classList.remove('active');

    });

    currentBtn.classList.add('active');
    currentTab.classList.add('active');

  });
});

// tabs location

const locationItem = document.querySelectorAll('.location__item');
const locationContent = document.querySelectorAll('.location__content');

locationItem.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtnMap = item;
    let tabIdMap = currentBtnMap.getAttribute('data-tab');
    let currentTabMap = document.querySelector(tabIdMap);


    locationItem.forEach(function(item) {
      item.classList.remove('active');
    })

    locationContent.forEach(function(item) {
      item.classList.remove('active')
    })

    currentBtnMap.classList.add('active');
    currentTabMap.classList.add('active');


  })
})

// slider portfolio

const sliderImages = document.querySelectorAll('.portfolio__slide');
const sliderLine = document.querySelector('.portfolio__slider-line');
const sliderDots = document.querySelectorAll('.portfolio__slider-dot');
const sliderBtnNext = document.querySelector('.portfolio__slider-next');
const sliderBtnPrev = document.querySelector('.portfolio__slider-prev');

let sliderCount = 0;
let sliderWidth;

//адаптивность слайдера
window.addEventListener('resize', showSlide);

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// задает ширину изображений и sliderLine
function showSlide() {
  sliderWidth = document.querySelector('.portfolio__slider').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
  sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
}

showSlide();

// слайд вперед

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;

  rollSlider();
  thisSlide(sliderCount);
}

// слайд назад

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length -1;

  rollSlider();
  thisSlide(sliderCount);
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

//указываем какой слайд по счету активен
function thisSlide(index) {
  sliderDots.forEach(item => item.classList.remove('active-dot'));
  sliderDots[index].classList.add('active-dot');
}

// вешаем клик на dot
sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  })
})

