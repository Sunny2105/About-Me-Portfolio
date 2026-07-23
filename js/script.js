// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1000);

});

// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ==========================================
// CUSTOM CURSOR
// ==========================================

const cursor = document.querySelector(".cursor");

const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";

    cursor2.style.top = e.clientY + "px";

});

// ==========================================
// TYPING EFFECT
// ==========================================

const typingElement = document.querySelector(".typing");

const roles = [

    "Full Stack Developer",

    "Java Programmer",

    "AI & ML Student",

    "MERN Stack Learner",

    "Problem Solver"

];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const current = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) roleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 100);

}

typeEffect();

// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// SCROLL REVEAL
// ==========================================

const hiddenElements = document.querySelectorAll(

    ".project-card,.skill-card,.glass-card,.info-box,.training-card,.timeline-item,.profile-card,.achievement-card,.certificate-card,.contact-container"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ==========================================
// STICKY HEADER
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(5,8,22,.92)";

        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(5,8,22,.55)";

        header.style.boxShadow = "none";

    }

});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================================
// COUNTER ANIMATION
// ==========================================

const counters = document.querySelectorAll(".achievement-card h2, .stat-box h2");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.innerText;

        const value = parseInt(text);

        if (isNaN(value)) return;

        let count = 0;

        const speed = value / 40;

        const update = () => {

            if (count < value) {

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = text;

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.style.position = "absolute";

        circle.style.borderRadius = "50%";

        circle.style.background = "rgba(255,255,255,.35)";

        circle.style.transform = "scale(0)";

        circle.style.animation = "ripple .6s linear";

        circle.style.pointerEvents = "none";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

// ==========================================
// RIPPLE KEYFRAME
// ==========================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ==========================================
// CURRENT YEAR
// ==========================================

const year = document.querySelector(".copyright");

if (year) {

    year.innerHTML = `© ${new Date().getFullYear()} Sunny Gupta. All Rights Reserved.`;

}


//--email add--
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(

        "service_9m4i9im",

        "template_xeg1yea",

        this

    )

    .then(() => {

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

    })

    .catch((error) => {

        alert("❌ Failed to Send Message");

        console.log(error);

    });

});


// ==========================================
// END
// ==========================================

console.log("🚀 Portfolio Loaded Successfully");