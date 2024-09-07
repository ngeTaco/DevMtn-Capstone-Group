// Import individual models
import { User } from "./user.model.js";
import { Inventory } from "./inventory.model.js";
import { History } from "./history.model.js";

// Define Associations using History as Middle Table
User.belongsToMany(Inventory, {
    through: 'histories',
    foreignKey: { name: 'itemId', field: 'item_id' }
});
Inventory.belongsToMany(User, {
    through: 'histories',
    foreignKey: { name: 'userId', field: 'user_id' }
});

// Define Associations to History Table
User.hasMany(History, { foreignKey: 'userId' });
History.belongsTo(User, { foreignKey: 'userId' });

Inventory.hasMany(History, { foreignKey: 'itemId' });
History.belongsTo(Inventory, { foreignKey: 'itemId' });


// export
export { User, Inventory, History }