function loaderAnimation(){
    var loader = document.querySelector(".loader")
  setTimeout(function(){
    loader.style.top="-100%"
  
  },4000)
  }
  loaderAnimation()

function homenameAime(){
    var nameDev = document.querySelectorAll("#home #devname");

    nameDev.forEach(function(elem) {
        var words = elem.textContent.split("");
        var html = "";
        
        words.forEach(function(word) {
            html += `<span>${word}</span> `;
        });
    
        elem.innerHTML = html.trim(); 
    });
    gsap.from("#home #devname >span", {
         opacity: 0,
         y: -50,
         duration: 1,
         stagger: 0.1
        
        })
}

homenameAime()


function moveAnime(){
    gsap.to("#name-div h1", {
        transform: "translateX(calc( -100% - 6vw - 4px))",
          scrollTrigger: {
            trigger: "#name-div",
            scroller: "body",
            scrub: 0.7,
          }
        })
}
moveAnime()

function cardskillAnime(){
    VanillaTilt.init(document.querySelectorAll(".skill-elem-card, .skill-elem-card1"), {
        max: 25,
        speed: 400
    });
}
cardskillAnime()


function textcolorAnime() {
    var paragraphs = document.querySelectorAll(".myintro p");

    paragraphs.forEach(function(paragraph) {
        var words = paragraph.textContent.split(" ");
        var html = "";
        
        words.forEach(function(word) {
            html += `<span>${word}</span> `;
        });
    
        paragraph.innerHTML = html.trim(); 
    });

gsap.to(".myintro p span",{
    scrollTrigger:{
        trigger:"#about",
        start:"top bottom",
        end:"bottom 80%",
        scroller:"body",
        duration:0.8,
        delay:2,
        scrub:2,
    },
    stagger:1,
    color: "#ffff"

})
}
textcolorAnime()

function pageActive() {
    let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-part a , .nav-mobile a');

window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        let top = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.nav-part a[href*=' + id + ']').classList.add('active');
        }
    });
};

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

}

pageActive();

