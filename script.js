const messages = [
    "You are stronger than you think!",
    "More capable than you imagine!",
    "And loved more than you know. Keep smiling!"
];

const additionalMessages = [
    "Remember, you are amazing!",
    "Never forget how special you are!",
    "Keep smiling and stay positive!"
];

let messageIndex = 0;
let additionalMessageIndex = 0;

const revealBtn = document.getElementById('revealBtn');
const nextBtn = document.getElementById('nextBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

// Ensure the background music starts automatically
window.addEventListener('load', function() {
    backgroundMusic.play().catch(error => {
        // Handle play promise rejection if needed
        console.log('Autoplay was prevented:', error);
    });
});

revealBtn.addEventListener('click', function() {
    if (messageIndex < messages.length) {
        document.getElementById('message').textContent = messages[messageIndex];
        messageIndex++;
        if (messageIndex === messages.length) {
            this.textContent = 'Show Surprise';
        }
    } else {
        document.getElementById('surprise').classList.remove('hidden');
        revealBtn.style.display = 'none';
    }
});

nextBtn.addEventListener('click', function() {
    if (additionalMessageIndex < additionalMessages.length) {
        document.getElementById('additionalMessage').textContent = additionalMessages[additionalMessageIndex];
        document.getElementById('additionalMessage').classList.remove('hidden');
        additionalMessageIndex++;
        nextBtn.textContent = 'Next'; // Change button text to 'Next'
        if (additionalMessageIndex === additionalMessages.length) {
            nextBtn.style.display = 'none'; // Hide button after the last message
        }
    }
});
