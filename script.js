document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const eidContainer = document.getElementById('eidContainer');
    
    revealButton.addEventListener('click', () => {
        eidContainer.classList.remove('hidden');
        revealButton.parentElement.classList.add('hidden');
        createFireworks();
    });
    
    const lanterns = document.querySelectorAll('.lantern');
    
    lanterns.forEach(lantern => {
        lantern.addEventListener('animationiteration', () => {
            const randomX = Math.floor(Math.random() * 100);
            lantern.style.left = `${randomX}%`;
        });
    });
});

function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    
    setInterval(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }, 500);
}
