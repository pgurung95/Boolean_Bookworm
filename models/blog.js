const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class blog extends Model { }


blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
                type: DataTypes.STRING,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'name',
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

module.exports = blog;
