import { DataTypes, Model } from 'sequelize';
import util from 'util';
import db from '../../server/config/db.js';


// Define User Table
export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // If a user is an admin, like store manager, this must be set to true for that user
        isAdmin: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        modelName: 'user',
        sequelize: db,
        timestamps: false,
        updatedAt: false,
    },
);