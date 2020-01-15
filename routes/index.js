// routes/index.js
const express = require('express');
const router = express.Router();

//Import Quote model
const Quote = require('../models/quote');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  const {quote, attributed, source} = req.body;

//Creates Quote model
  await Quote.create({quote, attributed, source});

  res.render('index', {quote, attributed, source});

});

module.exports = router;
