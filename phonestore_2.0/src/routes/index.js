const express = require('express');
const router = express.Router();
const indexController= require("../controllers/indexController")
const cookiesGenerate= require("../middleware/cookiesGenerate")
const rememberMeValidator =require("../middleware/rememberMeValidator")

/* GET home page. */
router.get('/',rememberMeValidator,indexController.index)


module.exports = router;
