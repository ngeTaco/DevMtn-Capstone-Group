import { DataTypes, Model } from 'sequelize';
import util from 'util';
import db from '../../server/config/db.js';


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
            defaultValue: "public/mysterygift.png" 
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // If an item is a special limited time item, this must be set to true
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