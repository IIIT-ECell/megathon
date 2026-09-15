// Countdown to the event date, not an unannounced opening-session time.
const eventDate = Date.parse('2026-10-10T00:00:00+05:30');

function countdownText(now) {
    const seconds = Math.max(0, Math.floor((eventDate - now) / 1000));
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds % 60}s`;
}

if (typeof document !== 'undefined') {
    const countdown = document.getElementById('countdown');
    let timer;
    function updateCountdown() {
        const now = Date.now();
        countdown.textContent = countdownText(now);
        if (now >= eventDate) {
            document.getElementById('countdown-status').textContent = 'The countdown is complete. Visit the main site for event information.';
            clearInterval(timer);
        }
    }
    timer = setInterval(updateCountdown, 1000);
    updateCountdown();
}

if (typeof module !== 'undefined') module.exports = { countdownText, eventDate };
