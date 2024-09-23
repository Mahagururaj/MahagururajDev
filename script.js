function loaderAnimation() {
    var loader = document.querySelector(".loader");

    setTimeout(function () {
        loader.style.top = "-100%";

        homenameAime();
    }, 4000);
}

function homenameAime() {
    var tl = gsap.timeline();
    var Name = document.querySelectorAll(".zoom");
    gsap.from(".nav-part a", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power4.inOut",
        stagger: 0.2,
        delay: 0.5
    })
    tl.from("#devname", {
        opacity: 0,
        x: -80,
        delay: 0.4,
        duration: 0.5,
        stagger: 2
    });
    tl.from("#devname1", {
        opacity: 0,
        x: 80,
        delay: 0.4,
        duration: 0.5,
        stagger: 2
    });
    tl.from("#devname2", {
        opacity: 0,
        x: -80,
        delay: 0.4,
        duration: 0.5,
        stagger: 2
    });

    Name.forEach(card => {
        tl.to(card, {
            scale: 0.7,
            scrollTrigger: {
                trigger: card,
                start: "top 15%",
                end: "bottom 15%",
                scrub: true
            }

        })
    })


}

loaderAnimation();

var main = document.querySelector(".main");
var cursor = document.querySelector("#cursor");
var h1s = document.querySelectorAll("#home h1");
var text = document.querySelectorAll("#projectlist a");
main.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 1,
        ease: "back.Out"

    })
})


h1s.forEach((h1) => {
    h1.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 4,
        });
    });
    h1.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
        });
    });
});


text.forEach((c) => {
    c.addEventListener("mouseenter", () => {
        cursor.innerHTML = "Move to Click"
        gsap.to(cursor, {
            scale: 2,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            fontSize: "8px",
            color:"#0da34e",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",  
            textAlign: "center"   
        });
    });
    c.addEventListener("mouseleave", () => {
        cursor.innerHTML = " "
        gsap.to(cursor, {
            scale: 1.8,
            backgroundColor:"#0a66c2"
            
        });
    });
});




function moveAnime() {
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

function cardskillAnime() {
    VanillaTilt.init(document.querySelectorAll(".skill-elem-card, .skill-elem-card1"), {
        max: 25,
        speed: 400
    });
}
cardskillAnime()


function textcolorAnime() {
    var paragraphs = document.querySelectorAll(".myintro p");

    paragraphs.forEach(function (paragraph) {
        var words = paragraph.textContent.split(" ");
        var html = "";

        words.forEach(function (word) {
            html += `<span>${word}</span> `;
        });

        paragraph.innerHTML = html.trim();
    });

    gsap.to(".myintro p span", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 10%",
            end: "bottom 80%",
            scroller: "body",
            duration: 0.8,
            delay: 2,
            scrub: 2,
        },
        stagger: 1,
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
        anchor.addEventListener('click', function (e) {
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

function mobileNav() {
    const navToggle = document.querySelector('.hamburger');
    const navPart = document.querySelector('.nav-mobile');
    let activeMenu = null; // Track which menu is currently open

    // Toggle the menu based on current active state
    navToggle.addEventListener('click', () => {
        if (activeMenu === 'open') {
            closeMenu(); // Close the menu if it is open
        } else {
            openMenu(); // Open the menu if it is closed
        }
    });

    // Function to open the menu
    function openMenu() {
        navPart.style.display = 'flex';
        gsap.to(navPart, {
            duration: 0.5,
            left: '0',
            opacity: 1,
            ease: "power2.out"
        });
        navToggle.classList.add('open');
        activeMenu = 'open';
    }

    // Function to close the menu
    function closeMenu() {
        gsap.to(navPart, {
            duration: 0.5,
            left: '-100%', // Slide out of view
            opacity: 0,
            ease: "power2.in",
            onComplete: () => {
                navPart.style.display = 'none';
            }
        });
        navToggle.classList.remove('open');
        activeMenu = null; // Reset active menu
    }

}
mobileNav()