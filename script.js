
/* =====================================
   1. GLOBAL SETTINGS
===================================== */

:root {
    --bg: #090a10;
    --panel: #11131d;
    --panel2: #151827;
    --text: #f4f5fb;
    --muted: #9a9db0;
    --purple: #9b7bff;
    --cyan: #55d6d0;
    --line: rgba(255,255,255,.09);

    --font: 'DM Sans', sans-serif;
    --display: 'Space Grotesk', sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font);
    line-height: 1.65;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

.container {
    width: min(1120px, calc(100% - 48px));
    margin: auto;
}


/* =====================================
   2. BACKGROUND GLOW
===================================== */

.page-glow {
    position: absolute;
    width: 440px;
    height: 440px;
    border-radius: 50%;
    filter: blur(120px);
    opacity: .15;
    pointer-events: none;
    z-index: -1;
}

.glow-one {
    background: #7046ff;
    top: 80px;
    left: -240px;
}

.glow-two {
    background: #1d9eaa;
    top: 700px;
    right: -300px;
}


/* =====================================
   3. NAVIGATION
===================================== */

.site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(9,10,16,.85);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--line);
}

.nav {
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font: 700 1.55rem var(--display);
    letter-spacing: -1px;
}

.logo span {
    color: var(--purple);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    color: var(--muted);
    font-size: .9rem;
}

.nav-links a:hover,
.social-links a:hover,
.footer a:hover {
    color: var(--text);
}

.nav-cta {
    color: var(--text) !important;
    border: 1px solid var(--line);
    padding: 9px 15px;
    border-radius: 8px;
}

.nav-cta span {
    color: var(--purple);
    margin-left: 8px;
}

.menu-toggle {
    display: none;
    background: none;
    color: var(--text);
    border: 0;
    font-size: 1.5rem;
    cursor: pointer;
}


/* =====================================
   4. HERO SECTION
===================================== */

.hero {
    min-height: 680px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    position: relative;
    padding-top: 50px;
    padding-bottom: 90px;
    isolation: isolate;
}

/* Explosion animation canvas */

#explosion-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 5;
    opacity: 1;
    mix-blend-mode: screen;
}

/* Keep hero content above particles */

.hero-copy,
.hero-visual,
.scroll-hint {
    position: relative;
    z-index: 2;
}

.availability {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    border: 1px solid var(--line);
    border-radius: 30px;
    padding: 7px 13px;
    color: #c7cad6;
    font-size: .78rem;
    margin-bottom: 30px;
}

.status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #58d69b;
    box-shadow: 0 0 12px #58d69b;
}

.eyebrow {
    font-size: .72rem;
    letter-spacing: 2px;
    color: var(--purple);
    font-weight: 700;
}

.hero h1 {
    font: 700 clamp(4rem, 8vw, 6.5rem)/.98 var(--display);
    letter-spacing: -5px;
    margin: 12px 0;
}

