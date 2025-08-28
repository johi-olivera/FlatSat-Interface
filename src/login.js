// Simulated user database (in a real app, this would be in a secure database)
const bcrypt = require('bcryptjs');

const users = [
    {
        username: 'johi',
        password: bcrypt.hashSync('johi', 10)  // Esto sí es un hash
    }
];

// ...existing code...