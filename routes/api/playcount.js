const express = require('express');
const router = express.Router();
const playCountCtrl = require('../../controllers/api/playcount');

router.get('/', playCountCtrl.index);

// router.put('/', playCountCtrl.updateCount);
router.put('/:id', playCountCtrl.updateCount);

module.exports = router;