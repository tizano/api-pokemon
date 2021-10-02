'use strict'

require('dotenv').config();
require('./models/db.config');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5500;
const cardRoutes = require('./routes/card.controller');

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const allowedOrigins = ['http://localhost:3000', 'https://pokemon.mathieuscarlatella.fr'];
app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if (!origin)
      return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use('/cards', cardRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.listen(port, () => {
  console.log(`Server started : ${port}`)
});
