const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Elbin API is running!' });
});

app.post('/register', (req, res) => {
  res.json({ message: 'User registered', data: req.body });
});

app.post('/login', (req, res) => {
  res.json({ message: 'User logged in', data: req.body });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
