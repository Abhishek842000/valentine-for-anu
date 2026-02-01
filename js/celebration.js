// Create falling flower petals
function createPetal() {
    const petalsContainer = document.getElementById('petals');
    const petal = document.createElement('div');
    petal.className = 'petal';

    // Different flower emojis
    const flowers = ['🌸', '🌺', '🌹', '🌷', '💐', '🌼', '🏵️'];
    petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    // Random position
    petal.style.left = Math.random() * 100 + '%';

    // Random animation duration
    const duration = Math.random() * 3 + 5; // 5-8 seconds
    petal.style.animationDuration = duration + 's';

    // Random delay
    petal.style.animationDelay = Math.random() * 2 + 's';

    petalsContainer.appendChild(petal);

    // Remove petal after animation
    setTimeout(() => {
        petal.remove();
    }, (duration + 2) * 1000);
}

// Create confetti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const confetti = document.createElement('div');
    confetti.className = 'confetti';

    // Random colors
    const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#feca57', '#ff6b6b', '#48dbfb'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Random position
    confetti.style.left = Math.random() * 100 + '%';

    // Random size
    const size = Math.random() * 8 + 5;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';

    // Random animation duration
    const duration = Math.random() * 2 + 3; // 3-5 seconds
    confetti.style.animationDuration = duration + 's';

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);
}

// Create rising hearts
function createRisingHeart() {
    const heartsContainer = document.querySelector('.hearts-rain');
    const heart = document.createElement('div');
    heart.className = 'rising-heart';

    // Different heart emojis
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    // Random position
    heart.style.left = Math.random() * 100 + '%';

    // Random animation duration
    const duration = Math.random() * 3 + 6; // 6-9 seconds
    heart.style.animationDuration = duration + 's';

    // Random delay
    heart.style.animationDelay = Math.random() * 1 + 's';

    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, (duration + 1) * 1000);
}

// Initial burst of confetti
function confettiBurst() {
    for (let i = 0; i < 50; i++) {
        setTimeout(createConfetti, i * 30);
    }
}

// Start animations when page loads
window.addEventListener('load', () => {
    // Initial confetti burst
    confettiBurst();

    // Continuous petals
    setInterval(createPetal, 300);

    // Continuous confetti (slower after initial burst)
    setTimeout(() => {
        setInterval(createConfetti, 200);
    }, 2000);

    // Rising hearts
    setInterval(createRisingHeart, 500);

    // Initial batch of elements
    for (let i = 0; i < 20; i++) {
        setTimeout(createPetal, i * 100);
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(createRisingHeart, i * 200);
    }
});

// Add sparkle effect to title
const title = document.querySelector('.celebration-title');
function createSparkle() {
    const sparkle = document.createElement('span');
    sparkle.textContent = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.pointerEvents = 'none';

    const rect = title.getBoundingClientRect();
    sparkle.style.left = (Math.random() * rect.width) + 'px';
    sparkle.style.top = (Math.random() * rect.height) + 'px';
    sparkle.style.animation = 'sparkle 1.5s ease-out';

    title.style.position = 'relative';
    title.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1500);
}

// Sparkles every 2 seconds
setInterval(createSparkle, 2000);

// Add click animation to the container
const container = document.querySelector('.celebration-container');
container.addEventListener('click', () => {
    confettiBurst();

    // Create extra hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(createRisingHeart, i * 100);
    }
});

// Prevent right-click to keep it clean
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Add keyboard interaction for fun
document.addEventListener('keypress', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        confettiBurst();
        for (let i = 0; i < 10; i++) {
            setTimeout(createPetal, i * 50);
        }
    }
});
