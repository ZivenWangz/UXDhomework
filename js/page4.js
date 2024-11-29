// js/page4.js

(function() {
    const backToHomeButton = document.getElementById('back-to-home');
    if (backToHomeButton) {
        backToHomeButton.addEventListener('click', () => {
            // 使用全局的 loadPage 函数返回首页 (pageNumber 0)
            if (typeof window.loadPage === 'function') {
                window.loadPage(0);
            } else {
                console.error('loadPage function is not available.');
            }
        });
    }

    const interactiveTaverns = document.querySelectorAll('.tavern-item:not(.non-interactive)');


    const modal = document.getElementById('location-modal');
    const modalLocationText = document.getElementById('modal-location-text');
    const closeButton = document.querySelector('.close-button');

    interactiveTaverns.forEach(tavern => {
        tavern.addEventListener('click', () => {
            const location = tavern.getAttribute('data-location');
            modalLocationText.textContent = location;
            modal.style.display = 'block';
        });
    });


    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }


    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
})();
