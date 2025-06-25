// Simulated user database (in a real app, this would be in a secure database)
const bcrypt = require('bcryptjs');

const users = [
    {
        username: 'johi',
        password: bcrypt.hashSync('johi', 10)  // Esto sí es un hash
    }
];

document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    const user = users.find(u => u.username === username);
    
    if (!user) {
        errorMessage.textContent = "Invalid username";
        return;
    }
    
    const isValid = await bcrypt.compare(password, user.password);
    
    if (isValid) {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = "../views/pages/home.html";
    } else {
        errorMessage.textContent = "Invalid password";
    }
});