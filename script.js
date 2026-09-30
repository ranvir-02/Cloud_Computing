"use strict";

/* ================= ELEMENTS ================= */

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const form = document.querySelector("#registrationForm");
const header = document.querySelector("#header");

/* ================= MOBILE MENU ================= */

if (menu && nav) {

```
menu.addEventListener("click", () => {

    nav.classList.toggle("show");

    const isOpen = nav.classList.contains("show");

    menu.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

    menu.textContent = isOpen ? "✕" : "☰";

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

        menu.textContent = "☰";

        menu.setAttribute(
            "aria-label",
            "Open menu"
        );

    });

});
```

}

/* ================= EVENT SELECTION ================= */

document.querySelectorAll(".card-btn").forEach(button => {

```
button.addEventListener("click", () => {

    const card = button.closest(".event-card");

    if (!card) return;

    const titleElement = card.querySelector("h3");

    const select = document.querySelector(
        'select[name="event"]'
    );

    if (!titleElement || !select) return;

    const title = titleElement.textContent.trim();

    [...select.options].forEach(option => {

        option.selected =
            option.textContent.trim() === title;

    });

});
```

});

/* ================= REGISTRATION ================= */

if (form) {

```
form.addEventListener("submit", event => {

    event.preventDefault();

    const data = new FormData(form);

    const name = data.get("name");

    alert(
        `🎉 Registration successful!\n\nWelcome ${name}!`
    );

    form.reset();

});
```

}

/* ================= HEADER SCROLL ================= */

window.addEventListener("scroll", () => {

```
if (!header) return;

header.classList.toggle(
    "scrolled",
    window.scrollY > 30
);
```

});

/* ================= SCROLL REVEAL ================= */

const revealElements =
document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

```
const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});
```

} else {

```
revealElements.forEach(element => {

    element.classList.add("active");

});
```

}
