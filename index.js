// Import required modules
const express = require('express');

// Create Express app
const app = express();
const port = 3000;

// Define a route handler for the /hello route
app.get('/hello', (req, res) => {
    // Generate a greeting message
    const greetingMessage = generateGreeting();

    // Send the greeting message as the response
    res.send(greetingMessage);
});

// Function to generate a greeting message
function generateGreeting() {
    const hour = new Date().getHours();
    let greetingMessage;

    if (hour < 12) {
        greetingMessage = 'Good morning!';
    } else if (hour >= 12 && hour < 18) {
        greetingMessage = 'Good afternoon!';
    } else {
        greetingMessage = 'Good evening!';
    }

    return greetingMessage;
}

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

