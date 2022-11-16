

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