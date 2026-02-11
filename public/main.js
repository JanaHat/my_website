//Typewriting section
const typedSpan = document.querySelector('.typing');
const texts = ['Developer.', 'Designer.', 'Creator.'];
const typingDelay = 250;
const erasingDelay = 150;
const newTextDelay = 1500;
let index = 0;
let charIndex = 0;


function type() {
    if(charIndex < texts[index].length) {
        typedSpan.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        //erase
        setTimeout(erase, newTextDelay);
    }
};

function erase() {
    if(charIndex > 0) {
        typedSpan.textContent = texts[index].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        // type
        index++;
        if(index >= texts.length) index = 0;{
            
            setTimeout(type, typingDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay);
});

//Burger menu section
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const setMenuState = (isOpen) => {
        burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    };
    
    burger.addEventListener('click',() => {
        //toggle nav
        const isOpen = nav.classList.toggle('nav-active');
        setMenuState(isOpen);

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            } 
        }); 
        //Burger animation
        burger.classList.toggle('toggle');

    });

    
    //
    nav.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            setMenuState(false);
        }
    });
    
    
}

navSlide();





