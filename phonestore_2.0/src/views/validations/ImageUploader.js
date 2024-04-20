const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/users'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  }
});

module.exports = multer({
  storage,
  fileFilter: function (_req, file, cb) {
    let type = file.mimetype.startsWith('imagen_usuario');
    type ? cb(null, true) : cb(null, false);
  }
});
