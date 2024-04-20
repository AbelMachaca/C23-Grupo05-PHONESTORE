const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const { v4: uuidv4 } = require("uuid");
const db = require("../database/models");
const { log } = require("console");


const getJson = () => {
  const productsFilePath = path.join(__dirname, "../data/products.json");
  const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  return products;
};

const productController = {
  addToCart: async (req, res) => {
    try {
      const productId = req.body.productId;
      req.session.cart = req.session.cart || [];
      req.session.cart.push(productId);
      
      log("addddtocaarrrrr", productId)
      res.redirect("/products/productCart");
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
      res.status(500).send("Error interno del servidor al agregar producto al carrito");
    }
  },


  cart: async (req, res) => {                       
    try {
    
      const productIdsInCart = req.session.cart || [];
      /*
      console.log("REQ.SE.CART",JSON.stringify(req.session.cart));
      console.log("IDs de productos en el carrito:", productIdsInCart);
      */

      const productsInCart = await db.Producto.findAll({
        where: { id: productIdsInCart },
        include: [{
          association: "imagenes_productos"
        }]
      });
      let totalPrecio = 0;
      productsInCart.forEach(product => {
        totalPrecio += parseFloat(product.precio) ;
      });
      
      /*
      console.log(JSON.stringify(productsInCart));
      console.log("Productos en el carrito:", productsInCart);
*/
      

      res.render("products/productCart", {
        productsInCart,
        usuario: req.session.user,
        totalPrecio
      });
    } catch (error) {
      console.error("Error al obtener productos del carrito:", error);
      res.status(500).send("Error interno del servidor al obtener productos del carrito");
    }
},
removeFromCart: (req, res) => {
  const productId = req.body.productId;

  console.log("productoiDDDD"+productId);

  console.log("REQ.SESSION.CART"+req.session.cart);

  if (productId) {
     
      if (req.session.cart && req.session.cart.includes(productId)) {
        req.session.cart = req.session.cart.filter(id => id !== productId);
      }
    } else {
      
      req.session.cart = [];
    }
  
  res.redirect('/products/productCart');
},
  detail: (req, res) => {
    console.log(req.params.id)

    let producto = db.Producto.findByPk(req.params.id,{
      include: [{
          association: "imagenes_productos"},
       ],
    });
    Promise.all([producto])
      .then(([producto]) => {
           return res.render("products/productDetail",{
           producto, 
           usuario: req.session.user,
           imagen: producto.imagenes_productos,
           title: producto.modelo
       })
    })
      .catch(error=> console.log(error));

    },
  edit: (req, res) => {
    console.log("aaaaaaaaaaaaaaaa");
    const { id } = req.params;
    db.Producto.findByPk(id)
    .then((product) => {
      console.log(product);
      res.render("products/productEdit", { product, usuario: req.session.user});
    });
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { marca, modelo, precio, almacenamiento, ram, so, descripcion } = req.body;
      const product = await db.Producto.findByPk(id);
      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }
      await product.update(req.body);
      res.redirect(`/products/dashboard`);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res
        .status(500)
        .send("Error interno del servidor al actualizar el producto");
    }
  },


  createForm: (req, res) => {
    res.render("products/productCreate_form",{usuario: req.session.user});
  },
 
  store: (req, res) => {
    const errores = validationResult(req);
      if (!errores.isEmpty()) {
        console.log(errores)
        return res.render("products/productCreate_form", {
          errores: errores.mapped(),
          old: req.body,
          title: 'Producto'
        });
      }

    const { modelo, marca, precio, descripcion, almacenamiento, ram, so } = req.body;
  
    db.Producto.create({ modelo, marca, precio, descripcion, almacenamiento, ram, so })
        .then(producto => {
            
            const productId = producto.id;
            // console.log(productId)
            const files = req.files;
            const promises = files.map(file => {
               console.log(files)
                return db.imagenes_producto.create({ id_producto_imagen: productId, url_de_imagen: file.filename });
            });
   console.log(promises)
            
            Promise.all(promises)
                .then((imagen) => {
                   
                    res.redirect(`/products/productDetail/${producto.id}`);
                })
                // .catch(error => {
                //     console.error("Error al guardar las imágenes:", error);
                //     res.status(500).send("Error interno del servidor al guardar las imágenes");
                // });
        })
        .catch(error => {
            console.error("Error al crear el producto:", error);
            res.status(500).send("Error interno del servidor");
        });
  },

  dashboard: (req, res) => {
    console.log("DASHBOARD")
    db.Producto.findAll({
      include: [{ 
          association: "imagenes_productos"}]
          //borre el ,limit 6
  })
    .then((productos)=>{
        res.render("products/dashboard", { productos,usuario: req.session.user });
    })
    .catch(error =>{console.error(error)})
  },
  delete: (req, res) => {
    const productId = req.params.id;
    console.log(productId);

    db.imagenes_producto.destroy({
      
        where: {
            id_producto_imagen: productId
        }
    })
    .then(() => {
        return db.Producto.destroy({
            where: {
                id: productId
            }
        });
    })
    .then(() => {
        res.redirect("/products/dashboard");
    })
    .catch(error => {
        console.log(error);
        res.status(500).send("Error al eliminar el producto.");
    });
  },
  showPhotoProduct:(req,res)=>{
    let producto = db.Producto.findByPk(req.params.id,{
      include: [{
          association: "imagenes_productos"},
       ],
    });
    Promise.all([producto])
      .then(([producto]) => {

        console.log(producto)
           return res.render("products/photoProduct",{
           producto, 
           usuario: req.session.user,
           imagen: producto.imagenes_productos,
           title: producto.modelo
       })
    })
      .catch(error=> console.log(error));

    },
}

module.exports = productController;
