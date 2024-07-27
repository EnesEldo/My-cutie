document.getElementById('revealBtn').addEventListener('click', function() {
    document.getElementById('surprise').classList.remove('hidden');
    document.getElementById('message').textContent = "Here's something to brighten your day!";
    this.style.display = 'none';
});

document.getElementById('nextBtn').addEventListener('click', function() {
    const nexts = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don’t skeletons fight each other? They don’t have the guts."
    ];
    const randomNext = nexts[Math.floor(Math.random() * nexts.length)];
    document.getElementById('next').textContent = randomNext;
    document.getElementById('next').classList.remove('hidden');
});
