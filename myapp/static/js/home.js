document.addEventListener('DOMContentLoaded', function () {

    const newswiper = new Swiper('.swiper1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView:1,
        breakpoints: {
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
        }
    });
    const NewSwiper = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView:1,
    });
});
