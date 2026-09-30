"use strict";

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const form = document.querySelector("#registrationForm");


// Mobile menu
menu.addEventListener("click", () => {
    nav.classList.toggle("show");
});


// Close menu after clicking
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});


// Event buttons automatically select the event
document.querySelectorAll(".card-btn").forEach(button => {

    button.addEventListener("click", () => {

        const title = button
            .closest(".event-card")
            .querySelector("h3")
            .textContent;

        const select = document.querySelector(
            'select[name="event"]'
        );

        [...select.options].forEach(option => {
            option.selected = option.text === title;
        });

    });

});


// Registration
form.addEventListener("submit", event => {

    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");

    alert(
        `🎉 Registration successful!\n\nWelcome ${name}!`
    );

    form.reset();

});


// Scroll header effect
window.addEventListener("scroll", () => {

    document.querySelector("header").classList.toggle(
        "scrolled",
        window.scrollY > 30
    );

});
