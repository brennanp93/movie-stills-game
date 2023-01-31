const express = require('express');
const router = express.Router();
const answerKeyCtrl = require('../../controllers/api/answerkey');

router.get('/', answerKeyCtrl.index);


module.exports = router;