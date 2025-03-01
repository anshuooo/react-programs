const { connect } = require('http2');
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb+srv://anshukumarn000:<anshu!@##^^>@anshuapi.q6lxp.mongodb.net/',
{
serverSelectionTimeoutMS: 5000 // Set a timeout of 5 second
})
.then(() => {
console.log('Connected to MongoDB');
})
.catch((error) => {
console.error('Error connecting to MongoDB:', error);
});

module.exports = connectdb;