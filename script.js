document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login-link');

    // Enable link after 5 minutes (300,000 milliseconds)
    setTimeout(() => {
        loginLink.href = "https://jira.evolent.com/servicedesk/customer/portal/25/user/login?nokerberos&destination=portal%2F25";
        loginLink.classList.remove('disabled-link');
        loginLink.classList.add('active-link');
        loginLink.textContent = 'Click here to access Jira';
    }, 300000);
});