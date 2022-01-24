// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});


function estaVisivel(el) {
    const posicoes = el.getBoundingClientRect();
    const inicio = posicoes.top;
    const fim = posicoes.bottom;
    let estaVisivel = false
    
    if((inicio >= 0) && (fim <= window.innerHeight)) {
            estaVisivel = true;
    }
    
    return estaVisivel;
    
}

$(document).ready(function () {
  const p = document.querySelector("#intro")
  if (!estaVisivel(p)) {
    $('.navbar').removeClass("navbar-expand-lg fixed-top navbar-scroll");
    $('.navbar').addClass("navbar navbar-expand-lg navbar-light bg-white fixed-top");
  }
});


$(window).scroll(function () {
  const p = document.querySelector("#about")
  if (estaVisivel(p)) {
    $('.navbar').removeClass("navbar-expand-lg fixed-top navbar-scroll");
    $('.navbar').addClass("navbar navbar-expand-lg navbar-light bg-white fixed-top");
  } else if ($(this).scrollTop() >= 10 && $(this).scrollTop() <= 500) {
    $('.navbar').removeClass("navbar-light bg-white fixed-top");
    $('.navbar').addClass("navbar-expand-lg fixed-top navbar-scroll");
  } 
});