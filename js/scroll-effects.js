/* ===================================
   SCROLL EFFECTS JAVASCRIPT - ADVANCED PARALLAX & REVEALS
   =================================== */

// ===================================
// ADVANCED PARALLAX SYSTEM
// ===================================

class AdvancedParallax {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.scrollY = 0;
        this.init();
    }

    init() {
        if (this.elements.length === 0) return;

        window.addEventListener('scroll', () => this.updateParallax(), { passive: true });
        this.updateParallax();
    }

    updateParallax() {
        this.scrollY = window.scrollY;

        this.elements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const offset = this.scrollY * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    }
}

new AdvancedParallax();

// ===================================
// SECTION REVEAL ON SCROLL
// ===================================

class SectionReveal {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        const options = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.revealSection(entry.target);
                }
            });
        }, options);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    revealSection(section) {
        section.style.animation = 'fadeInUp 0.8s ease-out forwards';
    }
}

new SectionReveal();

// ===================================
// TEXT STAGGER ANIMATION
// ===================================

class TextStagger {
    constructor() {
        this.elements = document.querySelectorAll('[data-stagger-text]');
        this.init();
    }

    init() {
        this.elements.forEach((element, index) => {
            const words = element.textContent.split(' ');
            element.innerHTML = words
                .map((word, i) => `<span class="stagger-word" style="animation-delay: ${i * 0.1}s">${word}</span>`)
                .join(' ');
        });
    }
}

new TextStagger();

// ===================================
// SCROLL TRIGGER ANIMATIONS
// ===================================

class ScrollTrigger {
    constructor() {
        this.triggers = document.querySelectorAll('[data-scroll-trigger]');
        this.init();
    }

    init() {
        const options = {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.dataset.scrollTrigger;
                    entry.target.classList.add(animation);
                    entry.target.style.pointerEvents = 'auto';
                }
            });
        }, options);

        this.triggers.forEach(trigger => {
            trigger.style.pointerEvents = 'none';
            observer.observe(trigger);
        });
    }
}

new ScrollTrigger();

// ===================================
// STAGGERED LIST ANIMATION
// ===================================

class StaggeredListAnimation {
    constructor() {
        this.lists = document.querySelectorAll('[data-stagger-list]');
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateList(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.lists.forEach(list => {
            observer.observe(list);
        });
    }

    animateList(list) {
        const items = list.querySelectorAll('li, [data-list-item]');
        items.forEach((item, index) => {
            item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
            item.style.opacity = '0';
        });
    }
}

new StaggeredListAnimation();

// ===================================
// SCROLL-LINKED ANIMATIONS
// ===================================

class ScrollLinkedAnimation {
    constructor() {
        this.elements = document.querySelectorAll('[data-scroll-progress]');
        this.scrollY = 0;
        this.init();
    }

    init() {
        if (this.elements.length === 0) return;

        window.addEventListener('scroll', () => this.updateProgress(), { passive: true });
    }

    updateProgress() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY / scrollHeight;

        this.elements.forEach(element => {
            const progress = Math.min(scrolled * 1.5, 1);
            element.style.opacity = progress;
            element.style.transform = `translateY(${(1 - progress) * 50}px)`;
        });
    }
}

new ScrollLinkedAnimation();

// ===================================
// CLIP-PATH REVEAL ANIMATION
// ===================================

class ClipPathReveal {
    constructor() {
        this.elements = document.querySelectorAll('[data-clip-reveal]');
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.reveal(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.elements.forEach(element => {
            element.style.clipPath = 'inset(100% 0 0 0)';
            observer.observe(element);
        });
    }

    reveal(element) {
        const duration = element.dataset.clipDuration || '0.8s';
        element.style.animation = `clipReveal ${duration} ease-out forwards`;
    }
}

new ClipPathReveal();

// ===================================
// MORPHING SHAPES ANIMATION
// ===================================

class MorphingShapes {
    constructor() {
        this.shapes = document.querySelectorAll('[data-morph-shape]');
        this.init();
    }

    init() {
        this.shapes.forEach(shape => {
            shape.style.animation = 'morphShape 6s ease-in-out infinite';
        });
    }
}

new MorphingShapes();

// ===================================
// VERTICAL SCROLL INDICATOR
// ===================================

class VerticalScrollIndicator {
    constructor() {
        this.createIndicator();
        this.init();
    }

    createIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'vertical-scroll-indicator';
        indicator.style.cssText = `
            position: fixed;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 100px;
            background: rgba(79, 102, 81, 0.2);
            z-index: 10;
            border-radius: 1px;
        `;

