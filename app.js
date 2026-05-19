document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // =========================================================================
    // 1. PREMIUM REVEAL TIPOGRÁFICO
    // =========================================================================
    gsap.to(".text-line-child", {
        y: "0%",
        opacity: 1,
        duration: 1.3,
        stagger: 0.25,
        ease: "power4.out",
        force3D: true
    });

    // =========================================================================
    // 2. HERO PHOTO EXPANSION
    // =========================================================================
    const tlHeroPhotos = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_home-header",
            start: "top top",
            end: "bottom center",
            scrub: 1
        }
    });

    tlHeroPhotos.to("#hero-photo-secondary", {
        width: "100%",
        opacity: 1,
        ease: "power2.inOut"
    });

    // =========================================================================
    // 3. FADE-IN DOS CARDS DE LIVROS
    // =========================================================================
    gsap.utils.toArray('.editorial-book-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 92%",
                toggleActions: "play none none none"
            },
            y: 40,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
            force3D: true
        });
    });

    // =========================================================================
    // 4. PARALLAX ASSIMÉTRICO DO MOSAICO FLOATING 
    // =========================================================================
    const floatingItems = [
        { id: "#item-float-left", scrub: 0.5, y: -60 },
        { id: "#item-float-center", scrub: 1, y: -120 },
        { id: "#item-float-right", scrub: 0.8, y: -40 }
    ];

    floatingItems.forEach(item => {
        gsap.to(item.id, {
            scrollTrigger: {
                trigger: ".section_floating-mosaic",
                start: "top bottom",
                end: "bottom top",
                scrub: item.scrub
            },
            y: item.y,
            ease: "none"
        });
    });

gsap.fromTo(".elegant-quote .word", 
    { opacity: 0, y: 20 }, 
    { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#quote-section",
            start: "top 85%", 
            end: "bottom 60%",
            scrub: 1,       
            toggleActions: "play none none reverse"
        }
    }
);

    // =========================================================================
    // 5. PARALLAX ASSIMÉTRICO: MOSAICO REDES SOCIAIS 
    // =========================================================================
    const socialItems = [
        { id: "#social-float-left", scrub: 0.8, y: -80 },
        { id: "#social-float-right", scrub: 1.2, y: -150 }
    ];

    socialItems.forEach(item => {
        gsap.to(item.id, {
            scrollTrigger: {
                trigger: "#redes-sociais",
                start: "top bottom",
                end: "bottom top",
                scrub: item.scrub
            },
            y: item.y,
            ease: "none"
        });
    });

    // =========================================================================
    // 6. LÓGICA DO MENU OVERLAY
    // =========================================================================
    const menuTrigger = document.querySelector(".navbar_menu-custom");
    const menuOverlay = document.getElementById("menu-overlay");
    const menuClose = document.getElementById("menu-close");
    const menuLinks = document.querySelectorAll(".menu-link-item");

    if (menuTrigger && menuOverlay) {
        menuTrigger.addEventListener("click", () => {
            menuOverlay.classList.add("is-open");
            gsap.fromTo(".menu-overlay_links li", 
                { y: 30, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.2 }
            );
        });
    }

    if (menuClose && menuOverlay) {
        menuClose.addEventListener("click", () => {
            menuOverlay.classList.remove("is-open");
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuOverlay.classList.remove("is-open");
        });
    });
});