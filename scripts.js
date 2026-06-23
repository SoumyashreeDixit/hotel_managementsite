/*----------------------------
Developed by- Soumyashree Dixit
position- Web Designer/Developer
Date-02/04/2026 
------------------------------*/
//header-text
const text = document.getElementById("moving-text");
const container = document.querySelector("#scroll-top .container");

let pos = container.offsetWidth;

function animateText() {
    pos -= 1.5;

    if (pos < -text.offsetWidth) {
        pos = container.offsetWidth;
    }

    text.style.left = pos + "px";

    requestAnimationFrame(animateText);
}

animateText();

//slider-carousel
document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");

    let currentSlide = 0;
    const dots = [];

    function showSlide(index) {

        slides.forEach(slide =>
            slide.classList.remove("active")
        );

        dots.forEach(dot =>
            dot.classList.remove("active")
        );

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        currentSlide = index;
    }

    slides.forEach((slide, index) => {

        const dot = document.createElement("span");
        dot.classList.add("dot");

        if(index === 0){
            slide.classList.add("active");
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            showSlide(index);
        });

        dotsContainer.appendChild(dot);
        dots.push(dot);
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }, 5000);

});

// Registration-box pop-up

function generateCaptcha() {

    const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let captcha = "";

    for(let i = 0; i < 6; i++){

        captcha += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );

    }

    document.getElementById("captchaBox")
        .textContent = captcha;
}

generateCaptcha();

document
.getElementById("refreshCaptcha")
.addEventListener("click", generateCaptcha);


document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".registration-card");

    const overlay = document.createElement("div");
    overlay.className = "form-overlay";

    document.body.appendChild(overlay);

    const button = document.createElement("div");
    button.className = "mobile-register-btn";
    button.textContent = "Apply Now";

    document.body.appendChild(button);

    const closeBtn = document.querySelector(".close-form");

    button.addEventListener("click", () => {

        form.classList.add("show");
        overlay.classList.add("show");

    });

    overlay.addEventListener("click", () => {

        form.classList.remove("show");
        overlay.classList.remove("show");

    });

    closeBtn.addEventListener("click", () => {

        form.classList.remove("show");
        overlay.classList.remove("show");

    });

});



// hamburger 991px
document.addEventListener("DOMContentLoaded", () => {

    const nav = document.getElementById("header-nav");

    const menuIcon = document.createElement("span");

    menuIcon.id = "menu-toggle";
    menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';

    nav.parentNode.insertBefore(menuIcon, nav);

    menuIcon.addEventListener("click", () => {

        nav.classList.toggle("active");

        if(nav.classList.contains("active")){
            menuIcon.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';
        }else{
            menuIcon.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
        }

    });

});

//program-tab
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.tab;

        tabs.forEach(btn =>
            btn.classList.remove("active")
        );

        contents.forEach(content =>
            content.classList.remove("active")
        );

        tab.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");

    });

});

