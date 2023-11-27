// userResume.js

'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');


class UserResume extends Model {
    static associate(models) {
        // Define associations here, if any
    }
}

UserResume.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // below is the template id for styling
        resumeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        userData: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: 'UserResume',
        tableName: 'userResumes', // Make sure it matches the table name in your migration
    }
);

module.exports = UserResume