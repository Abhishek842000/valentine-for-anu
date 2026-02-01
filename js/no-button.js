const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const hint = document.getElementById('hint');

let attempts = 0;
const messages = [
    "Hmm... are you sure? 🤔",
    "Really? Try the other button! 😊",
    "The 'No' button is shy! 🙈",
    "Why are you even trying? 😄",
    "You know you want to say yes! 💕",
    "The 'No' button ran away again! 🏃",
    "Just click 'Yes' already! 😘",
    "I'll keep running! 🏃‍♂️💨"
];

// Function to move the No button randomly
function moveButton() {
    // Add moving class to make it absolute positioned
    noBtn.classList.add('moving');

    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();

    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate safe boundaries (keeping button inside container)
    const maxX = containerRect.width - btnWidth - 20;
    const maxY = containerRect.height - btnHeight - 20;

    // Generate random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply new position
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // Shrink button slightly each time
    attempts++;
    if (attempts > 3) {
        noBtn.classList.add('shrink');
    }

    // Update hint message
    const messageIndex = Math.min(attempts - 1, messages.length - 1);
    hint.textContent = messages[messageIndex];

    // Make button even smaller after multiple attempts
    if (attempts > 5) {
        noBtn.style.fontSize = '0.9rem';
        noBtn.style.padding = '12px 25px';
    }
}

// Event listeners for No button
noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton();
});

// Touch support for mobile
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

// Yes button click handler
yesBtn.addEventListener('click', () => {
    // Add a nice transition effect
    document.querySelector('.container').style.animation = 'fadeOut 0.5s ease forwards';

    // Redirect to celebration page after animation
    setTimeout(() => {
        window.location.href = 'celebration.html';
    }, 500);
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.8);
        }
    }
`;
document.head.appendChild(style);

// Create more floating hearts dynamically
function createFloatingHeart() {
    const heartsContainer = document.querySelector('.hearts-background');
    const heart = document.createElement('div');
    heart.textContent = Math.random() > 0.5 ? '💕' : '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heart.style.animation = `floatHearts ${Math.random() * 5 + 8}s linear`;
    heart.style.opacity = '0';

    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 13000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 2000);

// Initial hearts
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingHeart, i * 400);
}