.gradient-text {
    background: linear-gradient(100deg, #b5a0ff, #6bd9d2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero h2 {
    font: 500 1.25rem var(--display);
    color: #d8d9e4;
    margin: 24px 0 10px;
}

.hero-description {
    max-width: 490px;
    color: var(--muted);
    font-size: 1.02rem;
}

.hero-actions {
    display: flex;
    gap: 13px;
    margin-top: 30px;
    flex-wrap: wrap;
}


/* GeoGuard AI - My Contribution */

.project-contribution {
    margin-top: 18px;
}

.project-contribution h4 {
    color: #62e6dc;
    font-size: 15px;
    margin-bottom: 10px;
}

.project-contribution ul {
    list-style: none;
    padding: 0;
}

.project-contribution li {
    color: #a4abc0;
    font-size: 13px;
    margin-bottom: 9px;
    padding-left: 20px;
    position: relative;
    transition: color 0.3s, transform 0.3s;
}

.project-contribution li::before {
    content: "↳";
    position: absolute;
    left: 0;
    color: #a78bfa;
}

.project-contribution li:hover {
    color: white;
    transform: translateX(5px);
}

/* =====================================
   5. BUTTONS
===================================== */

.button {
    display: inline-flex;
    align-items: center;
    gap: 18px;
    padding: 13px 19px;
    border-radius: 8px;
    font-weight: 700;
    font-size: .9rem;
    transition: transform .25s, box-shadow .25s;
}

.button:hover {
    transform: translateY(-3px);
}

.button-primary {
    background: linear-gradient(110deg, #9273f5, #6a83e9);
    color: white;
    box-shadow: 0 10px 35px #8066ed30;
}

.button-primary:hover {
    box-shadow: 0 14px 40px #8066ed55;
}

.button-ghost {
    border: 1px solid var(--line);
    color: #ddd;
}


/* =====================================
   6. SOCIAL LINKS
===================================== */

.social-links {
    display: flex;
    gap: 24px;
    margin-top: 35px;
    color: var(--muted);
    font-size: .85rem;
}


/* =====================================
   7. HERO CODE CARD
===================================== */

.hero-visual {
    height: 440px;
    display: grid;
    place-items: center;
    position: relative;
}

.code-card {
    width: min(440px, 100%);
    background: linear-gradient(145deg, #171a29, #10121b);
    border: 1px solid #ffffff17;
    border-radius: 16px;
    box-shadow: 0 30px 100px #0008;
    overflow: hidden;
    transform: rotate(2deg);
    z-index: 2;
}

.code-top {
    height: 48px;
    border-bottom: 1px solid var(--line);
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 17px;
}

.code-top > span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff6f78;
}

.code-top > span:nth-child(2) {
    background: #f7c66a;
}

.code-top > span:nth-child(3) {
    background: #63d69a;
}

.code-top small {
    margin-left: auto;
    color: #73788d;
}

.code-card pre {
    padding: 24px 25px;
    margin: 0;
    overflow: auto;
    color: #d4d7e5;
    font: .87rem/2 monospace;
}

.code-purple {
    color: #c39bff;
}

.code-yellow {
    color: #f6d58c;
}

.code-green {
    color: #8ed9b3;
}

.code-blue {
    color: #82caff;
}

.cursor {
    color: var(--cyan);
    animation: blink 1s steps(2) infinite;
}

.code-footer {
    border-top: 1px solid var(--line);
    padding: 13px 18px;
    color: #8f95a9;
    font-size: .72rem;
    display: flex;
    align-items: center;
    gap: 9px;
}


/* =====================================
   8. FLOATING ELEMENTS
===================================== */

.orbit {
    position: absolute;
    border: 1px solid #9c82ff25;
    border-radius: 50%;
    width: 410px;
    height: 410px;
    animation: spin 30s linear infinite;
}

.orbit-two {
    width: 480px;
    height: 300px;
    transform: rotate(55deg);
    border-color: #62d6ce20;
}

.floating-chip {
    animation: premiumFloat 4s ease-in-out infinite,
               pulseGlow 3s ease-in-out infinite;
}

.chip-python {
    animation-delay: 0s, 0s;
}

.chip-django {
    animation-delay: 1s, 0.5s;
}

.chip-db {
    animation-delay: 2s, 1s;
}

.chip-python {
    top: 65px;
    right: 15px;
}

.chip-django {
    bottom: 75px;
    left: 0;
    animation-delay: -1.7s;
}

.chip-db {
    bottom: 25px;
    right: 25px;
    animation-delay: -3s;
}

.scroll-hint {
    position: absolute;
    bottom: 25px;
    left: 0;
    color: #777c90;
    font-size: .65rem;
    letter-spacing: 2px;
}

.scroll-hint span {
    color: var(--purple);
    margin-left: 12px;
}


/* =====================================
   9. SECTION COMMON STYLES
===================================== */

.section {
    padding-top: 100px;
    padding-bottom: 45px;
}

.section-heading {
    margin-bottom: 35px;
}

.section-heading h2,
.contact-card h2 {
    font: 600 clamp(2rem, 4vw, 3.1rem)/1.15 var(--display);
    letter-spacing: -1.5px;
    margin: 10px 0;
}

.section-subtitle {
    color: var(--muted);
}

.glass-card {
    background: linear-gradient(145deg, #141724dd, #10121bdd);
    border: 1px solid var(--line);
    border-radius: 15px;
}


/* =====================================
   10. ABOUT SECTION
===================================== */

.about-grid {
    display: grid;
    grid-template-columns: 1.3fr .9fr;
    gap: 20px;
}

.about-copy {
    padding: 32px;
}

.about-copy p:not(.lead) {
    color: var(--muted);
}

.lead {
    font: 500 1.35rem/1.45 var(--display);
    max-width: 550px;
}

.about-facts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 13px;
}

.fact-card {
    background: #11131d;
    border: 1px solid var(--line);
    border-radius: 13px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.fact-card strong {
    font: 600 2rem var(--display);
    color: var(--cyan);
}

.fact-card span {
    font-size: .78rem;
    color: var(--muted);
}


/* =====================================
   11. SKILLS SECTION
===================================== */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
}

.skill-card {
    padding: 23px;
    transition: transform .25s, border-color .25s;
}

.skill-card:hover,
.project-card:hover {
    transform: translateY(-6px);
    border-color: #9b7bff70;
}

.skill-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: #8e70f51c;
    color: #b39cff;
    font-size: 1.3rem;
}

.skill-card h3 {
    font: 600 1.05rem var(--display);
    margin: 18px 0 13px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}

.tags span {
    font-size: .7rem;
    color: #c2c5d2;
    background: #ffffff09;
    border: 1px solid #ffffff0d;
    padding: 5px 9px;
    border-radius: 5px;
}


/* =====================================
   12. PROJECT SECTION
===================================== */

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 17px;
}

