// js/page6.js

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


    const messageForm = document.getElementById('message-form');
    const formResponse = document.getElementById('form-response');

    if (messageForm) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault(); //

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();


            if (name === '' || email === '' || message === '') {
                formResponse.textContent = 'Please fill in all fields.';
                formResponse.style.color = 'red';
                return;
            }

            fetch('https://formspree.io/f/your-form-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                }),
            })
            .then(response => {
                if (response.ok) {
                    messageForm.reset();
                    formResponse.textContent = 'Thank you for your message!';
                    formResponse.style.color = 'green';
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                formResponse.textContent = 'There was an error submitting your message.';
                formResponse.style.color = 'red';
            });
        });
    }

})();
