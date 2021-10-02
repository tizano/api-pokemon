'use strict'

require('dotenv').config();
require('./models/db.config');

const express = require('express');
const app = express();
const port = 5500;
const cardRoutes = require('./routes/card.controller');

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: ['http://localhost*', 'https://pokemon.mathieuscarlatella.fr']
}));
app.use('/cards', cardRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.listen(port, () => {
  console.log(`Server started : ${port}`)
});
