// Middleware
import { Router } from 'express';
// Models
import { User } from "../models/index.js"

const userRouter = Router();

// Get single user by userId
userRouter.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    res.json(user);
})

export default userRouter;