.project-card {
    overflow: hidden;
    transition: transform .25s, border-color .25s;
}

.project-visual {
    height: 175px;
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.project-visual::before,
.project-visual::after {
    content: '';
    position: absolute;
    border: 1px solid #ffffff20;
    border-radius: 50%;
    width: 190px;
    height: 190px;
}

.project-visual::after {
    width: 260px;
    height: 260px;
}

.project-visual-one {
    background: radial-gradient(circle at 50% 50%, #1e726f, #102d35 65%, #131a27);
}

.project-visual-two {
    background: radial-gradient(circle at 50% 50%, #59409a, #241e48 65%, #171827);
}

.project-visual-three {
    background: radial-gradient(circle at 50% 50%, #8b5a3c, #3d2932 65%, #171827);
}

.project-number {
    position: absolute;
    top: 15px;
    left: 17px;
    font-size: .72rem;
    color: #ffffff9c;
}

.project-symbol {
    font: 500 4rem var(--display);
    z-index: 1;
    color: #ffffffc9;
}

.visual-label {
    position: absolute;
    bottom: 13px;
    right: 15px;
    font-size: .65rem;
    color: #ffffffa8;
}

.project-info {
    padding: 22px;
}

.project-type {
    font-size: .65rem;
    letter-spacing: 1.5px;
    color: var(--cyan);
    font-weight: 700;
}

.project-info h3 {
    font: 600 1.2rem var(--display);
    margin: 8px 0;
}

.project-info > p:not(.project-type) {
    font-size: .83rem;
    color: var(--muted);
    min-height: 80px;
}

.project-info .tags {
    margin: 17px 0;
}

.text-link {
    display: inline-block;
    color: #b7a5ff;
    font-size: .8rem;
    font-weight: 700;
    margin-top: 8px;
}

.muted-link {
    color: #8a8d9e;
}


/* =====================================
   13. CONTACT SECTION
===================================== */

.contact-section {
    padding-top: 110px;
    padding-bottom: 100px;
}

.contact-card {
    text-align: center;
    padding: 65px 25px;
    background:
        radial-gradient(ellipse at 50% 0%, #5b43a52c, transparent 65%),
        #11131d;
}

.contact-card h2 {
    font-size: clamp(2.3rem, 5vw, 3.8rem);
}

.contact-card > p:not(.eyebrow) {
    color: var(--muted);
    max-width: 490px;
    margin: 15px auto 27px;
}

.contact-bottom {
    display: flex;
    justify-content: center;
    gap: 13px;
    color: var(--muted);
    font-size: .8rem;
    margin-top: 30px;
}


/* =====================================
   14. FOOTER
===================================== */

.footer {
    min-height: 90px;
    border-top: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    color: var(--muted);
    font-size: .75rem;
}

.footer p {
    margin: 0;
}

.footer .logo {
    color: var(--text);
}


/* =====================================
   15. SCROLL REVEAL ANIMATION
===================================== */

.reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity .7s ease, transform .7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}


/* =====================================
   16. KEYFRAME ANIMATIONS
===================================== */

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-13px);
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}


/* =====================================
   17. TABLET RESPONSIVE DESIGN
===================================== */

@media (max-width: 900px) {

    .hero {
        grid-template-columns: 1fr;
        gap: 15px;
        padding-top: 85px;
    }

    .hero-visual {
        height: 390px;
    }

    .hero-copy {
        max-width: 650px;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .projects-grid {
        grid-template-columns: 1fr 1fr;
    }

    .project-card:last-child {
        grid-column: 1 / -1;
    }

    .project-card:last-child .project-info > p:not(.project-type) {
        min-height: 0;
    }
}


/* =====================================
   18. MOBILE RESPONSIVE DESIGN
===================================== */

@media (max-width: 650px) {

    .container {
        width: min(100% - 34px, 1120px);
    }

    .nav {
        height: 66px;
    }

    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: 65px;
        left: 0;
        right: 0;
        padding: 22px;
        background: #10121b;
        border-bottom: 1px solid var(--line);
        flex-direction: column;
        gap: 18px;
    }

    .nav-links.open {
        display: flex;
    }

    .hero {
        min-height: auto;
        padding-top: 70px;
        padding-bottom: 90px;
    }

    .hero h1 {
        font-size: 4.4rem;
        letter-spacing: -3px;
    }

    .hero-visual {
        height: 330px;
    }

    .code-card pre {
        font-size: .72rem;
        padding: 18px;
    }

    .orbit {
        width: 320px;
        height: 320px;
    }

    .orbit-two {
        width: 360px;
        height: 240px;
    }

    .floating-chip {
        font-size: .68rem;
        padding: 8px 10px;
    }

    .chip-python {
        right: 0;
        top: 35px;
    }

    .chip-django {
        bottom: 35px;
    }

    .section {
        padding-top: 70px;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    .skill-card {
        padding: 17px;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .project-card:last-child {
        grid-column: auto;
    }

    .project-info > p:not(.project-type) {
        min-height: 0;
    }

    .contact-card {
        padding: 48px 18px;
    }

    .footer {
        padding: 22px 0;
        flex-wrap: wrap;
    }

    .footer p {
        order: 3;
        width: 100%;
    }

    .scroll-hint {
        bottom: 25px;
    }
}


/* =====================================
   19. ACCESSIBILITY
===================================== */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        transition-duration: .01ms !important;
    }

    .reveal {
        opacity: 1;
        transform: none;
    }
}


/* =========================================================
   REFRESH: CINEMATIC PORTFOLIO INTERACTIONS
   1. Cinematic heading reveal
   2. Interactive terminal
   3. Reading progress bar
   4. Project visual zoom
   5. Journey timeline reveal
   6. Active navigation indicator
========================================================= */

/* Reading progress */
.scroll-progress {
    position: fixed;
    inset: 0 0 auto 0;
    height: 3px;
    z-index: 100;
    background: rgba(255,255,255,.04);
}

.scroll-progress span {
    display: block;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--purple), var(--cyan));
    box-shadow: 0 0 14px rgba(155,123,255,.6);
    transition: width .08s linear;
}

