// Simulated user database (in a real app, this would be in a secure database)
const users = [
    {
        username: 'admin',
        // This is a hashed version of 'password123'
        password: '$2a$10$CwTycUXWue0Thq9StjUM0uQxTJJp.yqeO4XbgzHl1RW.17CneAZEi'
    }
];

const bcrypt = require('bcryptjs');

document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    const user = users.find(u => u.username === username);
    
    if (!user) {
        errorMessage.textContent = "Invalid username or password";
        return;
    }
    
    const isValid = await bcrypt.compare(password, user.password);
    
    if (isValid) {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = "../views/pages/home.html";
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});