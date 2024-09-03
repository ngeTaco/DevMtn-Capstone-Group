import { DataTypes, Model } from 'sequelize';
import util from 'util';
import db from '../../src/db.js';


// Define User Table
export class Inventory extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Inventory.init(
    {
        itemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        itemDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        itemPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isSpecialItem: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        modelName: 'inventory',
        sequelize: db,
        timestamps: false,
        updatedAt: false,
    },
);