const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Implement your login logic here
  if (username === 'admin' && password === 'password') {
    res.send('Login successful');
  } else {
    res.send('Invalid username or password');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
