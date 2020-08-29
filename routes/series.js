const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

router.get('/',seriesController.getAll);
router.get('/:id',seriesController.getById);
router.post('/create', seriesController.create)


module.exports = router;