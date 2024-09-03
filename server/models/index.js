// Import individual models
import { User } from "./user.model.js";
import { Shopper } from "./shopper.model.js";
import { Inventory } from "./inventory.model";

// Define Associations
User.hasOne(Shopper, { foreignKey: 'userId' });
Shopper.belongsTo(User, { foreignKey: 'userId' });

//NOTE Discuss if this relationship is needed??
Shopper.belongsToMany(Inventory, { through: 'ShopperInventory' });
Inventory.belongsToMany(Shopper, { through: 'ShopperInventory' })

// export
// export {}