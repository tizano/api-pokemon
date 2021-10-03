const express = require('express');
const Card = require('../models/card.model');
const router = express.Router();

// Get all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find(req.body).lean(); // "lean" to get only JSON data (not Mongoose objects), faster
    res.status(200).send(cards);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Get a single card
router.get('/:id', async (req, res) => {
  try {
    const card = await Card.findById(req.params.id).lean();
    if (!card) {
      return res.status(404);
    }
    res.status(200).send(card);
  } catch (err) {
    res.status(500).send(err);
  }
})

// Create a card
router.post('/', async (req, res) => {
  try {
    const card = new Card({
      ...req.body,
      createdAt: Date.now()

    });
    await card.save();
    res.status(201).send(card);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Update a card
router.put('/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedAt: Date.now()
      },
      {
        new: true
      }
    );
    if (!card) {
      return res.status(404).send();
    }
    res.status(200).send(card);
  } catch (error) {
    res.status(500).send(error);
  }
})

// Delete a card
router.delete('/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) {
      return res.status(404).send();
    }
    res.status(200).send(card);
  } catch (err) {
    res.status(500).send(err);
  }
})

module.exports = router;
