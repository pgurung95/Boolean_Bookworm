//Personal Reading List Table
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class prList extends Model { }

prList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        book_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        book_author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        book_description: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'prList',
    }
);

module.exports = prList;
