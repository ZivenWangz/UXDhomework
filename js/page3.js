// js/page3.js

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


})();
