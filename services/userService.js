const db = require('../models');

const updateBalance = async (userId, amount) => {
    try {
        return await db.User.updateBalance(userId, amount);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    updateBalance,
};
