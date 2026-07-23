/* ===================================
   ANIMATIONS JAVASCRIPT - ADVANCED SCROLL EFFECTS
   =================================== */

// ===================================
// SCROLL-BASED ANIMATIONS
// ===================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in-on-scroll');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.setupIntersectionObserver();
        } else {
            this.fallbackAnimation();
        }
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target, index);
                }
            });
        }, options);

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }

    animateElement(element, index) {
        // Add stagger effect
        const delay = index * 0.1;
        element.style.animationDelay = `${delay}s`;
        element.classList.add('visible');
    }

    fallbackAnimation() {
        // Fallback for browsers without IntersectionObserver
        this.elements.forEach(element => {
            element.classList.add('visible');
        });
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ScrollAnimations();
    });
} else {
    new ScrollAnimations();
}

// ===================================
// PARALLAX SCROLL EFFECT
// ===================================

class ParallaxEffect {
    constructor() {
        this.parallaxElements = document.querySelectorAll('.parallax');
        this.init();
    }

    init() {
        if (this.parallaxElements.length > 0) {
            window.addEventListener('scroll', () => this.updateParallax());
        }
    }

    updateParallax() {
        this.parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementOffset = element.offsetTop;
            const distance = scrollPosition - elementOffset;

            if (distance < window.innerHeight && distance > -element.offsetHeight) {
                const parallaxValue = distance * 0.5;
                element.style.backgroundPosition = `center ${parallaxValue}px`;
            }
        });
    }
}

// Initialize parallax
new ParallaxEffect();

// ===================================
// NUMBER COUNTER ANIMATION
// ===================================

class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('[data-count]');
        this.init();
    }

    init() {
        const options = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    this.animateCounter(entry.target);
                    entry.target.dataset.counted = 'true';
                }
            });
        }, options);

        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
}

// Initialize counter if elements exist
if (document.querySelectorAll('[data-count]').length > 0) {
    new CounterAnimation();
}

// ===================================
// TEXT REVEAL ANIMATION
// ===================================

class TextRevealAnimation {
    constructor() {
        this.textElements = document.querySelectorAll('[data-reveal]');
        this.init();
    }

    init() {
        this.textElements.forEach(element => {
            this.splitText(element);
            this.observeElement(element);
        });
    }

    splitText(element) {
        const text = element.textContent;
        const spans = text
            .split('')
            .map(char => `<span class="reveal-char">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');
        element.innerHTML = spans;
    }

    observeElement(element) {
        const options = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.revealText(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(element);
    }

    revealText(element) {
        const chars = element.querySelectorAll('.reveal-char');
        chars.forEach((char, index) => {
            setTimeout(() => {
                char.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }, index * 30);
        });
    }
}

// Initialize text reveal if elements exist
if (document.querySelectorAll('[data-reveal]').length > 0) {
    new TextRevealAnimation();
}

// ===================================
// HOVER LIFT EFFECT
// ===================================

class HoverLiftEffect {
    constructor() {
        this.cards = document.querySelectorAll('.experience-card, .pet-card, .contact-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e));
            card.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
        });
    }

    handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    }

    handleMouseLeave(e) {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    }
}

// Initialize hover effect
new HoverLiftEffect();

// ===================================
// GRADIENT ANIMATED BUTTONS
// ===================================

class GradientButton {
    constructor() {
        this.buttons = document.querySelectorAll('.button-primary, .button-secondary');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => this.createRipple(e));
        });
    }

    createRipple(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }
}

// Initialize gradient buttons
new GradientButton();

// ===================================
// IMAGE ZOOM ON HOVER
// ===================================

class ImageZoomEffect {
    constructor() {
        this.images = document.querySelectorAll('.gallery-item img, .experience-image img, .restaurant-image img');
        this.init();
    }

    init() {
        this.images.forEach(img => {
            img.addEventListener('mouseenter', () => this.zoomIn(img));
            img.addEventListener('mouseleave', () => this.zoomOut(img));
        });
    }

    zoomIn(img) {
        img.style.transform = 'scale(1.1)';
    }

    zoomOut(img) {
        img.style.transform = 'scale(1)';
    }
}

// Initialize image zoom
new ImageZoomEffect();

// ===================================
// SCROLL PROGRESS BAR
// ===================================

class ScrollProgressBar {
    constructor() {
        this.progressBar = this.createProgressBar();
        this.init();
    }

    createProgressBar() {
        const bar = document.createElement('div');
        bar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #4F6651, #D4AF37);
            z-index: 9998;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(bar);
        return bar;
    }

    init() {
        window.addEventListener('scroll', () => this.updateProgress());
    }

    updateProgress() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        this.progressBar.style.width = scrolled + '%';
    }
}

// Initialize progress bar
new ScrollProgressBar();

// ===================================
// FLOATING PARTICLES BACKGROUND
// ===================================

class FloatingParticles {
    constructor() {
        this.container = this.createContainer();
        this.particleCount = 30;
        this.init();
    }

    createContainer() {
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;
        document.body.appendChild(container);
        return container;
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(79, 102, 81, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: -10px;
            animation: float ${duration}s linear ${delay}s infinite;
            pointer-events: none;
        `;

        this.container.appendChild(particle);
    }
}

// Initialize floating particles (optional - can be disabled for performance)
// Uncomment to enable
// new FloatingParticles();

// ===================================
// ELEMENT FADE IN ON SCROLL
// ===================================

class FadeInOnScroll {
    constructor() {
        this.elements = document.querySelectorAll('[data-fade-in]');
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, options);

        this.elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

// Initialize fade in on scroll
new FadeInOnScroll();

// ===================================
// SMOOTH REVEAL ANIMATION FOR IMAGES
// ===================================

class ImageReveal {
    constructor() {
        this.images = document.querySelectorAll('[data-reveal-image]');
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.revealImage(entry.target);
                }
            });
        }, options);

        this.images.forEach(image => {
            observer.observe(image);
        });
    }

    revealImage(image) {
        image.style.clipPath = 'inset(0)';
        image.style.opacity = '1';
    }
}

// Initialize image reveal
new ImageReveal();

// ===================================
// PERFORMANCE: THROTTLE SCROLL EVENTS
// ===================================

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================

class ScrollToTopButton {
    constructor() {
        this.button = this.createButton();
        this.init();
    }

    createButton() {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #4F6651, #6C7B59);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: none;
            font-size: 20px;
            z-index: 999;
        `;

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.body.appendChild(button);
        return button;
    }

    init() {
        window.addEventListener('scroll', throttle(() => {
            if (window.scrollY > 300) {
                this.button.style.opacity = '1';
                this.button.style.pointerEvents = 'auto';
            } else {
                this.button.style.opacity = '0';
                this.button.style.pointerEvents = 'none';
            }
        }, 100));
    }
}

// Initialize scroll to top button
new ScrollToTopButton();

// ===================================
// ANIMATIONS DEBUG MODE
// ===================================

// Set window.ANIMATION_DEBUG = true to enable debug logging
window.ANIMATION_DEBUG = false;

if (window.ANIMATION_DEBUG) {
    console.log('🎨 Animation system initialized');
    console.log('✓ Scroll animations active');
    console.log('✓ Parallax effect active');
    console.log('✓ Hover effects active');
    console.log('✓ Progress bar active');
}
