/* =========================================================
   AKASH S PILLAI — PORTFOLIO INTERACTIONS

   1. Custom mouse pointer
   2. Smile intro animation
   3. Mobile navigation
   4. Footer year
   5. Reading progress bar
   6. Scroll reveal animation
   7. Rotating typing title
   8. Active section navigation
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Check reduced motion preference
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    // =====================================================
    // 1. CUSTOM MOUSE POINTER
    // =====================================================

    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");
    const glow = document.querySelector(".cursor-glow");

    if (dot && outline && glow) {

        let mouseX = 0;
        let mouseY = 0;

        let outlineX = 0;
        let outlineY = 0;

        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            dot.style.left = mouseX + "px";
            dot.style.top = mouseY + "px";
        });

        function animateCursor() {
            outlineX += (mouseX - outlineX) * 0.18;
            outlineY += (mouseY - outlineY) * 0.18;

            outline.style.left = outlineX + "px";
            outline.style.top = outlineY + "px";

            glow.style.left = outlineX + "px";
            glow.style.top = outlineY + "px";

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Hover effect
        document.querySelectorAll(
            "a, button, .project-card, .skill-card"
        ).forEach((element) => {

            element.addEventListener("mouseenter", () => {
                document.body.classList.add("cursor-hover");
            });

            element.addEventListener("mouseleave", () => {
                document.body.classList.remove("cursor-hover");
            });

        });
    }


    // =====================================================
    // 2. SMILE INTRO ANIMATION
    // =====================================================

    const smileIntro = document.getElementById("smileIntro");

    if (smileIntro) {

        if (reduceMotion) {

            smileIntro.remove();

        } else {

            let introFinished = false;

            const finishSmileIntro = (animateOut = false) => {

                if (introFinished) return;

                introFinished = true;

                if (animateOut) {

                    smileIntro.classList.add("is-done");

                    window.setTimeout(() => {
                        smileIntro.remove();
                    }, 420);

                } else {

                    smileIntro.remove();

                }
            };

            const skipSmileIntro =
                document.getElementById("skipSmileIntro");

            if (skipSmileIntro) {

                skipSmileIntro.addEventListener("click", () => {
                    finishSmileIntro(true);
                });

            }

            smileIntro.addEventListener("animationend", (event) => {

                if (
                    event.target === smileIntro &&
                    event.animationName === "smileIntroFade"
                ) {
                    finishSmileIntro(false);
                }

            });

            // Fallback
            window.setTimeout(() => {
                finishSmileIntro(false);
            }, 6100);

        }
    }


    // =====================================================
    // 3. MOBILE NAVIGATION
    // =====================================================

    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.textContent = isOpen ? "✕" : "☰";

        });

        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");

                menuButton.textContent = "☰";

            });

        });

    }


    // =====================================================
    // 4. FOOTER YEAR
    // =====================================================

    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =====================================================
    // 5. READING PROGRESS BAR
    // =====================================================

    const progressBar = document.querySelector(
        "#scroll-progress-bar"
    );

    const updateProgress = () => {

        if (!progressBar) return;

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress = total > 0
            ? (window.scrollY / total) * 100
            : 0;

        progressBar.style.width =
            `${Math.min(100, Math.max(0, progress))}%`;

    };

    updateProgress();

    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );

    window.addEventListener("resize", updateProgress);


    // =====================================================
    // 6. SCROLL REVEAL ANIMATION
    // =====================================================

    const revealItems = [
        ...document.querySelectorAll(".reveal")
    ];

    // Stagger cards
    revealItems.forEach((element) => {

        const parent = element.parentElement;

        if (
            parent &&
            [
                "skills-grid",
                "projects-grid",
                "about-facts"
            ].some((className) =>
                parent.classList.contains(className)
            )
        ) {

            const siblings = [...parent.children];

            element.style.transitionDelay =
                `${Math.min(
                    siblings.indexOf(element) * 100,
                    350
                )}ms`;

        }

    });

    if (
        reduceMotion ||
        !("IntersectionObserver" in window)
    ) {

        revealItems.forEach((item) => {
            item.classList.add("visible");
        });

    } else {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        revealItems.forEach((item) => {
            revealObserver.observe(item);
        });

    }


    // =====================================================
    // 7. ROTATING TYPEWRITER TITLE
    // =====================================================

    const typedRole = document.querySelector("#typed-role");

    const roles = [
        "Python Full Stack Developer",
        "Django & REST API Developer",
        "Web Application Builder",
        "Always Learning. Always Building."
    ];

    if (typedRole && !reduceMotion) {

        let roleIndex = 0;
        let charIndex = roles[0].length;

        let deleting = false;

        let pauseUntil = Date.now() + 1500;

        const typeNext = () => {

            const current = roles[roleIndex];

            const now = Date.now();

            if (now < pauseUntil) {

                window.setTimeout(typeNext, 120);

                return;

            }

            if (!deleting) {

                charIndex = Math.min(
                    charIndex + 1,
                    current.length
                );

                typedRole.textContent =
                    current.slice(0, charIndex);

                if (charIndex >= current.length) {

                    deleting = true;

                    pauseUntil = Date.now() + 1500;

                }

            } else {

                charIndex = Math.max(
                    0,
                    charIndex - 1
                );

                typedRole.textContent =
                    current.slice(0, charIndex);

                if (charIndex === 0) {

                    deleting = false;

                    roleIndex =
                        (roleIndex + 1) % roles.length;

                }

            }

            window.setTimeout(
                typeNext,
                deleting ? 36 : 72
            );

        };

        window.setTimeout(typeNext, 1700);

    }


    // =====================================================
    // 8. ACTIVE SECTION NAVIGATION
    // =====================================================

    const sectionLinks = [
        ...document.querySelectorAll(
            '.nav-links a[href^="#"]'
        )
    ].filter((link) => {

        return (
            link.getAttribute("href") !== "#contact" ||
            document.querySelector("#contact")
        );

    });

    const trackedSections = sectionLinks
        .map((link) =>
            document.querySelector(link.getAttribute("href"))
        )
        .filter(Boolean);

    if (
        "IntersectionObserver" in window &&
        trackedSections.length
    ) {

        const navObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    const targetId = `#${entry.target.id}`;

                    sectionLinks.forEach((link) => {

                        const active =
                            link.getAttribute("href") === targetId;

                        link.classList.toggle("active", active);

                        if (active) {

                            link.setAttribute(
                                "aria-current",
                                "location"
                            );

                        } else {

                            link.removeAttribute("aria-current");

                        }

                    });

                });

            },
            {
                rootMargin: "-25% 0px -60% 0px",
                threshold: 0
            }
        );

        trackedSections.forEach((section) => {
            navObserver.observe(section);
        });

    }

});