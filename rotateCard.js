const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
    card.addEventListener('click', function () {
        const isFlipped = card.classList.contains('flipped');

        cards.forEach(otherCard => {
            otherCard.classList.remove('flipped');
        });

        if (!isFlipped) {
            card.classList.add('flipped');
        }
    });
});