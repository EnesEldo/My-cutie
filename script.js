document.getElementById('revealBtn').addEventListener('click', function() {
    document.getElementById('surprise').classList.remove('hidden');
    document.getElementById('message').textContent = "Here's something to brighten your day!";
    this.style.display = 'none';
});

document.getElementById('nextBtn').addEventListener('click', function() {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don’t skeletons fight each other? They don’t have the guts."
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke').textContent = randomJoke;
    document.getElementById('joke').classList.remove('hidden');
});
