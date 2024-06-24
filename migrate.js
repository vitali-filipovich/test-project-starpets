require('dotenv').config();
const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');
const config = require('./configs/database.js').development;
console.log('1111', config);

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);

const umzug = new Umzug({
    migrations: { glob: 'migrations/*.js' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});

(async () => {
    await umzug.up();
    console.log('Migrations executed successfully');
    process.exit(0);
})();
