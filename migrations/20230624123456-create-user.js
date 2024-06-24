module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.createTable('Users', {
            id: {
                type: 'INTEGER',
                primaryKey: true,
                autoIncrement: true,
            },
            balance: {
                type: 'INTEGER',
                allowNull: false,
                defaultValue: 10000,
            }
        });
        await queryInterface.bulkInsert('Users', [{
            balance: 10000
        }]);
    },

    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('Users');
    }
};
