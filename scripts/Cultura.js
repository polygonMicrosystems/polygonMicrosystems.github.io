document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {

            card.style.backgroundColor = getRandomPastelColor();
        });
    });

    function getRandomPastelColor() {
        const hue = Math.floor(Math.random() * 360);
        const pastelSaturation = Math.floor(Math.random() * 31) + 70;
        const pastelLightness = Math.floor(Math.random() * 16) + 65;
        return `hsl(${hue}, ${pastelSaturation}%, ${pastelLightness}%)`;
    }
});