        const indicator_fill = document.createElement('div');
        indicator_fill.className = 'vertical-scroll-indicator-fill';
        indicator_fill.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: linear-gradient(180deg, #4F6651, #D4AF37);
            border-radius: 1px;
            transition: height 0.1s ease;
        `;

        indicator.appendChild(indicator_fill);
        document.body.appendChild(indicator);
        this.indicatorFill = indicator_fill;
    }

    init() {
        window.addEventListener('scroll', () => this.updateIndicator(), { passive: true });
    }

    updateIndicator() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        this.indicatorFill.style.height = scrolled + '%';
    }
}

new VerticalScrollIndicator();

// ===================================
// ELEMENT FOLLOW CURSOR
// ===================================

class CursorFollow {
    constructor() {
        this.elements = document.querySelectorAll('[data-cursor-follow]');
        this.cursor = { x: 0, y: 0 };
        this.init();
    }

    init() {
        if (this.elements.length === 0) return;

        document.addEventListener('mousemove', (e) => {
            this.cursor.x = e.clientX;
            this.cursor.y = e.clientY;
            this.updateElements();
        });
    }

    updateElements() {
        this.elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementX = rect.left + rect.width / 2;
            const elementY = rect.top + rect.height / 2;

            const distance = 20;
            const angle = Math.atan2(this.cursor.y - elementY, this.cursor.x - elementX);
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
}

new CursorFollow();

// ===================================
// BACKGROUND COLOR TRANSITION
// ===================================

class BackgroundColorTransition {
    constructor() {
        this.sections = document.querySelectorAll('[data-bg-color]');
        this.init();
    }

    init() {
        const options = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const color = entry.target.dataset.bgColor;
                    document.body.style.transition = 'background-color 0.6s ease';
                    document.body.style.backgroundColor = color;
                }
            });
        }, options);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }
}

new BackgroundColorTransition();

// ===================================
// LAZY BACKGROUND IMAGE LOADING
// ===================================

class LazyBackgroundImage {
    constructor() {
        this.elements = document.querySelectorAll('[data-bg-image]');
        this.init();
    }

    init() {
        const options = {
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadBackgroundImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.elements.forEach(element => {
            observer.observe(element);
        });
    }

    loadBackgroundImage(element) {
        const imageUrl = element.dataset.bgImage;
        if (imageUrl) {
            const img = new Image();
            img.onload = () => {
                element.style.backgroundImage = `url(${imageUrl})`;
                element.classList.add('bg-loaded');
            };
            img.src = imageUrl;
        }
    }
}

new LazyBackgroundImage();

// ===================================
// FLOATING ANIMATION
// ===================================

class FloatingAnimation {
    constructor() {
        this.elements = document.querySelectorAll('[data-float]');
        this.init();
    }

    init() {
        this.elements.forEach((element, index) => {
            const duration = 3 + (index % 3);
            element.style.animation = `float ${duration}s ease-in-out infinite`;
        });
    }
}

new FloatingAnimation();

// ===================================
// SCROLL VELOCITY DETECTION
// ===================================

class ScrollVelocity {
    constructor() {
        this.lastScrollY = 0;
        this.lastScrollTime = Date.now();
        this.velocity = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.calculateVelocity(), { passive: true });
    }

    calculateVelocity() {
        const currentTime = Date.now();
        const timeDelta = currentTime - this.lastScrollTime;
        const scrollDelta = window.scrollY - this.lastScrollY;

        this.velocity = scrollDelta / timeDelta;

        this.lastScrollY = window.scrollY;
        this.lastScrollTime = currentTime;

        // Store velocity for use by other components
        window.SCROLL_VELOCITY = this.velocity;
    }
}

new ScrollVelocity();

// ===================================
// DYNAMIC HEADER ANIMATION
// ===================================

class DynamicHeader {
    constructor() {
        this.header = document.querySelector('header') || document.querySelector('nav');
        this.lastScrollY = 0;
        this.init();
    }

    init() {
        if (!this.header) return;

        window.addEventListener('scroll', () => this.updateHeader(), { passive: true });
    }

    updateHeader() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide header
            this.header.style.transform = 'translateY(-100%)';
            this.header.style.transition = 'transform 0.3s ease';
        } else {
            // Scrolling up - show header
            this.header.style.transform = 'translateY(0)';
        }

        this.lastScrollY = currentScrollY;
    }
}

// Uncomment to enable dynamic header
// new DynamicHeader();

// ===================================
// INTERSECTION OBSERVER UTILITIES
// ===================================

window.IntersectionObserverHelper = {
    observe(selector, callback, options = {}) {
        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
            ...options
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry);
                }
            });
        }, defaultOptions);

        document.querySelectorAll(selector).forEach(element => {
            observer.observe(element);
        });

        return observer;
    }
};

// ===================================
// SCROLL ANIMATION QUEUE
// ===================================

class ScrollAnimationQueue {
    constructor() {
        this.queue = [];
        this.processing = false;
    }

    add(element, animation, options = {}) {
        this.queue.push({ element, animation, options });
    }

    process() {
        if (this.processing || this.queue.length === 0) return;

        this.processing = true;
        const { element, animation, options } = this.queue.shift();

        element.style.animation = `${animation} ${options.duration || '0.6s'} ${options.easing || 'ease-out'} forwards`;

        setTimeout(() => {
            this.processing = false;
            this.process();
        }, (options.duration || 600) + (options.delay || 0));
    }
}

window.ScrollAnimationQueue = new ScrollAnimationQueue();

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

class ScrollPerformance {
    constructor() {
        this.throttleDelay = 16; // ~60fps
        this.lastUpdate = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.throttledScroll(), { passive: true });
    }

    throttledScroll() {
        const now = Date.now();

        if (now - this.lastUpdate >= this.throttleDelay) {
            this.lastUpdate = now;
            // Dispatch custom event for scroll updates
            window.dispatchEvent(new CustomEvent('throttledScroll'));
        }
    }
}

new ScrollPerformance();

// ===================================
// CONSOLE LOGGING
// ===================================

if (window.location.search.includes('debug')) {
    console.log('%c🎬 Scroll Effects System Initialized', 'font-size: 14px; color: #4F6651; font-weight: bold;');
    console.log('✓ Advanced Parallax');
    console.log('✓ Section Reveals');
    console.log('✓ Scroll Triggers');
    console.log('✓ Staggered Animations');
    console.log('✓ Cursor Follow');
    console.log('✓ Performance Optimizations');
}
