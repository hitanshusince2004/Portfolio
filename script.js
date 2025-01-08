// /* ----- NAVIGATION BAR FUNCTION ----- */
// function myMenuFunction(){
//     var menuBtn = document.getElementById("myNavMenu");

//     if(menuBtn.className === "nav-menu"){
//       menuBtn.className += " responsive";
//     } else {
//       menuBtn.className = "nav-menu";
//     }
//   }

// /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
//   window.onscroll = function() {headerShadow()};

//   function headerShadow() {
//     const navHeader =document.getElementById("header");

//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

//       navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
//       navHeader.style.height = "70px";
//       navHeader.style.lineHeight = "70px";

//     } else {

//       navHeader.style.boxShadow = "none";
//       navHeader.style.height = "90px";
//       navHeader.style.lineHeight = "90px";

//     }
//   }


// /* ----- TYPING EFFECT ----- */
//  var typingEffect = new Typed(".typedText",{
//     strings : ["Designer","Youtuber","Developer"],
//     loop : true,
//     typeSpeed : 100, 
//     backSpeed : 80,
//     backDelay : 2000
//  })


// /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
//  const sr = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 2000,
//         reset: true     
//  })

// /* -- HOME -- */
// sr.reveal('.featured-text-card',{})
// sr.reveal('.featured-name',{delay: 100})
// sr.reveal('.featured-text-info',{delay: 200})
// sr.reveal('.featured-text-btn',{delay: 200})
// sr.reveal('.social_icons',{delay: 200})
// sr.reveal('.featured-image',{delay: 300})


// /* -- PROJECT BOX -- */
// sr.reveal('.project-box',{interval: 200})

// /* -- HEADINGS -- */
// sr.reveal('.top-header',{})

// /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

// /* -- ABOUT INFO & CONTACT INFO -- */
// const srLeft = ScrollReveal({
//   origin: 'left',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })

// srLeft.reveal('.about-info',{delay: 100})
// srLeft.reveal('.contact-info',{delay: 100})

// /* -- ABOUT SKILLS & FORM BOX -- */
// const srRight = ScrollReveal({
//   origin: 'right',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })

// srRight.reveal('.skills-box',{delay: 100})
// srRight.reveal('.form-control',{delay: 100})



// /* ----- CHANGE ACTIVE LINK ----- */

// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach(current =>{
//     const sectionHeight = current.offsetHeight,
//         sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute('id')

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

//         document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

//     }  else {

//       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

//     }
//   })
// }

// window.addEventListener('scroll', scrollActive)
// Navigation Bar Toggle Function
function toggleMenu() {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

// Add Shadow on Navigation Bar While Scrolling
window.addEventListener('scroll', headerShadow);

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// Typing Effect
new Typed(".typedText", {
  strings: ["Designer", "Youtuber", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

// Scroll Reveal Animations
const scrollRevealConfig = {
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
};

ScrollReveal().reveal('.featured-text-card', scrollRevealConfig);
ScrollReveal().reveal('.featured-name', { ...scrollRevealConfig, delay: 100 });
ScrollReveal().reveal('.featured-text-info', { ...scrollRevealConfig, delay: 200 });
ScrollReveal().reveal('.featured-text-btn', { ...scrollRevealConfig, delay: 200 });
ScrollReveal().reveal('.social_icons', { ...scrollRevealConfig, delay: 200 });
ScrollReveal().reveal('.featured-image', { ...scrollRevealConfig, delay: 300 });
ScrollReveal().reveal('.project-box', { ...scrollRevealConfig, interval: 200 });
ScrollReveal().reveal('.top-header', scrollRevealConfig);

// Scroll Reveal Left and Right Animations
ScrollReveal().reveal('.about-info', { ...scrollRevealConfig, origin: 'left', delay: 100 });
ScrollReveal().reveal('.contact-info', { ...scrollRevealConfig, origin: 'left', delay: 100 });
ScrollReveal().reveal('.skills-box', { ...scrollRevealConfig, origin: 'right', delay: 100 });
ScrollReveal().reveal('.form-control', { ...scrollRevealConfig, origin: 'right', delay: 100 });

// Change Active Link on Scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode is already enabled in local storage
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Toggle theme and save to local storage
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

