document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeLoginModal = document.querySelector('.close-login');
    const closeSignupModal = document.querySelector('.close-signup');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    signupButton.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    closeLoginModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    closeSignupModal.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        // تنفيذ التحقق من بيانات تسجيل الدخول هنا
        alert(`Logged in as: ${username}`);
        loginModal.style.display = 'none';
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        // تنفيذ عملية إنشاء حساب جديد هنا
        alert(`Signed up as: ${username} with email: ${email}`);
        signupModal.style.display = 'none';
    });
});
