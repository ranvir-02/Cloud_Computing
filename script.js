```javascript
"use strict";

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const form = document.querySelector("#registrationForm");
const header = document.querySelector("header");


// MOBILE MENU
menu.addEventListener("click", () => {
    nav.classList.toggle("show");
});


// CLOSE MOBILE MENU
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });

});


// EVENT → REGISTRATION
document.querySelectorAll(".card-btn").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".event-card");
        const title = card.querySelector("h3").textContent;

        const select = document.querySelector(
            'select[name="event"]'
        );

        [...select.options].forEach(option => {
            option.selected = option.text === title;
        });

    });

});


// REGISTRATION
form.addEventListener("submit", event => {

    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");

    alert(
        `🎉 Registration Successful!\n\nWelcome ${name}!`
    );

    form.reset();

});


// HEADER SCROLL EFFECT
window.addEventListener("scroll", () => {

    header.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );

});
```
