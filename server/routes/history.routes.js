// Middleware
import { Router } from 'express';
// Models
import { History, User, Inventory } from "../models/index.js"

const historyRouter = Router();

// GET history by userId including Inventory information ordered by newest first
historyRouter.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const userHistory = await History.findAll({
        where: { userId: `${userId}` },
        include: Inventory,
        order: [['historyId', 'DESC']]
    });
    res.json(userHistory);
})

// PUT update history quantity by historyId
historyRouter.put('/:historyId', async (req, res) => {
    const { historyId } = req.params;
    const { shopperQuantity } = req.body;
    const historyEntry = await History.findByPk(historyId);

    historyEntry.shopperQuantity = shopperQuantity;
    await historyEntry.save();
    res.json(historyEntry);
})

// POST create new history line requiring userId, itemId, and Quantity
historyRouter.post('/new', async (req, res) => {
    const { userId, itemId, shopperQuantity } = req.body;
    const newHistory = await History.create({ userId, itemId, shopperQuantity });

    res.json(newHistory);
})

// DELETE delete history line by historyId
historyRouter.delete('/:historyId', async (req, res) => {
    const { historyId } = req.params;
    const historyRemove = await History.findByPk(historyId);

    if (historyRemove) {
        await History.destroy({ where: { historyId: historyId } });
        return res.status(200).json({ message: 'History Line Removed' });
    }
    return res.status(400).json({ error: 'History Not Found' });
})

export default historyRouter;