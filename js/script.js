window.addEventListener('scroll',()=>[
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY >300)
])

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
    })
})


const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");



menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});


const closeNav = () =>{
    menu.style.display = "none";
    closebtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closebtn.addEventListener("click",closeNav);