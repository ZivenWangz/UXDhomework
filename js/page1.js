// js/page1.js

(function() {
    //
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

    // “Learn More About Dabing”
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const page = parseInt(nextBtn.getAttribute('data-page'), 10);
            if (typeof window.loadPage === 'function') {
                window.loadPage(page);
            } else {
                console.error('loadPage function is not available.');
            }
        });
    }

})();
