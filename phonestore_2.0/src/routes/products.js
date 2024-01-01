const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")
const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,(path.join(__dirname,"../","../","public/images/products")))
    },
    filename:(req,file,cb)=>{

        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const upload  = multer({storage});


/* GET home page. */

router.get('/productDetail', productController.detail);

router.get('/productCart', productController.cart)

router.get('/productCreate_form', productController.createForm)
router.post('/productCreate_form',upload.array("image"), productController.store); 


router.get('/productEdit', productController.edit )

router.get('/dashboard', productController.dashboard )

module.exports = router;