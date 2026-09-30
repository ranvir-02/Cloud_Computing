```javascript
"use strict";


// ===============================
// ELEMENTS
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("#header");
const form = document.querySelector("#registrationForm");


// ===============================
// MOBILE MENU
// ===============================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const opened = navLinks.classList.contains("show");

        menuBtn.textContent = opened ? "✕" : "☰";

    });

}


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuBtn.textContent = "☰";

    });

});


// ===============================
// HEADER SCROLL EFFECT
// ===============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ===============================
// EVENT BUTTON
// ===============================

document.querySelectorAll(".card-btn").forEach(button => {

    button.addEventListener("click", () => {

        const selectedEvent =
            button.getAttribute("data-event");

        const eventSelect =
            document.querySelector(
                'select[name="event"]'
            );

        if (eventSelect && selectedEvent) {

            eventSelect.value = selectedEvent;

        }

    });

});


// ===============================
// REGISTRATION FORM
// ===============================

if (form) {

    form.addEventListener("submit", event => {

        event.preventDefault();

        const formData =
            new FormData(form);

        const name =
            formData.get("name");

        const selectedEvent =
            formData.get("event");

        alert(
            "🎉 Registration Successful!\n\n" +
            "Welcome " + name + "!\n\n" +
            "Event: " + selectedEvent
        );

        form.reset();

    });

}


// ===============================
// SMOOTH REVEAL ANIMATION
// ===============================

const cards = document.querySelectorAll(
    ".event-card, .club-card, .contact-card, .about-box"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(card);

});


// Add visible style dynamically
const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .event-card.visible,
    .club-card.visible,
    .contact-card.visible,
    .about-box.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyle);
```
