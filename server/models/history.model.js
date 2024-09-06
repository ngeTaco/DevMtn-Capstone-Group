import { DataTypes, Model } from 'sequelize';
import util from 'util';
import db from '../../server/config/db.js';


// Define User Table
export class History extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

History.init(
    {
        historyId: {
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
        shopperQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        modelName: 'history',
        sequelize: db,
        timestamps: false,
        updatedAt: false,
    },
);