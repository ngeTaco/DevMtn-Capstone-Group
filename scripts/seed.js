// Import Database Connection
import db from '../server/config/db.js'
// Import models
import { User, Inventory } from '../server/models/index.js'
import { Histories } from '../server/models/history.model.js';
// Import JSONs for seed data
import userData from './Data/users.json' assert { type: 'json' };
import historyData from './Data/history.json' assert { type: 'json' };
import inventoryData from './Data/inventory.json' assert { type: 'json' };


console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');


// seeding Users
const usersInDB = await Promise.all(
    userData.map((user) => {
        const { isAdmin, userName, password, firstName, lastName, points } = user;

        const newUser = User.create({
            isAdmin: isAdmin,
            userName: userName,
            password: password,
            firstName: firstName,
            lastName: lastName,
            points: points
        });

        return newUser;
    }),
);

console.log('Users seeded successfully!', usersInDB);

// seeding History
const historyInDB = await Promise.all(
    historyData.map((history) => {
        const { userId, itemId, shopperQuantity } = history;

        const newHistory = Histories.create({
            userId: userId,
            itemId: itemId,
            shopperQuantity: shopperQuantity,
        });

        return newHistory;
    }),
);

console.log('History seeded successfully!', historyInDB);

// seeding Inventory
const itemsInDB = await Promise.all(
    inventoryData.map((item) => {
        const { itemName, itemDescription, itemPrice, imageUrl, quantity, isSpecialItem } = item;

        const newItem = Inventory.create({
        itemName: itemName,
        itemDescription: itemDescription,
        itemPrice: itemPrice,
        imageUrl: imageUrl,
        quantity: quantity,
        isSpecialItem: isSpecialItem
        });

        return newItem;
    }),
);

console.log('Inventory seeded successfully!', itemsInDB);

await db.close();
console.log('Finished seeding database!');