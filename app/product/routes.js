 const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const productController = require('./controller');

router.get('/product', productController.index);
router.get('/product/:id', productController.view);
router.post('/product/', upload.single('image'), productController.store);
router.put('/product/:id', upload.single('image'), productController.update);
router.delete('/product/:id',  productController.destroy);


module.exports = router;
// const router = require('express').Router();
// const fs = require('fs');
// const path = require('path')
// const multer = require('multer');
// const upload = multer({dest: 'upload'});
// const connection = require('../../config/mysql')
// const productController = require('./controller')

// router.get('/product', productController);


// router.get('/product/:id', (req, res) => {
//   connection.query({
//     sql : `SELECT * FROM products WHERE id = ?`,
//     values : [req.params.id]
//   }, (error, result) => {
//     if(error){
//       res.send({
//         status: 'failed',
//         response : 'failed to fetch data'
//       });
//     }else {
//       res.send({
//         status: 'success',
//         response: result
//       })
//     }
//   });

// });




// router.post('/product/',  upload.single('image'), (req, res) => {
//   const {name, price, stock, status} = req.body;
//   const image = req.file;
//   if(image) {
//     const target = path.join(__dirname, 'upload', image.originalname);
//     fs.renameSync(image.path, target)
//     // res.json({
//     //   name, price, stock, status, image
//     // });
//     res.sendFile(target);
//   }
// });

// // router.get('/:category/:tag', (req, res) => {
// //   const {category, tag} = req.params;
// //   res.json({
// //     category, tag
// //   });
// // });

// module.exports = router;