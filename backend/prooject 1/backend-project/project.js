
// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware setup
app.use(bodyParser.json());
// Sample data: employees array
let employees = [
{ id: 1, name: 'Neha Joshi', city: 'Jaipur' },
{ id: 2, name: 'Tarun Kumar', city: 'delhi' },
{ id: 3, name: 'Manisha Sharma', city: 'Gurugram' },
{ id: 4, name: 'Utkarsh Mittal', city: 'delhi' }
];

// Routes
// GET /employees - Get all employees
app.get('/employees', (req, res) => {
res.json(employees);
});
// POST /employees - Add a new employee
app.post('/employees', (req, res) => {
const newEmp = req.body;
employees.push(newEmp);
res.status(201).json(newEmp);
});
// Start the server
app.listen(PORT, () => {
console.log(`Server is now running on http://localhost:${PORT}`);
});