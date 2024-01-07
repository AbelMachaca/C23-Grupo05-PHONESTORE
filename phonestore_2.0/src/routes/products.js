const express = require('express');
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController")

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,("../../public/images"));
    },
    filename: (req,file,cb) =>{
        const newFileName = "img-"+ Date.now() + path.extname(file.originalname);
        cb(null,newFileName)
    }
});

const upload = multer({storage});


/* GET home page. */

router.get('/productDetail/:id', productController.detail);

router.get('/productCart', productController.cart)

router.get('/productCreateForm', productController.createForm)

router.get('/productEdit/:id', productController.edit )
router.put('/productEdit/:id', productController.update)
//router.post('/productEdit/:id', upload.single("image"), productController.store); 

router.get('/dashboard', productController.dashboard )

module.exports = router;