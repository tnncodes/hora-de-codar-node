const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');

router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost);
router.get('/', ProductController.showProducts);
// router.post('/remove/:id', ProductController.removeProduct);
// router.post('/edit', ProductController.editProductPost);
// router.get('/edit/:id', ProductController.editProduct);
// router.get('/:id', ProductController.getProduct);

module.exports = router;