/* Smart navigation: the current section gets a glowing underline */
.nav-links a {
    position: relative;
    transition: color .25s ease;
}

.nav-links a:not(.nav-cta)::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--purple), var(--cyan));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .28s ease;
}

.nav-links a.active,
.nav-links a:not(.nav-cta):hover {
    color: var(--text);
}

.nav-links a.active::after,
.nav-links a:not(.nav-cta):hover::after {
    transform: scaleX(1);
}

/* Cinematic title and scroll reveal */
.cinematic-title {
    overflow: hidden;
}

.cinematic-title .title-line {
    display: block;
    opacity: 0;
    transform: translateY(46px);
    filter: blur(9px);
}

.hero-copy.visible .title-line-one {
    animation: cinematicRise .95s cubic-bezier(.2,.75,.2,1) .12s forwards;
}

.hero-copy.visible .title-line-two {
    animation: cinematicRise 1.05s cubic-bezier(.2,.75,.2,1) .32s forwards;
}

.hero-copy.visible .availability,
.hero-copy.visible > .eyebrow,
.hero-copy.visible .hero-role,
.hero-copy.visible .hero-description,
.hero-copy.visible .hero-actions,
.hero-copy.visible .social-links {
    animation: fadeSlideUp .75s ease both;
}

.hero-copy.visible .availability { animation-delay: .05s; }
.hero-copy.visible > .eyebrow { animation-delay: .22s; }
.hero-copy.visible .hero-role { animation-delay: .55s; }
.hero-copy.visible .hero-description { animation-delay: .68s; }
.hero-copy.visible .hero-actions { animation-delay: .82s; }
.hero-copy.visible .social-links { animation-delay: .98s; }

