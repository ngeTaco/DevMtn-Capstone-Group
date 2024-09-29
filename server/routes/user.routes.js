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

// PUT update user by userId
userRouter.put('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { isAdmin, username, password, firstName, lastName, points, profileImage } = req.body;
    const userChange = await User.findByPk(userId);

    userChange.isAdmin = isAdmin;
    userChange.userName = username;
    userChange.password = password;
    userChange.firstName = firstName;
    userChange.lastName = lastName;
    userChange.points = points;
    userChange.profileImage = profileImage;
    
    await userChange.save();
    res.json(userChange);
})

// POST create new user requiring admin state, username, password, first and last name, and initial points amount
userRouter.post('/new', async (req, res) => {
    const { isAdmin, username, password, firstName, lastName, points, profileImage } = req.body;
    const newUser = await User.create({ isAdmin, username, password, firstName, lastName, points, profileImage });

    res.json(newUser);
})

// DELETE delete user by userId
userRouter.delete('/:userId', async (req, res) => {
    const { userId } = req.params;
    const userRemove = await User.findByPk(userId);

    if (userRemove) {
        await User.destroy({ where: { userId: userId } });
        return res.status(200).json({ message: 'User Removed' });
    }
    return res.status(400).json({ error: 'User Not Found' });
})

export default userRouter;