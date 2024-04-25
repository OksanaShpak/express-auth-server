const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let id = 4;

const users = [
  {
    id: 1,
    email: 'test@gmail.com',
    password: 'password123',
  },
  {
    id: 2,
    email: 'test123@gmail.com',
    password: 'test',
  },
  {
    id: 3,
    email: 'hi@gmail.com',
    password: 'qwerty',
  }
]

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/api/login', (req, res) => {
  // Handle login logic here
});

app.post('/api/register', (req, res) => {
  const newUser = req.body;
  const emailExists = users.some(user => user.email === newUser.email);
  if (emailExists) {
    res.status(400).json({ error: 'User already exists' });
  } else {
    const newUserId = id++;
    const newUserWithId = { ...newUser, id: newUserId };
    users.push(newUserWithId);
    res.json(newUserWithId);
  }
});

app.get('/api/user', (req, res) => {
  // Handle user authentication logic here
});

app.get('/api/users', (req, res) => {
  // Handle logic to get all users here
  res.json(users);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//page for login user
//admin rights for users page
//mongoDB for database
//validation
//password security
//logout
//adminka should be able to delete users
//frendly feedback in forms
