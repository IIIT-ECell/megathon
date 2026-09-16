// Countdown to the event date, not an unannounced opening-session time.
// ISO 8601 with an explicit offset; +05:30 is IST.
const eventDate = Date.parse('2026-10-10T00:00:00+05:30');

function split(remaining) {
    const seconds = Math.max(0, Math.floor(remaining / 1000));
    return {
        days: Math.floor(seconds / 86400),
        hours: Math.floor(seconds / 3600) % 24,
        minutes: Math.floor(seconds / 60) % 60,
        seconds: seconds % 60,
    };
}

function countdownText(now) {
    const { days, hours, minutes, seconds } = split(eventDate - now);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startCountdown(root) {
    const digits = root.querySelectorAll('[data-unit]');
    const live = root.querySelector('.countdown-live');
    let timer;

    function render() {
        const remaining = eventDate - Date.now();
        const values = split(remaining);
        digits.forEach((el) => {
            const value = values[el.dataset.unit];
            // The rolling column spans 00-99; anything larger is shown as plain text.
            el.classList.toggle('is-plain', value > 99);
            el.style.setProperty('--value', value);
            el.textContent = String(value).padStart(2, '0');
        });
        if (remaining <= 0) {
            live.hidden = false;
            clearInterval(timer);
        }
    }

    render();
    timer = setInterval(render, 1000);
}

function initNav() {
    const nav = document.getElementById('nav');
    const toggle = nav.querySelector('.nav-toggle');
    const menu = nav.querySelector('.nav-menu');

    function onScroll() {
        nav.classList.toggle('is-scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function setOpen(open) {
        toggle.setAttribute('aria-expanded', String(open));
        menu.classList.toggle('is-open', open);
        nav.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
    }
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.tagName === 'A') setOpen(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 720) setOpen(false); });
}

// Poster swaps for the embedded player on click; the link still opens YouTube for keyboard/no-JS users.
function initVideo(link) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${link.dataset.video}?autoplay=1`;
        iframe.title = link.getAttribute('aria-label') || 'Video';
        iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        link.replaceChildren(iframe);
        link.classList.add('is-playing');
    }, { once: true });
}

// <details> can't transition open/close natively, so animate the answer's height around the toggle.
function initFaq(details) {
    const summary = details.querySelector('summary');
    const answer = details.querySelector('.faq-answer');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timing = { duration: 260, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' };
    let running = null;

    summary.addEventListener('click', (e) => {
        if (reduced) return;
        e.preventDefault();
        if (running) running.cancel();
        if (details.open) {
            running = answer.animate([{ height: `${answer.offsetHeight}px` }, { height: '0px' }], timing);
            running.onfinish = () => { details.open = false; running = null; };
        } else {
            details.open = true;
            running = answer.animate([{ height: '0px' }, { height: `${answer.scrollHeight}px` }], timing);
            running.onfinish = () => { running = null; };
        }
    });
}

if (typeof document !== 'undefined') {
    document.querySelectorAll('[data-countdown]').forEach(startCountdown);
    document.querySelectorAll('[data-video]').forEach(initVideo);
    document.querySelectorAll('.faq details').forEach(initFaq);
    initNav();
}

if (typeof module !== 'undefined') module.exports = { countdownText, split, eventDate };
