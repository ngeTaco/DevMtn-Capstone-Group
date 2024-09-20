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
    const { isAdmin, userName, password, firstName, lastName, points, profileImage } = req.body;
    const userChange = await User.findByPk(userId);

    userChange.isAdmin = isAdmin;
    userChange.userName = userName;
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
    const { isAdmin, userName, password, firstName, lastName, points, profileImage } = req.body;
    const newUser = await User.create({ isAdmin, userName, password, firstName, lastName, points, profileImage });

    res.json(newUser);
})

export default userRouter;