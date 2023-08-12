const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ClickSchema = new mongoose.Schema({
  count: Number,
  product: String
});

const Click = mongoose.model('Click', ClickSchema);

router.get('/click', async (req, res) => {
  try {
    const clickData = await Click.findOne();
    res.json({ count: clickData ? clickData.count : 0 });
  } catch (error) {
    console.error('Error fetching click count', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/product', async (req, res) => {
  const { tag } = req.body

  res.json({ ok: tag });
  // try {
  //   let clickData = await Click.findOne();
  //   if (!clickData) {
  //     clickData = new Click({ count: 1 });
  //   } else {
  //     clickData.count++;
  //   }
  //   await clickData.save();
  //   res.json({ count: clickData.count });
  // } catch (error) {
  //   console.error('Error updating click count', error);
  //   res.status(500).json({ error: 'Internal server error' });
  // }
});

module.exports = router;
