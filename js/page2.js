// js/page2.js

(function() {
    const stations = document.querySelectorAll('.station');
    const contentDisplay = document.getElementById('station-content');
    let activeStation = null;

    // Add click event for each station
    stations.forEach((station) => {
        station.addEventListener('click', () => {
            const content = station.getAttribute('data-content');

            if (contentDisplay.classList.contains('show') && activeStation === station) {
                // Hide content if the same station is clicked again
                contentDisplay.classList.remove('show');
                contentDisplay.innerHTML = '';
                activeStation = null;
            } else {
                // Show content
                contentDisplay.innerHTML = content;
                contentDisplay.classList.add('show');
                activeStation = station;

                // Scroll to content display area
                contentDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Back to Home button functionality
    const backToHomeButton = document.getElementById('back-to-home');
    if (backToHomeButton) {
        backToHomeButton.addEventListener('click', () => {
            // Use the global loadPage function to return to the home page
            if (typeof window.loadPage === 'function') {
                window.loadPage(0);
            } else {
                console.error('loadPage function is not available.');
            }
        });
    }
})();
