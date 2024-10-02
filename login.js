document.addEventListener('DOMContentLoaded'), function () {
    // Check if user is logged in or guest
        if (window.location.pathname.endsWith('index.html')) {
            if (!localStorage.getItem('loggedIn') && !localStorage.getItem('guest')) {
                window.location.href = 'index.html';
            }
        }
    
    // Functionality for login.html
        if (window.location.pathname.endsWith('login.html')) {
            document.getElementById('signin-button').addEventListener('click', function () {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            // Sample login information
            const validUsername = 'user';
            const validPassword = 'pass';
    
            if (username === validUsername && password === validPassword) {
                localStorage.setItem('loggedIn', 'true'); // Set login status
                window.location.href = 'index.html'; // Redirect to weather page
            } else {
                document.getElementById('signin-error').classList.remove('hidden'); // Show error
            }
        });
    
        // Guest login functionality
        document.getElementById('guest-button').addEventListener('click', function () {
            localStorage.setItem('guest', 'true'); // Set guest status
            window.location.href = 'index.html'; // Redirect to weather page
        });
    }
}