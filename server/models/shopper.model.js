import { DataTypes, Model } from 'sequelize';
import util from 'util';
import db from '../../src/db.js';


// Define User Table
export class Shopper extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Shopper.init(
    {
        shopperId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        itemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shopperQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        modelName: 'shopper',
        sequelize: db,
        timestamps: false,
        updatedAt: false,
    },
);