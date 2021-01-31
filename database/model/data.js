const { DataTypes } = require('sequelize');
const sequelize = new sequelize();

const users = sequelize.define("users", {
    id: {
        type: DataTypes.BIGINT,
        premaryKey: true
    },
    emailAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const shapes = sequelize.define("shapes", {
    id: {
        type: DataTypes.BIGINT,
        premaryKey: true
    },
    emailAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    payload: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = {shapes, users}