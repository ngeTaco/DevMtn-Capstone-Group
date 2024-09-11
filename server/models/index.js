// Import individual models
import { User } from "./user.model.js";
import { Inventory } from "./inventory.model.js";
import { History } from "./history.model.js";


// Define Middle Table Associations to History Table
User.hasMany(History, { foreignKey: 'userId' });
History.belongsTo(User, { foreignKey: 'userId' });

Inventory.hasMany(History, { foreignKey: 'itemId' });
History.belongsTo(Inventory, { foreignKey: 'itemId' });


// export
export { User, Inventory, History }