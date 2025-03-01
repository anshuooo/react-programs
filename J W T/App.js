const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
// Secret key for JWT
const secretKey = 'student-key';
// Middleware to parse JSON body
app.use(bodyParser.json());
// Mock user database
const users = [
{ id: 1, username: 'garima23', password: 'abcd' },
{ id: 2, username: 'vivek97', password: 'wxyz' },
{ id: 3, username: 'tushar42', password: 'mnop' }
];
// Endpoint to generate JWT upon successful login
app.post('/login', (req, res) => {
// Extract username and password from request body
const { username, password } = req.body;
// Mock authentication (replace with actual authentication logic)
const user = users.find(u => u.username === username && u.password ===
password);
if (!user) {
return res.status(401).json({ message: 'Invalid username or password' });
}// Generate JWT token
const token = jwt.sign({ userId: user.id, username: user.username }, secretKey);
// Send the token as response
res.json(`generated token is - ${ token }`);
});
// Middleware to verify JWT token
function verifyToken(req, res, next) {
// Get token from request header
const authHeader = req.headers['authorization'];
if (!authHeader) {
return res.status(401).json({ message: 'Authorization header is missing' });
}
// Extract token from Authorization header
const token = authHeader.split(' ')[1]; // Remove 'Bearer ' prefix
if (!token) {
return res.status(401).json({ message: 'Token is missing' });
}
// Verify token
jwt.verify(token, secretKey, (err, decoded) => {
if (err) {
return res.status(403).json({ message: 'Failed to authenticate token' });
}
// If token is valid, save decoded data in request object for further use
req.decoded = decoded;
next();
});
}
// Protected route that requires authentication
app.get('/protected', verifyToken, (req, res) => {
// Access decoded data (user information) from request object
const { userId, username } = req.decoded;
res.json({ userId, username, message: 'Protected route accessed successfully' });
});
// Start server
app.listen(port, () => {
console.log(`Server is running on http://localhost:3000`);
});

