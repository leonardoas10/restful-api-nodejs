const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    const products = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message: 'POST request to /products',
        products: products
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === '10') {
        res.status(200).json({
            id: id,
            message: 'POST request to /products IS 10'
        });
    } else {
        res.status(200).json({
            id: id,
            message: "That isn't id"
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === '10') {
        res.status(200).json({
            id: id,
            message: 'POST request to /products IS 10'
        });
    } else {
        res.status(200).json({
            id: id,
            message: "That isn't id"
        });
    }
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `Delete: ${id}`
    });
});

module.exports = router;