@keyframes cinematicRise {
    to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

@keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Make all normal section reveals feel cinematic, not flashy */
.reveal {
    opacity: 0;
    transform: translateY(28px);
    filter: blur(5px);
    transition: opacity .75s ease, transform .75s cubic-bezier(.2,.7,.2,1), filter .75s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
}

/* Journey timeline */
.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.timeline::before {
    content: "";
    position: absolute;
    top: 12px;
    bottom: 12px;
    left: 119px;
    width: 1px;
    background: linear-gradient(var(--purple), rgba(85,214,208,.2));
}

.timeline-item {
    display: grid;
    grid-template-columns: 100px 38px minmax(0,1fr);
    align-items: start;
    gap: 0 16px;
    margin-bottom: 19px;
}

.timeline-year {
    padding-top: 23px;
    text-align: right;
    color: var(--cyan);
    font: 600 .82rem var(--display);
    letter-spacing: 1px;
}

.timeline-marker {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 27px;
    z-index: 1;
}

.timeline-marker span {
    width: 11px;
    height: 11px;
    border: 2px solid var(--cyan);
    border-radius: 50%;
    background: var(--bg);
    box-shadow: 0 0 0 5px rgba(85,214,208,.08), 0 0 18px rgba(85,214,208,.25);
    transition: transform .3s ease, box-shadow .3s ease;
}

.timeline-item:hover .timeline-marker span {
    transform: scale(1.3);
    box-shadow: 0 0 0 8px rgba(155,123,255,.1), 0 0 24px rgba(155,123,255,.45);
}

.timeline-card {
    padding: 20px 23px;
    transition: transform .3s ease, border-color .3s ease, background .3s ease;
}

.timeline-card:hover {
    transform: translateX(5px);
    border-color: rgba(155,123,255,.45);
    background: linear-gradient(145deg, #171a29, #11131d);
}

.timeline-kicker {
    color: var(--purple);
    font-size: .62rem;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.timeline-card h3 {
    margin: 5px 0 6px;
    font: 600 1.05rem var(--display);
}

.timeline-card p {
    color: var(--muted);
    font-size: .84rem;
}

/* Project visual zoom: the existing abstract artwork zooms inside its frame */
.project-visual {
    isolation: isolate;
}

.project-visual::before,
.project-visual::after {
    transition: transform .65s cubic-bezier(.2,.7,.2,1), opacity .45s ease;
}

.project-symbol {
    transition: transform .55s cubic-bezier(.2,.7,.2,1), text-shadow .4s ease;
}

.project-card:hover .project-visual::before {
    transform: scale(1.22) rotate(12deg);
}

.project-card:hover .project-visual::after {
    transform: scale(1.16) rotate(-10deg);
    opacity: .75;
}

.project-card:hover .project-symbol {
    transform: scale(1.22) rotate(-5deg);
    text-shadow: 0 0 28px rgba(255,255,255,.35);
}

.project-card:hover .project-visual {
    filter: saturate(1.16) brightness(1.08);
}

.project-visual .visual-label {
    transition: transform .35s ease, color .35s ease;
}

.project-card:hover .visual-label {
    transform: translateY(-3px);
    color: #fff;
}

/* Simple email line — no large email panel */
.simple-email {
    margin: 22px auto 25px;
    color: var(--muted);
    font-size: .9rem;
}

.simple-email a {
    color: var(--cyan);
    text-decoration: underline;
    text-decoration-color: rgba(85,214,208,.35);
    text-underline-offset: 4px;
    overflow-wrap: anywhere;
    transition: color .2s ease;
}

.simple-email a:hover { color: #fff; }

/* Slightly refined spacing for the retained cards */
.skill-points {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 4px;
}

.skill-points li {
    position: relative;
    padding-left: 16px;
    color: var(--muted);
    font-size: .82rem;
}

.skill-points li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--cyan);
}

/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
    .reveal { opacity: 1 !important; transform: none !important; filter: none !important; }
    .cinematic-title .title-line { opacity: 1 !important; transform: none !important; filter: none !important; }
}

@media (max-width: 900px) {
    .timeline::before { left: 87px; }
    .timeline-item { grid-template-columns: 70px 34px minmax(0,1fr); gap: 0 12px; }
}

@media (max-width: 650px) {
    .timeline::before { left: 61px; }
    .timeline-item { grid-template-columns: 46px 28px minmax(0,1fr); gap: 0 8px; }
    .timeline-year { font-size: .67rem; padding-top: 21px; }
    .timeline-marker { padding-top: 25px; }
    .timeline-card { padding: 16px 14px; }
    .timeline-card h3 { font-size: .95rem; }
    .timeline-card p { font-size: .78rem; }
    .simple-email { font-size: .82rem; }
    .nav-links a:not(.nav-cta)::after { bottom: -4px; }
}

/* Keep the technology chips visible with a calm float */
.floating-chip {
    position: absolute;
    z-index: 4;
    padding: 10px 14px;
    border: 1px solid rgba(155,123,255,.28);
    border-radius: 10px;
    background: rgba(17,19,29,.88);
    color: #e7e5f2;
    font-size: .78rem;
    font-weight: 600;
    backdrop-filter: blur(12px);
    box-shadow: 0 12px 30px rgba(0,0,0,.24);
    animation: premiumFloat 5.5s ease-in-out infinite, pulseGlow 4s ease-in-out infinite;
}

@keyframes premiumFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-9px); }
}

@keyframes pulseGlow {
    0%, 100% { box-shadow: 0 12px 30px rgba(0,0,0,.24), 0 0 0 rgba(155,123,255,0); }
    50% { box-shadow: 0 14px 34px rgba(0,0,0,.28), 0 0 19px rgba(155,123,255,.13); }
}


