// TYPING EFFECT
const words = [
    "Freelance Web Developer & Digital Solutions Desiner",    
    "Creative Coder"
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const typing = document.getElementById("typing");
function typeEffect() {
    const current = words[wordIndex];
    if (!deleting) {
        typing.textContent =
            current.substring(
                0,
                charIndex++
            );
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(
                typeEffect,
                1200
            );
            return;
        } 
    }
    else {
        typing.textContent =
            current.substring(
                0,
                charIndex--
            );
        if (charIndex < 0) {
            deleting = false;
            wordIndex++;
            if (
                wordIndex >= words.length
            ) {
                wordIndex = 0;
            }
        }
    }
    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}
typeEffect();

// NAVBAR SCROLL EFFECT
const nav =
    document.querySelector(
        "nav"
    );
window.addEventListener(
    "scroll",
    () => {
        if (window.scrollY > 50) {
            nav.style.background =
                "rgba(5,8,22,.92)";
            nav.style.boxShadow =
                "0 10px 35px rgba(0,0,0,.3)";
        }
        else {
            nav.style.background =
                "rgba(5,8,22,.35)";
            nav.style.boxShadow =
                "none";
        }
    });

// REVEAL ANIMATION
const observer =
    new IntersectionObserver(
        (entries) => {
            entries.forEach(
                (entry) => {
                    if (
                        entry.isIntersecting
                    ) {
                        entry.target.classList.add(
                            "show"
                        );
                    }
                }
            );
        },
        {
            threshold: .15
        }
    );
document.querySelectorAll(
    ".hero-left,\
.hero-right,\
.about-left,\
.about-right,\
.skill-card,\
.project-card,\
.timeline-item,\
.contact-card,\
.contact-form,\
.stat-card"
)
    .forEach(
        (el) => {
            el.classList.add(
                "hidden"
            );
            observer.observe(el);
        }
    );

// ACTIVE NAV LINKS
const sections =
    document.querySelectorAll(
        "section"
    );
const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );
window.addEventListener(
    "scroll",
    () => {
        let current = "";
        sections.forEach(
            (section) => {
                const top =
                    section.offsetTop;
                if (
                    window.scrollY >=
                    top - 250
                ) {
                    current =
                        section.getAttribute(
                            "id"
                        );
                }
            }
        );
        navLinks.forEach(
            (link) => {
                link.classList.remove(
                    "active"
                );
                if (
                    link.href.includes(
                        current
                    )
                ) {
                    link.classList.add(
                        "active"
                    );
                }
            }
        );
    });

// MOBILE MENU TOGGLE
const mobileMenuToggle = document.getElementById("menuToggle");
const mobileNavLinks = document.getElementById("navLinks");

if (mobileMenuToggle && mobileNavLinks) {
    const closeMenu = () => {
        mobileNavLinks.classList.remove("open");
        mobileMenuToggle.classList.remove("active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
    };

    mobileMenuToggle.addEventListener("click", () => {
        const isOpen = mobileNavLinks.classList.toggle("open");
        mobileMenuToggle.classList.toggle("active", isOpen);
        mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNavLinks.querySelectorAll("a").forEach(
        (link) => link.addEventListener("click", closeMenu)
    );
}

// COUNTER ANIMATION
const counters =
    document.querySelectorAll(
        ".stat-card h3"
    );
counters.forEach(
    (counter) => {
        const original =
            counter.innerText;
        const target =
            parseInt(original);
        const suffix =
            original.includes("+")
                ? "+"
                : "";
        let count = 0;
        function update() {
            const increment =
                target / 80;
            if (count < target) {
                count += increment;
                counter.innerText =
                    Math.ceil(count)
                    + suffix;
                setTimeout(
                    update,
                    25
                );
            }
            else {
                counter.innerText =
                    target + suffix;
            }
        }
        update();
    }
);

// PROJECT CARD TILT
document.querySelectorAll(
    ".project-card"
)
    .forEach(
        (card) => {
            card.addEventListener(
                "mousemove",
                (e) => {
                    const rect =
                        card.getBoundingClientRect();
                    const x =
                        e.clientX -
                        rect.left;
                    const y =
                        e.clientY -
                        rect.top;
                    card.style.transform =
                        `
perspective(1000px)
rotateX(
${(y - 120) / 18}deg
)
rotateY(
${-(x - 150) / 18}deg
)
scale(1.03)
`;
                }
            );
            card.addEventListener(
                "mouseleave",
                () => {
                    card.style.transform =
                        `
rotateX(0)
rotateY(0)
scale(1)
`;
                }
            );
        }
    );

// CONTACT FORM -> WHATSAPP
const WHATSAPP_NUMBER = "918523089576"; // country code + number, digits only
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = new FormData(contactForm);
        const text =
            `*New message from portfolio*\n\n` +
            `*Name:* ${data.get("name").trim()}\n` +
            `*Subject:* ${data.get("title").trim()}\n\n` +
            `${data.get("message").trim()}`;

        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener"
        );
        contactForm.reset();
    });
}

// PRIVATE REPO NOTICE
document.querySelectorAll(".private-repo").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("This is a private GitHub project. You need Mr. Quipaca's permission to see it.");
    });
});

// MOUSE GLOW
const glow =
    document.createElement(
        "div"
    );
glow.className =
    "mouse-glow";
document.body.appendChild(
    glow
);
document.addEventListener(
    "mousemove",
    (e) => {
        glow.style.left =
            e.clientX + "px";
        glow.style.top =
            e.clientY + "px";
    }
);

// FLOATING STARS
for (
    let i = 0;
    i < 35;
    i++
) {
    const star =
        document.createElement(
            "span"
        );
    star.classList.add(
        "star"
    );
    star.style.left =
        Math.random() * 100
        + "%";
    star.style.top =
        Math.random() * 100
        + "%";
    star.style.animationDelay =
        Math.random() * 6
        + "s";
    document.body.appendChild(
        star);
}

// VIEW ALL PROJECTS
const viewBtn =
    document.getElementById(
        "viewAllBtn"
    );
const hiddenProjects =
    document.querySelectorAll(
        ".extra-project"
    );
let expanded =
    false;
viewBtn.addEventListener(
    "click",
    () => {
        expanded =
            !expanded;
        hiddenProjects.forEach(
            (project) => {
                project.classList.toggle(
                    "show-project"
                );
            }
        );
        viewBtn.innerHTML =
            expanded ?
                `Show Less
<i class="fa-solid fa-arrow-up"></i>`
                :
                `View All
<i class="fa-solid fa-arrow-right"></i>`;
    }
);