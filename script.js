document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const container = document.querySelector(".container");

    // Simulate loading time
    setTimeout(() => {
        preloader.style.display = "none";
        container.style.display = "block";
    }, 3000); // 3 seconds for loading

    // Smooth balloon animation
    const balloons = document.querySelectorAll(".balloons img");
    balloons.forEach((balloon, index) => {
        balloon.style.animationDelay = `${index * 0.5}s`;
    });
});

// Create a limited number of sparkles
let sparkleCount = 0;
const maxSparkles = 50;

document.addEventListener('mousemove', function(e) {
    if (sparkleCount >= maxSparkles) return;
    
    createSparklingHeart(e.pageX, e.pageY);
});

function createSparklingHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'sparkle-heart';
    
    // Random size between 10 and 20 pixels
    const size = Math.random() * 10 + 10;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    
    // Random position offset
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    
    heart.style.left = (x + offsetX - size/2) + 'px';
    heart.style.top = (y + offsetY - size/2) + 'px';
    
    // Random rotation
    const rotation = Math.random() * 360;
    heart.style.transform = `rotate(${rotation}deg)`;
    
    document.body.appendChild(heart);
    sparkleCount++;
    
    setTimeout(() => {
        heart.remove();
        sparkleCount--;
    }, 1000);
}

function createFloatingHearts() {
    const headerHearts = document.querySelector('.header-hearts');
    const numberOfHearts = 15;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 4 + 's';
        headerHearts.appendChild(heart);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', createFloatingHearts);

window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const container = document.querySelector('.container');
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        container.style.display = 'block';
        
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 3000); // Show preloader for 3 seconds
});
