const authorRouter = require('./auth/authRoutes');

app.use(authorRouter);


const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Main route handler
app.get('/', (req, res) => {
  res.send('Welcome to the Express App');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
