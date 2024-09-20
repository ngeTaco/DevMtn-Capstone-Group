// Middleware
import { Router } from 'express';
// Models
import { User, Inventory, History } from "../models/index.js"

const testRouter = Router();

// GET ALL of db items (for debugging)

// Get all users including their inventory history
testRouter.get('/users', async (req, res) => {
    const allUsers = await User.findAll({
        order: [['userId', 'ASC']],
        include: History
    });
    res.json(allUsers);
})

// Get all histories with item details for each item
testRouter.get('/history', async (req, res) => {
    const allHistory = await History.findAll({
        order: [['userId', 'ASC']],
        include: Inventory
    });
    res.json(allHistory);
})

// Get all inventory with no filtering
testRouter.get('/inventory', async (req, res) => {
    const allInventory = await Inventory.findAll({
        order: [['itemId', 'ASC']]
    });
    res.json(allInventory);
})

export default testRouter;