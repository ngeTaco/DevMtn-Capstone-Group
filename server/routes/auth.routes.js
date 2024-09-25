// Middleware
import { Router } from 'express';
import { loginRequired } from '../middlewares/auth.middleware.js';
// Models
import { User } from "../models/index.js"

const authRoutes = Router();

// LOGIN for User
authRoutes.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });

    if (user && user.password === password) {
        req.session.userId = user.userId;
        const userObj = user.toJSON();
        delete userObj.password
        res.json({ success: true, userObj });
    } else {
        res.json({ success: false });
    }
});

// LOGOUT for User
authRoutes.post('/logout', loginRequired, (req, res) => {
    req.session.destroy();
    res.json({ success: true });
})

export default authRoutes