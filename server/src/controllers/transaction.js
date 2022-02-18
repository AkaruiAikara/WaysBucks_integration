const { Transaction, User, Order, Product, Topping, OrderTopping } = require('../../models');

// get all transactions
exports.getTransactions = (req, res) => {
    try {
        Transaction.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'fullName', 'email']
                },
                {
                    model: Order,
                    as: 'orders',
                    attributes: ['id', 'qty'],
                    include: [
                        {
                            model: Product,
                            as: 'product',
                            attributes: ['id', 'title', 'price', 'image']
                        },
                        {
                            model: Topping,
                            as: 'toppings',
                            through: {
                                model: OrderTopping,
                                as: 'orderToppings',
                                attributes: []
                            },
                            attributes: ['id', 'title', 'price']
                        }
                    ]
                }
            ],
            attributes: ['id', 'status', 'createdAt']
        }).then(transactions => {
            res.send({
                status: 'success',
                data: {transactions}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// get transactions by user id
exports.getTransactionsByUserId = (req, res) => {
    try {
        Transaction.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'fullName', 'email']
                },
                {
                    model: Order,
                    as: 'orders',
                    attributes: ['id', 'qty'],
                    include: [
                        {
                            model: Product,
                            as: 'product',
                            attributes: ['id', 'title', 'price', 'image']
                        },
                        {
                            model: Topping,
                            as: 'toppings',
                            through: {
                                model: OrderTopping,
                                as: 'orderToppings',
                                attributes: []
                            },
                            attributes: ['id', 'title', 'price']
                        }
                    ]
                }
            ],
            attributes: ['id', 'status', 'createdAt'],
            where: {
                userId: req.params.userId
            }
        }).then(transactions => {
            if (transactions.length === 0) {
                res.status(404).send({
                    status: 'error',
                    message: 'User not found'
                });
                return;
            }
            res.send({
                status: 'success',
                data: {transactions}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// get transaction by id
exports.getTransactionById = (req, res) => {
    try {
        Transaction.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'fullName', 'email']
                }
            ],
            attributes: ['id', 'status', 'createdAt']
        }).then(transaction => {
            if (!transaction) {
                res.status(404).send({
                    status: 'error',
                    message: 'Transaction not found'
                });
                return;
            }
            res.send({
                status: 'success',
                data: {transaction}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// add transaction
exports.addTransaction = (req, res) => {
    try {
        Transaction.create({
            userId: req.body.userId,
            status: req.body.status
        }).then(transaction => {
            res.send({
                status: 'success',
                data: { transaction }
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// update transaction
exports.updateTransaction = (req, res) => {
    try {
        Transaction.update({
            status: req.body.status
        }, {
            where: {
                id: req.params.id
            }
        }).then(transaction => {
            res.send({
                status: 'success',
                data: {
                    id: req.params.id
                }
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// delete transaction
exports.deleteTransaction = (req, res) => {
    try {
        Transaction.destroy({
            where: {
                id: req.params.id
            }
        }).then(transaction => {
            res.send({
                status: 'success',
                data: {
                    id: req.params.id
                }
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};