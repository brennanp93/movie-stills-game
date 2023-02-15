const express = require('express');
const router = express.Router();
const movieListCtrl = require('../../controllers/api/movielist');

router.get('/', movieListCtrl.index);

// router.put('/:id', movieListCtrl.updateCount);

module.exports = router;