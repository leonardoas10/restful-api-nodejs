const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET request to /orders'
    });
});

router.post('/', (req, res, next) => {
    const orders = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message: 'POST request to /orders',
        orders: orders
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === '10') {
        res.status(200).json({
            id: id,
            message: 'POST request to /orders IS 10'
        });
    } else {
        res.status(200).json({
            id: id,
            message: "That isn't id"
        });
    }
});

router.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === '10') {
        res.status(200).json({
            id: id,
            message: 'POST request to /orders IS 10'
        });
    } else {
        res.status(200).json({
            id: id,
            message: "That isn't id"
        });
    }
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: `Order Delete: ${id}`
    });
});

module.exports = router;

