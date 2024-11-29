// js/loadPages.js

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main-container');
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    let currentPage = 0; //


    window.loadPage = loadPage;

    const loadedCSS = new Set();

    //
    function loadPage(pageNumber) {
        if (pageNumber === 0) {
            // 首页内容
            mainContainer.innerHTML = `
                <div class="page" id="home-page">
                    <h1>Welcome to Dabing's World</h1>
                    <p>This is the main homepage. Navigate using the buttons below!</p>
                    <div class="nav-buttons">
                        <button data-page="1">Theme Introduction</button>
                        <button data-page="2">About Dabing</button>
                        <button data-page="3">Achievements</button>
                        <button data-page="4">Host & Folk Singer</button>
                        <button data-page="5">Novel Introduction</button>
                        <button data-page="6">Contact</button>
                    </div>
                </div>
            `;
            currentPage = pageNumber;
            updatePaginationButtons();
            initializeHomePage();
        } else {
            fetch(`pages/page${pageNumber}.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(html => {
                    mainContainer.innerHTML = html;
                    currentPage = pageNumber;

                    updatePaginationButtons();

                    loadPageAssets(pageNumber);
                })
                .catch(err => console.error('Error loading page:', err));
        }
    }

    function loadPageAssets(pageNumber) {
        if (!loadedCSS.has(pageNumber)) {
            const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = `css/page${pageNumber}.css`;
            document.head.appendChild(cssLink);
            loadedCSS.add(pageNumber);
        }

        const script = document.createElement('script');

        script.src = `js/page${pageNumber}.js?ts=${new Date().getTime()}`;
        script.defer = true;
        script.onload = () => {
            console.log(`Page${pageNumber} script loaded.`);
        };
        script.onerror = () => {
            console.error(`Failed to load Page${pageNumber} script.`);
        };
        document.body.appendChild(script);
    }

    function updatePaginationButtons() {
        paginationButtons.forEach((btn) => {
            const page = parseInt(btn.getAttribute('data-page'), 10);
            btn.classList.toggle('active', page === currentPage);
        });
    }

    function initializeHomePage() {
        const navButtons = document.querySelectorAll('.nav-buttons button');
        navButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const page = parseInt(e.target.getAttribute('data-page'), 10);
                loadPage(page);
            });
        });
    }

    paginationButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const page = parseInt(btn.getAttribute('data-page'), 10);
            loadPage(page);
        });
    });


    loadPage(0);
});
