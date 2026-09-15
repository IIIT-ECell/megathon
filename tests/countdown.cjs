const assert = require('node:assert/strict');
const { countdownText, eventDate } = require('../js/countdown.js');
assert.equal(new Date(eventDate).toISOString(), '2026-10-09T18:30:00.000Z');
assert.equal(countdownText(eventDate - 90061000), '1d 1h 1m 1s');
assert.equal(countdownText(eventDate - 1000), '0d 0h 0m 1s');
assert.equal(countdownText(eventDate), '0d 0h 0m 0s');
assert.equal(countdownText(eventDate + 86400000), '0d 0h 0m 0s');
console.log('Countdown checks passed');
