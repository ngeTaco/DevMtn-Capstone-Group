// Middleware
import { Router } from 'express';
import { Op } from "sequelize";
// Models
import { Inventory } from "../models/index.js"

const inventoryRouter = Router();

// get inventory for regular items
inventoryRouter.get('/regular', async (req, res) => {
    const regInventory = await Inventory.findAll({
        where: { isSpecialItem: false },
        order: [['itemId', 'ASC']]
    });
    res.json(regInventory);
})

// get inventory for special items
inventoryRouter.get('/special', async (req, res) => {
    const specInventory = await Inventory.findAll({
        where: { isSpecialItem: true },
        order: [['itemId', 'ASC']]
    });
    res.json(specInventory);
})

// get first special item with non-zero quantity
inventoryRouter.get('/special/instock', async (req, res) => {
    const specStockInventory = await Inventory.findOne({
        where: {
            isSpecialItem: true,
            quantity: { [Op.gt]: 0 }
        },
        order: [['itemId', 'ASC']]
    });
    res.json(specStockInventory);
})


export default inventoryRouter;