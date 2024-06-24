const userService = require('../services/userService');

const updateBalance = async (req, res) => {
    const { userId, amount } = req.body;

    try {
        const balance = await userService.updateBalance(userId, amount);
        res.send({ success: true, balance });
    } catch (error) {
        if (error.message === 'User not found') {
            return res.status(404).send({ error: error.message });
        } else if (error.message === 'Insufficient funds') {
            return res.status(400).send({ error: error.message });
        } else {
            return res.status(500).send({ error: 'Internal Server Error' });
        }
    }
};

module.exports = {
    updateBalance,
};
