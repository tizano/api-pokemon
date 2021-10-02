const mongoose = require('mongoose');
const cardSchema = require('../schemas/card.schema');

// 3e argument obligé, car la collection/table dans la db n'est pas au pluriel
const Card = mongoose.model(
  'Card', cardSchema, 'card'
);

module.exports = Card;

 
