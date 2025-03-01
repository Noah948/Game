const colors = ['green', 'red', 'yellow', 'blue'];
let gameSequence = [];
let userSequence = [];
let level = 0;
let gameStarted = false;

// Select DOM elements
const startButton = document.getElementById('start-btn');
const statusDisplay = document.getElementById('status');
const colorBoxes = document.querySelectorAll('.color-box');

// Start the game
startButton.addEventListener('click', startGame);

function startGame() {
    level = 0;
    gameSequence = [];
    userSequence = [];
    gameStarted = true;
    statusDisplay.textContent = "Level " + (level + 1);
    nextSequence();
}

function nextSequence() {
    userSequence = [];
    level++;
    statusDisplay.textContent = "Level " + level;
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameSequence.push(randomColor);
    
    gameSequence.forEach((color, index) => {
        setTimeout(() => {
            flashColor(color);
        }, (index + 1) * 600);
    });
}

// Flash the color with sound
function flashColor(color) {
    const element = document.getElementById(color);
    const sound = document.getElementById(`sound-${color}`);
    
    element.classList.add('flashing');
    sound.play();  // Play the sound for the specific color
    
    setTimeout(() => {
        element.classList.remove('flashing');
    }, 600);  // Adjust the timing to match the animation duration
}

// Handle user clicks
colorBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
        if (!gameStarted) return;
        
        const userChosenColor = e.target.id;
        userSequence.push(userChosenColor);
        flashColor(userChosenColor);
        checkAnswer(userSequence.length - 1);
    });
});

// Check user answer
function checkAnswer(currentLevel) {
    if (userSequence[currentLevel] === gameSequence[currentLevel]) {
        if (userSequence.length === gameSequence.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        gameOver();
    }
}

function gameOver() {
    statusDisplay.textContent = "Game Over! Press Start to Retry.";
    gameStarted = false;
}
