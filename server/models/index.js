// Import individual models
import { User } from "./user.model.js";
import { Inventory } from "./inventory.model";
import { History } from "./history.model.js";

// Define Associations
User.belongsToMany(Inventory, {
    through: 'History',
    foreignKey: { name: 'itemId', field: 'item_id' }
});
Inventory.belongsToMany(Shopper, {
    through: 'History',
    foreignKey: { name: 'userId', field: 'user_id' }
});

// export
export { User, Inventory }