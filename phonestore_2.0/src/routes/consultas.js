const express = require('express');
const router = express.Router();
var path = require('path');
const faqsController=require('../controllers/faqsController')



/* GET faqs page. */

router.get('/consultas',faqsController.questions)

module.exports = router;