//partner carousel
function marquee(selector, speed = 0.5){

    const track = document.querySelector(selector);

    if(!track) return;

    track.innerHTML += track.innerHTML;

    let position = 0;
    let isPaused = false;

    track.parentElement.addEventListener("mouseenter", () => {
        isPaused = true;
    });

    track.parentElement.addEventListener("mouseleave", () => {
        isPaused = false;
    });

    function animate(){

        if(!isPaused){

            position -= speed;

            if(position <= -(track.scrollWidth / 2)){
                position = 0;
            }

            track.style.transform =
                `translateX(${position}px)`;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

function reverseMarquee(selector, speed = 0.5){

    const track = document.querySelector(selector);

    if(!track) return;

    track.innerHTML += track.innerHTML;

    let position = -(track.scrollWidth / 2);
    let isPaused = false;

    track.parentElement.addEventListener("mouseenter", () => {
        isPaused = true;
    });

    track.parentElement.addEventListener("mouseleave", () => {
        isPaused = false;
    });

    function animate(){

        if(!isPaused){

            position += speed;

            if(position >= 0){
                position = -(track.scrollWidth / 2);
            }

            track.style.transform =
                `translateX(${position}px)`;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* National Partners */
marquee("#cat-1", 0.8);

/* International Partners */
reverseMarquee("#cat-2", 0.5);

/* Accreditations */
marquee("#cat-3", 0.8);

//counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    if (isNaN(target)) {
        console.error("Invalid data-target:", counter);
        return;
    }

    let current = 0;

    const update = () => {

        current += Math.ceil((target - current) * 0.1);

        if (current < target) {

            counter.textContent = current;

            requestAnimationFrame(update);

        } else {

            counter.textContent = target;
        }
    };

    update();

});

//tabs for admission process
document.addEventListener("DOMContentLoaded", () => {

    const buttons =
    document.querySelectorAll(".nav-btn");

    const navs =
    document.querySelectorAll(".nav-content");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const target =
            button.dataset.nav;

            navs.forEach(nav => {
                nav.classList.remove("active");
            });

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            document
                .getElementById(target)
                .classList.add("active");

            button.classList.add("active");

        });

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".nav-btn");
    const eligibilityText = document.querySelector(".eligibility-text");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const text = button.textContent.trim();

            if (
                text === "Master of Tourism and Hospitality(MTH)"
            ) {

                eligibilityText.textContent =
                "Successfully pass with any stream of Bachelor Degree.";

            }

            else if (
                text === "Certificate Cource in Food Production"
            ) {

                eligibilityText.textContent =
                "Passed the 10th Standard examination from a recognized educational institution.";

            }

            else if (
                text === "Certificate Cource in Bakery & Patisserie"
            ) {

                eligibilityText.textContent =
                "Passed the 10th Standard examination from a recognized educational institution.";

            }
             else if (
                text === "Ph.D in Tourism & Hospitality"
            ) {

                eligibilityText.textContent =
                "Successful completion of a Master's Degree along with fulfillment of UGC norms and qualification in the CGET examination.";

            }

            else {

                eligibilityText.textContent =
                "Successful completion of 10th, +2 or equivalent from a recognized board, with minimum marks of 40%";

            }

        });

    });

});

//events-scroll
window.addEventListener("load", () => {

    const track = document.querySelector(".gallery-track");

    const original = track.innerHTML;

    // keep cloning until width becomes very large
    while(track.scrollWidth < window.innerWidth * 4){
        track.innerHTML += original;
    }

    let pos = 0;
    const speed = 1;

    function animate(){

        pos -= speed;

        const firstGrid =
        track.children[0];

        const firstWidth =
        firstGrid.offsetWidth;

        if(Math.abs(pos) >= firstWidth){

            pos += firstWidth;

            track.appendChild(firstGrid);

        }

        track.style.transform =
        `translateX(${pos}px)`;

        requestAnimationFrame(animate);

    }

    animate();

});

//lighbox script
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
        lightbox.classList.remove("active");
    }
});
document.addEventListener("click", (e) => {
    if(e.target.matches(".gallery-item img")){
       lightbox.classList.add("active");
        lightboxImg.src = e.target.src;
    }
});

//why cgu-Tabs
const mainTabs =
document.querySelectorAll(".main-tab");

const mainContents =
document.querySelectorAll(".main-content");

mainTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target =
        tab.dataset.main;

        mainTabs.forEach(btn => {
            btn.classList.remove("active");
        });

        mainContents.forEach(content => {
            content.classList.remove("active");
        });

        tab.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");

    });

});

//career-subject
const cards =
document.querySelectorAll(".career-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        cards.forEach(c=>{
            c.classList.remove("active");
        });

        card.classList.add("active");

    });

});
//smooth scroll
document.querySelectorAll('#header-nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute('href'));

        const headerHeight = 80; 

        const targetPosition =
        target.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

    });

});

//back to top button
const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

//preloader
window.addEventListener("load", () => {

    setTimeout(() => {

        document
        .getElementById("preloader")
        .classList.add("hide");

    }, 1000);

});