/* Refined hero micro-animations */
.hero-role { min-height: 1.7em; }
.typing-caret {
    display: inline-block;
    margin-left: 4px;
    color: var(--cyan);
    font-weight: 400;
    animation: caretBlink .8s steps(2, start) infinite;
}
@keyframes caretBlink { to { opacity: 0; } }
.code-card { animation: cardHover 6s ease-in-out infinite; transform-origin: center; }
@keyframes cardHover {
    0%, 100% { translate: 0 0; }
    50% { translate: 0 -9px; }
}

/* =========================================================
   SMILE GAP INTRO — camera zooms through the gap between
   the two front teeth, revealing AKASH S PILLAI.
========================================================= */
.smile-intro {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: grid;
    place-items: center;
    overflow: hidden;
    isolation: isolate;
    background:
        radial-gradient(ellipse at 50% 48%, rgba(91, 61, 155, .32), transparent 44%),
        radial-gradient(circle at 18% 18%, rgba(85, 214, 208, .12), transparent 28%),
        radial-gradient(circle at 85% 82%, rgba(155, 123, 255, .16), transparent 32%),
        #080810;
    animation: smileIntroFade 5.8s ease forwards;
}

.smile-intro::before,
.smile-intro::after {
    content: "";
    position: absolute;
    width: min(72vw, 720px);
    aspect-ratio: 1;
    border: 1px solid rgba(180, 160, 255, .14);
    border-radius: 50%;
    pointer-events: none;
    animation: smileHalo 5.8s ease-out both;
}

.smile-intro::after {
    width: min(92vw, 920px);
    border-color: rgba(85, 214, 208, .10);
    animation-delay: .12s;
}

.smile-intro-topline,
.smile-intro-bottom,
.smile-intro-caption {
    position: absolute;
    z-index: 3;
    color: rgba(232, 230, 248, .68);
    font: 700 .68rem var(--font);
    letter-spacing: .25em;
    text-align: center;
}

.smile-intro-topline {
    top: clamp(26px, 6vh, 56px);
    left: 20px;
    right: 20px;
    animation: introLabelIn .8s .25s both;
}

.smile-intro-bottom {
    bottom: clamp(25px, 6vh, 52px);
    left: 20px;
    right: 20px;
    animation: introLabelIn .8s .65s both;
}

.smile-intro-bottom span { color: var(--cyan); margin-left: 8px; }

.smile-intro-caption {
    bottom: clamp(64px, 12vh, 105px);
    left: 20px;
    right: 20px;
    color: #b9a8ff;
    opacity: 0;
    animation: smileCaption 5.8s ease both;
}

.smile-skip {
    position: absolute;
    top: 24px;
    right: 26px;
    z-index: 5;
    border: 1px solid rgba(255,255,255,.17);
    border-radius: 999px;
    padding: 9px 14px;
    color: #e6e2f6;
    background: rgba(255,255,255,.06);
    font: 600 .72rem var(--font);
    cursor: pointer;
    backdrop-filter: blur(12px);
    transition: background .2s ease, border-color .2s ease, transform .2s ease;
}

.smile-skip:hover {
    background: rgba(155,123,255,.2);
    border-color: rgba(155,123,255,.65);
    transform: translateY(-2px);
}

.smile-skip span { color: var(--cyan); margin-left: 6px; }

.smile-stage {
    position: relative;
    width: min(92vw, 920px);
    height: min(68vh, 570px);
    display: grid;
    place-items: center;
    z-index: 2;
}

.smile-art {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
    transform-origin: 50% 51%;
    opacity: 0;
    animation: smileZoomThroughGap 5.8s cubic-bezier(.54, 0, .18, 1) both;
    will-change: transform, opacity;
}

