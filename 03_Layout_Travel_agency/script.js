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