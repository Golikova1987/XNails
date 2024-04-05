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

// попап

const openPopup = document.querySelectorAll('.open-popup');
const closePopup = document.getElementById('close-popup');
const popup = document.getElementById('popup');

openPopup.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault()
    popup.classList.add('open');
  })
})

closePopup.addEventListener('click', () => {
    popup.classList.remove('open');
})

// бургер меню

const buttonBurger = document.querySelector('.header__burger-button');
const menuBurger = document.querySelector('.header');
const linkBurger = document.querySelectorAll('.header__nav-item');

buttonBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('open')
})

linkBurger.forEach((link) =>
  link.addEventListener('click', () => {
    buttonBurger.classList.remove('open')
    menuBurger.classList.remove('open')
  }))

// валидация формы

function validation(form) {

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove()
      parent.classList.remove('error')
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text

    parent.classList.add('error')

    parent.append(errorLabel)
  }

  let result = true;

  const allInputs = form.querySelectorAll('input')

  allInputs.forEach(input => {

    removeError(input)

    if (input.dataset.minLength) {

      if (input.value.length < input.dataset.minLength) {

        removeError(input)

        createError(input,`Минимальное количество символов: ${input.dataset.minLength}`)
        result = false
      }

    }

    if (input.dataset.maxLength) {

      if (input.value.length > input.dataset.maxLength) {

        removeError(input)

        createError(input,`Максимальное количество символов: ${input.dataset.maxLength}`)
        result = false
      }

    }

    if (input.dataset.required == "true") {

      if (input.value == "") {

        removeError(input)
        createError(input,'Поле не заполнено')
        result = false
      }

    }

  })

  return result
}

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault()

  if(validation(this) == true) {

    alert('Успех')
  }
})


