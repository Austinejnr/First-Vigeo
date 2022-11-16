

new Swiper ("#swiper-1", {
    effect: "fade",
    autoplay: {
        delay:2500,
        disableOnInteraction: false
    },
    pagination: {
            el: "#swiper-1 .swiper-pagination",
            clickable: true
    },
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true
    },
})

var hamburger = document.querySelector(".hamburger-container")
var mobilelinkscontainer = document.querySelector(".mobilelinks-container")

console.log(hamburger)


function addandremove (){
    hamburger.classList.toggle('showburger')
    mobilelinkscontainer.classList.toggle('showmobilelinks')
}


new Swiper ("#swiper-2", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 24,
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true
},
    navigation: {
        nextEl: "#nav-right",
        prevEl: "#nav-left "
    }
})