// Import Database Connection
import db from '../server/config/db.js'
// Import models

// Import JSONs for seed data
import userData from './Data/users.json' assert { type: 'json' };
import historyData from './Data/shoppers.json' assert { type: 'json' };
import inventoryData from './Data/inventory.json' assert { type: 'json' };
import { password } from 'pg/lib/defaults';

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');


// seeding Users
const usersInDB = await Promise.all(
    userData.map((user) => {
        const { isAdmin, userName, password, firstName, lastName, points } = user;

        const newUser = Location.create({
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