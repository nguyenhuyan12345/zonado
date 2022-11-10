const swiper = new Swiper('.swiper', {});

const swiper2 = new Swiper('.head-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const productSwiper = new Swiper('.product-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    // slidesPerGroup: 2,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
