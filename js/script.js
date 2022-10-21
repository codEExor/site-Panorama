// плавный scroll для ссылки на меню
let anchors = document.querySelectorAll('.header a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            anchorId = this.getAttribute('href')
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}


//menu adaptive
$(function() {

    $('.menu__btn, .menu_list a').on('click', function() {
        $('.navbar').toggleClass('navbar--active');
    });

});

//pop-up window bron
let openPopUp = document.querySelector('.open_pop_up');
let closePopUp = document.querySelector('.pop_up_close');
let popUp = document.querySelector('.pop_up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

//pop-up window bron
let openPopUpDelivery = document.querySelector('.open_pop_up-Delivery');
let closePopUpDelivery = document.querySelector('.pop_up_close-Delivery');
let popUpDelivery = document.querySelector('.pop_up-Delivery');

openPopUpDelivery.addEventListener('click', function(e) {
    e.preventDefault();
    popUpDelivery.classList.add('active');
})

closePopUpDelivery.addEventListener('click', () => {
    popUpDelivery.classList.remove('active');
})



//SWIPER slider
new Swiper('.image-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // pagination: {
    //     el: '.swiper-pagination',

    //     clickable: true,
    // },
    //loop: true,
    //centeredSlides: true,
    //initialSlide: 2,

    breakpoints: {
        slidesPerView: 3,
        spaceBetween: 40,

        300: {
            slidesPerView: 1,
            spaceBetween: 25,

            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true
            },
            // pagination: {
            //     el: '.swiper-pagination',

            //     clickable: true,
            // },
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 35,

        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});