"use strict";

/* =========================================
ELEMENTS
========================================= */

const menu =
document.querySelector(".menu-btn");

const nav =
document.querySelector(".nav-links");

const form =
document.querySelector("#registrationForm");

const header =
document.querySelector("header");

const successMessage =
document.querySelector("#successMessage");

const cursorGlow =
document.querySelector(".cursor-glow");

/* =========================================
MOBILE MENU
========================================= */

if (menu && nav) {

```
menu.addEventListener("click", () => {

    nav.classList.toggle("show");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("show");

        });

    });


document.addEventListener("click", event => {

    if (
        !nav.contains(event.target) &&
        !menu.contains(event.target)
    ) {

        nav.classList.remove("show");

    }

});
```

}

/* =========================================
EVENT → REGISTRATION
========================================= */

document
.querySelectorAll(".card-btn")
.forEach(button => {

```
    button.addEventListener("click", () => {

        const card =
            button.closest(".event-card");

        if (!card) return;

        const title =
            card
                .querySelector("h3")
                ?.textContent
                .trim();

        const select =
            document.querySelector(
                'select[name="event"]'
            );

        if (!select || !title) return;

        const option =
            [...select.options]
                .find(
                    item =>
                        item.textContent.trim()
                        === title
                );

        if (option) {

            select.value =
                option.value;

        }

    });

});
```

/* =========================================
REGISTRATION
========================================= */

if (form) {

```
form.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const data =
            new FormData(form);

        const name =
            data.get("name")?.trim();

        if (!name) return;


        if (successMessage) {

            successMessage.textContent =
                `🎉 Registration successful! Welcome ${name}!`;

            successMessage.classList.add(
                "show"
            );

        }


        form.reset();


        setTimeout(() => {

            if (successMessage) {

                successMessage.classList.remove(
                    "show"
                );

            }

        }, 5000);

    }
);
```

}

/* =========================================
HEADER SCROLL
========================================= */

function updateHeader() {

```
if (!header) return;

header.classList.toggle(
    "scrolled",
    window.scrollY > 40
);
```

}

window.addEventListener(
"scroll",
updateHeader,
{
passive: true
}
);

updateHeader();

/* =========================================
SCROLL REVEAL
========================================= */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(
entries => {

```
        entries.forEach(entry => {

            if (
                entry.isIntersecting
            ) {

                entry.target.classList.add(
                    "active"
                );

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.12
    }
);
```

revealElements.forEach(element => {

```
revealObserver.observe(element);
```

});

/* =========================================
CURSOR GLOW
========================================= */

if (
cursorGlow &&
window.innerWidth > 600
) {

```
window.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    },
    {
        passive: true
    }
);
```

}

/* =========================================
3D CARD EFFECT
========================================= */

document
.querySelectorAll(
".event-card, .club-card"
)
.forEach(card => {

```
    card.addEventListener(
        "mousemove",
        event => {

            if (
                window.innerWidth <= 800
            ) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -3;


            const rotateY =
                ((x - centerX) /
                    centerX) * 3;


            card.style.transform =
                `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});
```

/* =========================================
ACTIVE NAVIGATION
========================================= */

const sections =
document.querySelectorAll(
"section[id]"
);

const navLinks =
document.querySelectorAll(
".nav-links a"
);

const sectionObserver =
new IntersectionObserver(
entries => {

```
        entries.forEach(entry => {

            if (
                entry.isIntersecting
            ) {

                navLinks.forEach(link => {

                    link.classList.remove(
                        "active-link"
                    );

                });


                const active =
                    document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );


                if (active) {

                    active.classList.add(
                        "active-link"
                    );

                }

            }

        });

    },
    {
        threshold: 0.35
    }
);
```

sections.forEach(section => {

```
sectionObserver.observe(section);
```

});

/* =========================================
RIPPLE EFFECT
========================================= */

document
.querySelectorAll(
"button, .btn, .card-btn"
)
.forEach(button => {

```
    button.addEventListener(
        "click",
        event => {

            const ripple =
                document.createElement(
                    "span"
                );

            ripple.classList.add(
                "ripple"
            );


            const rect =
                button.getBoundingClientRect();


            ripple.style.left =
                `${event.clientX - rect.left}px`;

            ripple.style.top =
                `${event.clientY - rect.top}px`;


            button.appendChild(
                ripple
            );


            setTimeout(() => {

                ripple.remove();

            }, 600);

        }
    );

});
```
