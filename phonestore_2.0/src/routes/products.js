const express = require('express');
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController")

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,(path.join(__dirname,"../","../","public/images")))
    },
    filename:(req,file,cb)=>{

        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const upload  = multer({storage});

/* GET home page. */

router.get('/productDetail/:id', productController.detail);

router.get('/productCart', productController.cart)

router.get('/productCreateForm', productController.createForm)

router.get('/productEdit/:id', productController.edit )
router.put('/productEdit/:id', productController.update)
router.post('/productEdit', upload.single("imagen"), productController.store); 

router.get('/dashboard', productController.dashboard )

module.exports = router;