// Search Form Submission
document.querySelector('#searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const suburb = document.querySelector('input[name="suburb"]').value;
    const price = document.querySelector('input[name="price"]').value;
    
    // Simulate search result fetch (replace with actual API or data source call)
    alert(`Searching for accommodations in ${suburb} with a max rent of ${price}`);
});

// Login Form Submission
document.querySelector('#loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    // Simulate login process (replace with actual authentication)
    alert(`Logging in with Email: ${email}`);
});

// Registration Form Submission
document.querySelector('#registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentID = document.querySelector('input[name="studentID"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    
    // Simple check for password confirmation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Simulate registration process (replace with actual registration logic)
    alert(`Registering Student ID: ${studentID} with Email: ${email}`);
});

// Post Accommodation Form Submission
document.querySelector('#postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const suburb = document.querySelector('input[name="suburb"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const rooms = document.querySelector('input[name="rooms"]').value;
    const details = document.querySelector('textarea[name="details"]').value;
    
    // Simulate accommodation posting (replace with actual data handling)
    alert(`Posting accommodation in ${suburb} for ${price} per week.`);
});
