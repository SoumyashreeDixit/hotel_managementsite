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




//pop-up text
const lightboxInfo =
document.createElement("div");

lightboxInfo.className =
"lightbox-info";

const lightboxTitle =
document.createElement("h3");

lightboxTitle.className =
"lightbox-title";

const lightboxDesc =
document.createElement("p");

lightboxDesc.className =
"lightbox-desc";

lightboxInfo.appendChild(lightboxTitle);
lightboxInfo.appendChild(lightboxDesc);

lightbox.appendChild(lightboxInfo);

document.addEventListener("click", (e) => {

    if(e.target.matches(".gallery-item img")){

        const fileName =
        e.target.src.split("/").pop();

        lightbox.classList.add("active");

        lightboxImg.src =
        e.target.src;

        if(eventDetails[fileName]){

            lightboxTitle.textContent =
            eventDetails[fileName].title;

            lightboxDesc.textContent =
            eventDetails[fileName].desc;

        }

    }
    console.log(fileName,"hello")

});
const eventDetails = {

    "e-1.JPG": {
        title: "State-of-the-Art Culinary Training Kitchen",
        desc: "The Basic Training Kitchen at CV Raman Global University (CGU), Bhubaneswar, offers students a world-class, industry-standard learning environment where they develop practical culinary skills, food safety expertise, and professional kitchen management competencies through hands-on experiential training guided by experienced faculty and industry experts."
    },

    "e-2.JPG": {
        title: "Learning the Art, Mastering the Craft",
        desc: "The Bakery and Confectionery Laboratory at CV Raman Global University (CGU), Bhubaneswar, provides students with hands-on training in professional baking, pastry production, cake decoration, and dessert presentation, fostering creativity, precision, and industry-ready culinary skills."
    },

    "e-3.JPG": {
        title: "One Nation, Many Talents, Unlimited Possibilities",
        desc: "Representing diverse regions and institutions from across India, participants of the India Skills National Competition showcase excellence, professionalism, and world-class hospitality competencies, reflecting the spirit of skill development, innovation, and national pride."
    },

    "e-4.JPG": {
        title: "Empowering Future Hospitality Leaders to Shine",
        desc: "At CV Raman Global University (CGU), Bhubaneswar, students are empowered to achieve excellence beyond the classroom, earning recognition at prestigious state and national skill competitions through their dedication, professional competence, and commitment to hospitality excellence, reflecting the university’s culture of achievement and leadership."
    },

    "e-5.JPG": {
        title: "From Campus Excellence to Global Recognition",
        desc: "At CV Raman Global University (CGU), Bhubaneswar, our award-winning students exemplify excellence in hospitality education, earning prestigious accolades at state, national, and international skill competitions, including representing India on global platforms such as WorldSkills, thereby reflecting the university’s commitment to nurturing future industry leaders."
    },

    "e-6.jpeg": {
        title: "Where Visionary Leadership Meets Culinary Excellence",
        desc: "The India Skills 2026 Regional Competition at CV Raman Global University was honoured by the presence of the Honourable Vice Chancellor and renowned celebrity chef Dr. Chef Avin Thaliath, whose leadership, expertise, and inspiration elevated the event, fostering excellence, innovation, and professional growth among aspiring hospitality professionals."
    },

    "e-7.jpeg": {
        title: "Honoured by the Chief Minister, Driven by Excellence",
        desc: "The Faculty of Tourism & Hospitality at CV Raman Global University (CGU), Bhubaneswar, proudly celebrates the remarkable achievement of its student, who was honoured by the Honourable Chief Minister of Odisha for securing a medal at the Odisha Skills Competition, reflecting exceptional talent, dedication, and excellence in hospitality skills while bringing pride to the university and the state."
    },

    "e-8.jpg": {
        title: "Medals of Excellence, Milestones of Success",
        desc: "The Faculty of Tourism & Hospitality at CV Raman Global University (CGU), Bhubaneswar, takes pride in its accomplished students who have earned medals and accolades at prestigious state, national, and international skill competitions, demonstrating exceptional talent, professionalism, and a commitment to excellence while bringing laurels to the university and the nation."
    },

    "e-9.JPG": {
        title: "Proudly Representing India, Inspiring the World",
        desc: "A proud alumnus of the Faculty of Tourism & Hospitality, CV Raman Global University, who represented India at the prestigious WorldSkills Competition in France in the Restaurant Service category, exemplifying exceptional professionalism, technical expertise, and service excellence while showcasing Indian hospitality talent on the global stage."
    },

    "e-10.JPG": {
        title: "From Aspiration to Achievement, We Create Champions",
        desc: "At CV Raman Global University (CGU), Bhubaneswar, student achievements stand as a testament to excellence, determination, and professional competence, with learners earning accolades at prestigious skill competitions and demonstrating the knowledge, confidence, and industry-ready expertise that define future leaders of the hospitality and tourism sector."
    },

    "e-11.JPG": {
        title: "Welcoming Excellence, Showcasing India's Finest Hospitality Talent",
        desc: "Bringing together talented hospitality students from diverse regions of India, the India Skills National Competition – Hotel Reception category showcases excellence in guest service, communication, professionalism, and front office operations, fostering industry-ready competencies on a prestigious national platform."
    },

    "e-12.JPG": {
        title: "The Art of Care, The Science of Hospitality",
        desc: "The Housekeeping Operations Laboratory at CV Raman Global University (CGU), Bhubaneswar, provides hands-on training in linen management, laundry operations, inventory control, and accommodation services, enabling students to master the precision, efficiency, and attention to detail essential for hospitality excellence."
    },

    "e-13.JPG": {
        title: "Where Global Talent Meets Hospitality Leadership",
        desc: "The Faculty of Tourism & Hospitality at CV Raman Global University proudly fosters a vibrant multicultural learning environment, bringing together students from across India and around the world to develop global perspectives, professional excellence, and industry-ready competencies in hospitality, tourism, and service leadership."
    },

    "e-14.JPG": {
        title: "Crafting Culinary Excellence, Inspiring Global Talent",
        desc: "The Bakery and Confectionery Laboratory at CV Raman Global University (CGU), Bhubaneswar, provides an immersive industry-standard learning environment where students master artisan baking, pastry arts, confectionery production, and food presentation, blending creativity, innovation, and technical excellence to become future-ready culinary professionals."
    },

    "e-15.jpeg": {
        title: "Representing India, Inspiring the World Through Culinary Excellence",
        desc: "A shining example of culinary excellence from the Faculty of Tourism & Hospitality, CV Raman Global University, this accomplished Patisserie Champion proudly represented India at the WorldSkills Competition in Shanghai 2026, showcasing exceptional creativity, precision, and technical mastery in pastry and confectionery arts on the global stage."
    },

    "e-16.JPG": {
        title: "The Spirit of India, Expressed Through Art and Grace",
        desc: "The Faculty of Tourism & Hospitality at CV Raman Global University (CGU), Bhubaneswar, proudly celebrates India’s rich cultural heritage through captivating classical dance performances, creating a vibrant and inclusive atmosphere during prestigious events such as India Skills 2026, while fostering cultural appreciation, artistic expression, and holistic student development."
    },

    "e-17.JPG": {
        title: "Representing India, Inspiring the World Through Culinary Excellence",
        desc: "A shining example of culinary excellence from the Faculty of Tourism & Hospitality, CV Raman Global University, this accomplished Patisserie Champion proudly represented India at the WorldSkills Competition in Shanghai 2026, showcasing exceptional creativity, precision, and technical mastery in pastry and confectionery arts on the global stage."
    },

    "e-18.JPG": {
        title: "Where Tradition Meets Talent and Culture Comes Alive",
        desc: "The Faculty of Tourism & Hospitality at CV Raman Global University (CGU), Bhubaneswar, celebrates India’s rich cultural heritage through vibrant performances and inclusive events, fostering creativity, cultural appreciation, and a spirit of unity while enriching the holistic development of future hospitality professionals.ssical dance performances, creating a vibrant and inclusive atmosphere during prestigious events such as India Skills 2026."
    },

    "e-19.JPG": {
        title: "Golden Talent, National Pride, Global Aspirations",
        desc: "A proud achiever from the Faculty of Tourism & Hospitality, CV Raman Global University (CGU), Bhubaneswar, who secured the Gold Medal at India Skills Competition 2024 in the Bakery category, demonstrating exceptional craftsmanship, innovation, and technical excellence while earning the honour of representing India on the international stage."
    },

    "e-20.JPG": {
        title: "A World-Class Learning Space for Future Culinary Leaders",
        desc: "The Advanced Bakery and Confectionery Laboratory at CV Raman Global University (CGU), Bhubaneswar, provides students with world-class practical training in baking, pastry arts, artisan bread production, and dessert innovation, fostering creativity, technical mastery, and industry-ready expertise in a modern professional learning environment."
    },

    "e-21.JPG": {
        title: "From Dough to Delight—Shaping Future Culinary Leaders",
        desc: "The Bakery and Confectionery Laboratory at CV Raman Global University (CGU), Bhubaneswar, offers an innovative learning environment where students from diverse backgrounds master the art and science of baking, pastry production, artisan bread making, and confectionery, transforming creativity into industry-ready culinary excellence."
    },
    "e-22.JPG": {
        title: "Transforming Talent into Achievement, Excellence into Recognition",
        desc: "At CV Raman Global University (CGU), excellence is recognised and celebrated, with students consistently achieving distinction at prestigious state and national skill competitions, reflecting the university’s commitment to nurturing talent, professionalism, and industry-ready hospitality leaders."
    }

};




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
