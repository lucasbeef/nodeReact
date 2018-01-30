const express = require('express');
const router = express.Router();
const Gifts = require('../controllers/Gifts');

router
  .route('/')
  .get(Gifts.read)
  .post(Gifts.create);

router.delete('/:giftId', Gifts.delete);
router.post('/mailSanta', Gifts.notify);

module.exports = router;
