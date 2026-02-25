// GSAP Animations for The Groom Room Website
// gsap and ScrollTrigger are loaded via CDN

document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // ===== HERO SECTION ANIMATIONS =====
    
    // Hero text stagger animation
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    heroTl.from('.hero-content h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2
    })
    .from('.hero-content p', {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from('.hero-buttons .btn', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15
    }, "-=0.4")
    .from('.hero-video', {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.8");

    // ===== NAVIGATION ANIMATIONS =====
    
    // Header slide in
    gsap.from('.header', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    // Nav links stagger
    gsap.from('.nav-menu li', {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out"
    });

    // ===== SCROLL-TRIGGERED SECTION ANIMATIONS =====
    
    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });

    // Feature items animation
    gsap.utils.toArray('.feature-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            x: i % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });

    // Testimonial cards
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: "back.out(1.7)"
        });
    });

    // Pricing cards
    gsap.utils.toArray('.pricing-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 80,
            opacity: 0,
            duration: 0.9,
            delay: i * 0.15,
            ease: "power3.out"
        });
    });

    // Gallery items
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.05,
            ease: "power2.out"
        });
    });

    // ===== SECTION HEADER ANIMATIONS =====
    
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    });

    // ===== HOVER ANIMATIONS =====
    
    // Service cards hover
    gsap.utils.toArray('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Button hover animations
    gsap.utils.toArray('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });

    // Gallery items hover
    gsap.utils.toArray('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(item.querySelector('img'), {
                scale: 1.1,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(item.querySelector('img'), {
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    });

    // ===== PARALLAX EFFECTS =====
    
    // Subtle parallax on hero
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: 50,
        ease: "none"
    });

    // ===== LOCATION SECTION ANIMATION =====
    
    gsap.from('.location-info .info-item', {
        scrollTrigger: {
            trigger: '.location',
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    gsap.from('.location-map', {
        scrollTrigger: {
            trigger: '.location',
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // ===== CTA SECTION PULSE =====
    
    gsap.to('.cta-section .btn', {
        boxShadow: "0 0 20px rgba(233,30,99,0.4)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });

    console.log('GSAP animations loaded successfully');
});
