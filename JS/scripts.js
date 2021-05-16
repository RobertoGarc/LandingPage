const hamburguer=document.getElementById('nav-hamburger');

const navContainer=document.getElementById('nav-container');

const links=document.querySelectorAll('.nav-link');

hamburguer.addEventListener("click",()=>{
    navContainer.classList.toggle("open");
});

for(const link of links){
    link.addEventListener("click",()=>{
        navContainer.classList.toggle("open");
    })
}

