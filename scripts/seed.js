// Import Database Connection
import db from '../server/config/db.js'
// Import models

// Import JSONs for seed data
import userData from './Data/users.json' assert { type: 'json' };
import historyData from './Data/shoppers.json' assert { type: 'json' };
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
const historiesInDB = await Promise.all(
    historyData.map((history) => {
        const { userId, itemId, shopperQuantity } = history;

        const newHistory = History.create({
            userId: userId,
            itemId: itemId,
            shopperQuantity: shopperQuantity,
        });

        return newHistory;
    }),
);

console.log('History seeded successfully!', historiesInDB);

// seeding Inventory
const itemsInDB = await Promise.all(
    inventoryData.map((item) => {
        const { itemName, itemDescription, itemPrice, imageURL, quantity, isSpecialItem } = item;

        const newItem = Item.create({
        itemName: itemName,
        itemDescription: itemDescription,
        itemPrice: itemPrice,
        imageURL: imageURL,
        quantity: quantity,
        isSpecialItem: isSpecialItem
        });

        return newItem;
    }),
);

console.log('Inventory seeded successfully!', itemsInDB);

await db.close();
console.log('Finished seeding database!');