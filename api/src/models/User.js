const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
    'user',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            allowNull: true,
            type: DataTypes.STRING(80),
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            isEmail: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    { timestamps: false }
    );
};
