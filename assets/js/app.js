
$(document).ready(function() {
    AOS.init();
     $('.icecream-list ul').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  $('.testi-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
 
 });

const header = document.querySelector("header")
 window.addEventListener(("scroll"),(evt)=>{
   if( document.documentElement.scrollTop > 70){
     header.classList.add("sticky")
     console.log(header)}
     else {
       header.classList.remove("sticky")
     }
   
 })