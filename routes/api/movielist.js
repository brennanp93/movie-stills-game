const express = require('express');
const router = express.Router();
const movieListCtrl = require('../../controllers/api/movielist');

router.get('/', movieListCtrl.index);


module.exports = router;