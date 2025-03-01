const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/users', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json(); // Convert the response to JSON
    res.json(users); // Send the fetched data to the client
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
