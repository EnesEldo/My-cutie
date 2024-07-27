const messages = [
    "You might be asking why did i put alot of effort into this...",
    "It's because I Love You and I wanna cheer you up by making this website which looks simple but meaningful",
    "With this i wanted to remind you, I will and try to be the best for you and you will never be scared with me as long we try alright? "
    "I want you to know that you are incomparable and unique, and I love you just as you are, you bring so much joy into my life, and I am so grateful for you, no one should ever compare you because you are one of a kind.""
];

const additionalMessages = [
    "You deserve all the effort from me and i will not stop until the end of our life!",
    "Never forget that i'm always here for you, Don't be scared with me ya?",
    "And promise me... be alive for me would ya?",
    "Promise me to love and remember me...",
    "Deep down I truly Love You no matter what from my bottom of my heart to the top!!",
    "May God bless our relationship, our journey together, you and i will have a great blessed path" 
    "I Love You in Every Universe"
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
