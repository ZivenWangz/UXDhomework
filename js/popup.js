document.addEventListener('DOMContentLoaded', () => {

    function showPopup() {
        const popup = document.createElement('div');
        popup.classList.add('popup-overlay');
        popup.innerHTML = `
            <div class="popup-content">
                <h2>Welcome to Dabing Fan Website</h2>
                <p>This is a fan-made website dedicated to Dabing's talents and works. If you are not a fan of Dabing, feel free to explore or leave as you wish.</p>
                <button id="close-popup">Got it</button>
            </div>
        `;

        document.body.appendChild(popup);

        const closePopupBtn = document.getElementById('close-popup');
        closePopupBtn.addEventListener('click', () => {
            popup.remove();
        });
    }


    showPopup();
});