.gap-name-svg {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 2.8px;
    fill: url(#nameGradient);
    stroke: rgba(18, 10, 33, .95);
    stroke-width: 3px;
    paint-order: stroke fill;
    opacity: 0;
    filter: drop-shadow(0 0 13px rgba(155,123,255,.85));
    animation: gapNameReveal 5.8s ease both;
}

.gap-sparkle {
    transform-box: fill-box;
    transform-origin: center;
    animation: gapSparkle 1.1s ease-in-out infinite alternate;
}

.smile-intro-stars span {
    position: absolute;
    z-index: 1;
    color: rgba(198, 183, 255, .78);
    font-size: clamp(14px, 2vw, 24px);
    animation: introStar 2.2s ease-in-out infinite alternate;
}

.smile-intro-stars span:nth-child(1) { left: 14%; top: 26%; animation-delay: .1s; }
.smile-intro-stars span:nth-child(2) { left: 24%; top: 72%; animation-delay: .8s; }
.smile-intro-stars span:nth-child(3) { right: 19%; top: 30%; animation-delay: .4s; }
.smile-intro-stars span:nth-child(4) { right: 13%; top: 68%; animation-delay: 1.1s; }
.smile-intro-stars span:nth-child(5) { left: 9%; top: 52%; animation-delay: .6s; }
.smile-intro-stars span:nth-child(6) { right: 29%; top: 18%; animation-delay: 1.4s; }

@keyframes smileZoomThroughGap {
    0%   { opacity: 0; transform: translateY(45px) scale(.22) rotate(-4deg); }
    12%  { opacity: 1; transform: translateY(0) scale(.62) rotate(1deg); }
    27%  { opacity: 1; transform: scale(1) rotate(0); }
    42%  { opacity: 1; transform: scale(1.12); }
    60%  { opacity: 1; transform: scale(2.35); }
    82%  { opacity: 1; transform: scale(4.5); }
    100% { opacity: .08; transform: scale(5.8); }
}

@keyframes gapNameReveal {
    0%, 45% { opacity: 0; transform: scale(.8); }
    59% { opacity: .3; transform: scale(1.04); }
    70%, 86% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(1.15); }
}

@keyframes smileIntroFade {
    0%, 84% { opacity: 1; visibility: visible; }
    100% { opacity: 0; visibility: hidden; }
}

@keyframes smileHalo {
    0% { transform: scale(.45); opacity: 0; }
    25% { opacity: .8; }
    100% { transform: scale(1.35); opacity: 0; }
}

@keyframes introLabelIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes smileCaption {
    0%, 48% { opacity: 0; transform: translateY(8px); }
    62%, 82% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-8px); }
}

@keyframes gapSparkle {
    from { opacity: .35; transform: scale(.7) rotate(0); }
    to { opacity: 1; transform: scale(1.15) rotate(35deg); }
}

@keyframes introStar {
    from { opacity: .25; transform: translateY(4px) scale(.8); }
    to { opacity: 1; transform: translateY(-8px) scale(1.18); }
}

.smile-intro.is-done { animation: smileSkipOut .35s ease forwards; }
@keyframes smileSkipOut { from { opacity: 1; visibility: visible; } to { opacity: 0; visibility: hidden; } }

@media (max-width: 650px) {
    .smile-stage { width: 112vw; height: min(56vh, 410px); }
    .smile-intro-topline, .smile-intro-bottom, .smile-intro-caption { font-size: .56rem; letter-spacing: .16em; }
    .smile-skip { top: 17px; right: 16px; padding: 8px 11px; }
    .gap-name-svg { font-size: 22px; letter-spacing: 2px; }
}

@media (prefers-reduced-motion: reduce) {
    .smile-intro { display: none !important; }
}


/* Playful separated front teeth: tiny bounce before the zoom */
.front-tooth { transform-box: fill-box; transform-origin: center top; }
.tooth-left { animation: toothWiggleLeft 1.2s .7s ease-in-out 2; }
.tooth-right { animation: toothWiggleRight 1.2s .7s ease-in-out 2; }
@keyframes toothWiggleLeft {
    0%, 100% { transform: rotate(0) translateY(0); }
    30% { transform: rotate(-2deg) translateY(-4px); }
    65% { transform: rotate(1deg) translateY(1px); }
}
@keyframes toothWiggleRight {
    0%, 100% { transform: rotate(0) translateY(0); }
    30% { transform: rotate(2deg) translateY(-4px); }
    65% { transform: rotate(-1deg) translateY(1px); }
}
@media (prefers-reduced-motion: reduce) {
    .front-tooth, .code-card, .typing-caret { animation: none !important; }
}




/* CUSTOM CURSOR - FIX */

.cursor-dot,
.cursor-outline,
.cursor-glow {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    border-radius: 50%;
    z-index: 999999;
    transform: translate(-50%, -50%);
}

.cursor-dot {
    width: 8px;
    height: 8px;
    background: #55d6d0;
}

.cursor-outline {
    width: 38px;
    height: 38px;
    border: 2px solid #9b7bff;
}

.cursor-glow {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #55d6d033, transparent 70%);
}

@media (pointer: fine) {
    body,
    a,
    button {
        cursor: none !important;
    }
}

@media (pointer: coarse) {
    .cursor-dot,
    .cursor-outline,
    .cursor-glow {
        display: none;
    }
}












/* =========================================
   RESPONSIVE DESIGN - ALL DEVICES
========================================= */

/* Prevent horizontal scrolling */
html,
body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
}

img,
video,
canvas {
    max-width: 100%;
}

