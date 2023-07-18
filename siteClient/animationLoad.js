// script animation chargement

let preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    preloader.classList.add("hidden")
    let params = new URLSearchParams(location.search);
    let chargement = params.get('chargement');
    console.log(params)
    console.log(chargement)
});


const l1 = document.querySelector('.souligner')
const logo = document.querySelector('.logo')
const fondEcran = document.querySelector('.header_fond')
const fondEcran2 = document.querySelector('.header_fond2')
const slogan = document.querySelectorAll('.slogan span')

window.addEventListener('load', () => {

    const TL = gsap.timeline({ paused: true });

    let params = new URLSearchParams(location.search);
    let chargement = params.get('chargement');
    let animation;

    TL
        .from(logo, .7, { rotate: 200, opacity: 0, ease: "power2.out" }, 0.2)
        .from(l1, .6, { width: 0, ease: "power2.out" }, 0.6, '-=1.6')
        .from(fondEcran, 1.1, { opacity: 1, ease: "power2" }, 1.5, '-=0.9')
        .from(l1, 0.9, { width: 1, ease: "power2.out" }, 1.9, '-=0.7')
        .staggerFrom(slogan, .6, { opacity: 0, ease: "power2.out" }, .07, '-=1')


    if (chargement !== "non") {
        animation = TL.play();
    }
    
    else {
        TL.progress(1);
    }


})