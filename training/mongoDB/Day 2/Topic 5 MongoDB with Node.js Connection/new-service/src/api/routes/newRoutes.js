const express = require('express');
const readyCheck = require('../../utils/readyCheck');
const healthCheck = require('../../utils/healthCheck');
const controller = require('../controllers/newController');
const { validateCreateNew } = require('../validators/newValidator');

const router = express.Router();

router.get('/readyz', readyCheck);
router.get('/healthz', healthCheck);
router.get('/', controller.listNews);
router.post('/', validateCreateNew, controller.createNew);

module.exports = router;
