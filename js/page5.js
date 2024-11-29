// js/page5.js

(function() {
    const backToHomeButton = document.getElementById('back-to-home');
    if (backToHomeButton) {
        backToHomeButton.addEventListener('click', () => {
            if (typeof window.loadPage === 'function') {
                window.loadPage(0);
            } else {
                console.error('loadPage function is not available.');
            }
        });
    }

    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(card => {
        const quotes = card.querySelectorAll('.quote');
        const prevBtn = card.querySelector('.prev-quote');
        const nextBtn = card.querySelector('.next-quote');
        let currentQuote = 0;

        if (quotes.length > 0) {
            quotes[0].classList.add('active');
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {

                quotes[currentQuote].classList.remove('active');

                currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;


                quotes[currentQuote].classList.add('active');
            });
        }


        if (nextBtn) {
            nextBtn.addEventListener('click', () => {

                quotes[currentQuote].classList.remove('active');

                currentQuote = (currentQuote + 1) % quotes.length;

                quotes[currentQuote].classList.add('active');
            });
        }
    });
})();
