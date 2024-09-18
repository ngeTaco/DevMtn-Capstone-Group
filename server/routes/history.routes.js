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


export default historyRouter;