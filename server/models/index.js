// Import individual models
import { User } from "./user.model.js";
import { Inventory } from "./inventory.model.js";


// Define Associations
User.belongsToMany(Inventory, {
    through: 'histories',
    foreignKey: { name: 'itemId', field: 'item_id' }
});
Inventory.belongsToMany(User, {
    through: 'histories',
    foreignKey: { name: 'userId', field: 'user_id' }
});

// export
export { User, Inventory }