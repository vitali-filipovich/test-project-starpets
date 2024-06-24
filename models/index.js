require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('../configs/database.js').development;

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);

const db = {
    sequelize,
    Sequelize,
    User: require('./user')(sequelize, Sequelize)
};

module.exports = db;
