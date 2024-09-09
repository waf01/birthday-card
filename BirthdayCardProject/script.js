// Load sound files
const levelUpSound = new Audio('level-up.mp3');
const clickSound = new Audio('click.mp3');
const birthdaySound = new Audio('birthday-theme.mp3');
const celebrationSound = new Audio('celebration.mp3');
const hiddenAchievementSound = new Audio('hidden-achievement.mp3');

// Function to play a sound
function playSound(sound) {
    sound.play();
}

// Text change sequence
let clickCount = 0;
const messages = [
    "Level Up!",
    "[Ivan] has reached an EPIC milestone. . .",
    "Happy Birthday, Player 1!",
    "You've reached Level 25! 🏆"
];

function updateText() {
    const textElement = document.getElementById('text');
    if (clickCount === 0) {
        textElement.innerText = messages[0];
        playSound(levelUpSound);
    } else if (clickCount === 1) {
        textElement.innerText = messages[1];
        playSound(clickSound);
    } else if (clickCount === 2) {
        textElement.innerText = messages[2];
        playSound(birthdaySound);
    } else if (clickCount === 3) {
        textElement.innerText = messages[3];
        playSound(celebrationSound);
        document.getElementById('show-skills').style.display = 'block';
    }
    clickCount++;
}

document.getElementById('text').addEventListener('click', updateText);

// Show skills button click event
document.getElementById('show-skills').addEventListener('click', function() {
    playSound(celebrationSound);

    const skillsElement = document.getElementById('skills');
    const skills = [
        "👍🏻 Basedness +10",
        "👒 Straw Hat Bond +20",
        "🔥 Will of D. +20",
        "🏴‍☠ Courage of the Sea +15"
    ];

    skills.forEach((skill, index) => {
        setTimeout(() => {
            const skillDiv = document.createElement('div');
            skillDiv.innerText = skill;
            skillsElement.appendChild(skillDiv);
        }, index * 1000); // Adjust delay as needed
    });

    skillsElement.style.display = 'block';

    // Hidden achievement
    setTimeout(() => {
        document.getElementById('hidden-achievement').style.display = 'block';
        playSound(hiddenAchievementSound);
    }, skills.length * 1000);
});