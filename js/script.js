let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.nav__menu');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', 
  function () {
    burger.classList.toggle('burger-active');

    menu.classList.toggle('nav__menu-active');

    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', 
  
    function () {

      burger.classList.remove('burger-active');

      menu.classList.remove('nav__menu-active');

      document.body.classList.remove('stop-scroll');
    });
})

$(function(){
  $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function(){
    $(this).find(".dropdown-toggle").toggleClass("dropdown-toggle--active");
  });
});

const hero__swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  interval: 5000,
  speed: 1500,
})

const gallery__swiper = new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  fadeSpeed: 300,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 37
    },


    1024: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
})

const project__swiper = new Swiper('.project__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 32
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
})

const developments__swiper = new Swiper('.developments__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 1,
  fadeSpeed: 300,  
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: '.swiper-pag',
    clickable: true
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },

      1540: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },
})

window.addEventListener('DOMContentLoaded', function () {
  const element = document.querySelector('.custom-select');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
});


const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

const validation = new JustValidate(".form", {
  errorLabelStyle: {
    color: "#D11616",
    textDecoration: "underlined"
  }
});

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Вы не ввели имя"
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Не короче 3 символов"
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Слишком длинное имя"
    }
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Вы не ввели телефон"
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.length === 10;
      },
      errorMessage: "Недопустимый формат"
    }
  ]);

  $( function() {
    $( "#accordion" ).accordion({
      active: false,
      heightStyle: "content",
      active: 0,
      collapsible: true
    });
  } );

let tabsBtn = document.querySelectorAll('.catalog__btn');
let tabsItem = document.querySelectorAll('.catalog__link-content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('catalog__btn_active')});
    e.currentTarget.classList.add('catalog__btn_active');

    tabsItem.forEach(function(element){ element.classList.remove('catalog__link-content_active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__link-content_active');
  });
});

const picturesBtns = document.querySelectorAll('.gallery__swiper-slide');
const modalOverlay = document.querySelector('.gallery__modal-overlay ');
const modals = document.querySelectorAll('.gallery__modal');
const closeModalBtns = document.querySelectorAll('.gallery__modal-btn');

picturesBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('gallery__modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal--visible');
    modalOverlay.classList.add('gallery__modal-overlay--visible');
  });
});

closeModalBtns.forEach((el) => {
  el.addEventListener('click', () => {

    modalOverlay.classList.remove('gallery__modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('gallery__modal--visible');
    });
  });
});


ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 14,
    controls: []
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.758468, 37.601088]
    }
  });
  var placemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-13, -42]
  });
  myMap.geoObjects.add(placemark);
}

document.querySelector("#top-search").addEventListener("click", 
  function () {
    document.querySelector("#top-form").classList.toggle("active");
    document.querySelector("#top-search").classList.toggle("act");
    document.querySelector("#menu").classList.toggle("act");
    document.querySelector(".header__link").classList.toggle("act");
    document.querySelector(".burger").classList.toggle("act");
})

document.querySelector("#close").addEventListener("click", 
  function () {
    document.querySelector("#top-form").classList.toggle("active");
    document.querySelector("#top-search").classList.toggle("act");
    document.querySelector("#menu").classList.toggle("act");
    document.querySelector(".header__link").classList.toggle("act");
    document.querySelector(".burger").classList.toggle("act");
})