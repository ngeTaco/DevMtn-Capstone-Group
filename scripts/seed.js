// Import Database Connection
import db from '../server/config/db.js'
// Import models

// Import JSONs for seed data
import userData from './Data/users.json' assert { type: 'json' };
import shopperData from './Data/shoppers.json' assert { type: 'json' };
import inventoryData from './Data/inventory.json' assert { type: 'json' };

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');

