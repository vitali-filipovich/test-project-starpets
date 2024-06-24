module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10000
        }
    }, {
        timestamps: false,
        tableName: 'Users'
    });

    User.updateBalance = async function(userId, amount) {
        return await sequelize.transaction(async (t) => {
            const user = await User.findByPk(userId, {transaction: t});

            if (!user) {
                throw new Error('User not found');
            }

            const newBalance = user.balance + amount;
            if (newBalance < 0) {
                throw new Error('Insufficient funds');
            }

            await user.update({balance: newBalance}, {transaction: t});

            return user.balance;
        });
    };

    return User;
};
