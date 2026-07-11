let menu=document.querySelector('.navbar-menu');
let toggle=document.querySelector('.menu-icon i');
let menuLink=document.querySelectorAll('.navbar-menu li a')
toggle.addEventListener('click',()=>{
    if(toggle.classList.contains('ri-menu-line')){
        menu.classList.add('active')
        toggle.classList.remove('ri-menu-line')
        toggle.classList.add('ri-close-line')
    }else{
        menu.classList.remove('active')
        toggle.classList.add('ri-menu-line')
        toggle.classList.remove('ri-close-line')
    }
})

menuLink.forEach((e)=>{
    e.addEventListener('click',()=>{
        menu.classList.remove('active');
        toggle.classList.add('ri-menu-line');
        toggle.classList.remove('ri-close-line');
    })
})


const scrollRevealOptions={
    origin:'bottom',
    duration:1000,
    distance:'30px'
}

ScrollReveal().reveal(".main-content h1", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".main-content p", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".main-content .card", {
  ...scrollRevealOptions,
  delay: 2000,
});
ScrollReveal().reveal(".main-image .tag1", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".main-image .tag2", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".main-image .tag3", {
  ...scrollRevealOptions,
  delay: 2000,
});
ScrollReveal().reveal(".main-image .tag4", {
  ...scrollRevealOptions,
  delay: 2500,
});
ScrollReveal().reveal(".main-image img", {
  ...scrollRevealOptions,
  delay: 500,
  origin:'right'
});
