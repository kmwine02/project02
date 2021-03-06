const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Contact extends Model {};

Contact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        addressLine1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        addressLine2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        addressCity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        addressState: {
            type: DataTypes.STRING,
            allowNull: true
        },
        addressZip: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Contact'
    },

// Contact.associate = (models) =>{
//     models.Contact.belongsTo(models.User, {
//         foreignKey: {
//           allowNull: false,
//         },
//       });
//     return Contact;
);

module.exports = Contact;