const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');

router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductPost);
router.get('/', ProductController.showProducts);
router.get('/:id', ProductController.getProduct);
router.get('/edit/:id', ProductController.editProduct);
router.post('/edit', ProductController.editProductPost);
// router.post('/remove/:id', ProductController.removeProduct);

module.exports = router;