.container {
    width: min(1120px, calc(100% - 48px));
}

/* Fluid headings */
.hero h1 {
    font-size: clamp(3rem, 8vw, 6.5rem);
    overflow-wrap: break-word;
}

.section-heading h2,
.contact-card h2 {
    font-size: clamp(1.8rem, 4vw, 3.1rem);
}

/* Flexible buttons */
.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.button {
    max-width: 100%;
}

/* Tablet and small laptops */
@media (max-width: 1024px) {

    .hero {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .hero-visual {
        min-width: 0;
    }

    .about-grid {
        grid-template-columns: 1fr 1fr;
    }

    .skills-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .projects-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .project-card:last-child {
        grid-column: auto;
    }
}

/* Tablets and phones */
@media (max-width: 768px) {

    .container {
        width: calc(100% - 36px);
    }

    /* Navigation */
    .nav {
        height: 68px;
    }

    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: 68px;
        left: 0;
        right: 0;
        padding: 24px;
        background: #10121b;
        border-bottom: 1px solid var(--line);
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .nav-links.open {
        display: flex;
    }

    /* Hero */
    .hero {
        min-height: auto;
        grid-template-columns: 1fr;
        padding-top: 65px;
        padding-bottom: 85px;
        gap: 20px;
    }

    .hero-copy {
        width: 100%;
    }

    .hero h1 {
        font-size: clamp(3.2rem, 12vw, 5rem);
        letter-spacing: -3px;
    }

    .hero-description {
        max-width: 100%;
    }

    .hero-visual {
        min-height: 380px;
        height: auto;
    }

    .code-card {
        width: min(100%, 460px);
    }

    .floating-chip {
        font-size: .72rem;
    }

    /* About */
    .about-grid {
        grid-template-columns: 1fr;
    }

    /* Skills */
    .skills-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* Projects */
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .project-card:last-child {
        grid-column: auto;
    }

    /* Footer */
    .footer {
        flex-wrap: wrap;
        gap: 15px;
        padding: 22px 0;
    }
}

/* Mobile phones */
@media (max-width: 480px) {

    .container {
        width: calc(100% - 28px);
    }

    .hero {
        padding-top: 45px;
    }

    .availability {
        margin-bottom: 22px;
    }

    .hero h1 {
        font-size: clamp(2.8rem, 13vw, 4rem);
        letter-spacing: -2px;
    }

    .hero h2 {
        font-size: 1.05rem;
    }

    .hero-description {
        font-size: .92rem;
    }

    /* Full-width buttons */
    .hero-actions {
        flex-direction: column;
    }

    .hero-actions .button {
        width: 100%;
        justify-content: center;
    }

    /* Code card */
    .hero-visual {
        min-height: 300px;
        height: 300px;
    }

    .code-card {
        width: 100%;
    }

    .code-card pre {
        padding: 14px;
        font-size: .65rem;
        line-height: 1.8;
    }

    .code-footer {
        font-size: .62rem;
    }

    .orbit {
        width: 290px;
        height: 290px;
    }

    .orbit-two {
        width: 320px;
        height: 220px;
    }

    .floating-chip {
        font-size: .65rem;
        padding: 7px 9px;
    }

    /* Sections */
    .section {
        padding-top: 65px;
        padding-bottom: 25px;
    }

    .section-heading h2,
    .contact-card h2 {
        font-size: clamp(1.8rem, 8vw, 2.4rem);
    }

    /* About */
    .about-copy {
        padding: 20px;
    }

    .about-facts {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .fact-card {
        padding: 15px;
    }

    .fact-card strong {
        font-size: 1.6rem;
    }

    /* Skills */
    .skills-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 9px;
    }

    .skill-card {
        padding: 14px;
        min-width: 0;
    }

    .skill-card h3 {
        font-size: .9rem;
    }

    .skill-points li {
        font-size: .75rem;
        overflow-wrap: anywhere;
    }

    /* Projects */
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .project-info {
        padding: 18px;
    }

    .project-info > p:not(.project-type) {
        min-height: 0;
    }

    /* Contact */
    .contact-card {
        padding: 40px 16px;
    }

    .contact-bottom {
        flex-wrap: wrap;
        justify-content: center;
    }

    /* Footer */
    .footer {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer p {
        order: 3;
        width: 100%;
    }
}

/* Very small phones */
@media (max-width: 380px) {

    .container {
        width: calc(100% - 24px);
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 2.7rem;
    }
}

/* Touch screens */
@media (hover: none) {

    .skill-card:hover,
    .project-card:hover,
    .button:hover {
        transform: none;
    }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration: .01ms !important;
        transition-duration: .01ms !important;
        scroll-behavior: auto !important;
    }
}
