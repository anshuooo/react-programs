
const express = require('express');
const app = express();
// Route to handle GET requests
app.get('/', (req, res) => {
// Send a 200 OK status code with a message
res.status(200).send('Hello, Students!');
});
// Route to handle POST requests
app.post('/create', (req, res) => {
// Send a 201 Created status code with a message
res.status(201).send('Resource created successfully');
});
// Route to handle invalid requests
app.get('/error', (req, res) => {
// Send a 400 Bad Request status code with a message
res.status(400).send('Bad Request');
});
// Route to handle unauthorized access
app.get('/unauthorized', (req, res) => {
// Send a 401 Unauthorized status code with a message
res.status(401).send('Unauthorized');
});
// Route to handle not found resources
app.get('/notfound', (req, res) => {
// Send a 404 Not Found status code with a message
res.status(404).send('Not Found');
});
// Route to simulate internal server error
app.get('/error500', (req, res) => {
// Send a 500 Internal Server Error status code with a message
res.status(500).send('Internal Server Error');
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });