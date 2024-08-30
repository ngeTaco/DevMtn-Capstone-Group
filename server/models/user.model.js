import { DataTypes, Model } from 'sequelize';
import util from 'util';
import db from '../../src/db.js';


// Define Location Table
export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Location.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        role: {
            type: DataTypes.STRING,
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
    },
    {
        modelName: 'user',
        sequelize: db,
        timestamps: false,
        updatedAt: false,
    },
);