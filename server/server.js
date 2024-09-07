// Middleware
import express from "express"
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express"
import 'dotenv/config'
// Models
import { User, Inventory, History } from "./models/index.js"

const app = express();
const PORT = 5090;

ViteExpress.config({
    printViteDevServerHost: true
})

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
}))

// GET Endpoints for all data sets
// Get single user by userId
app.get('/api/user/:userId', async (req, res) => {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    res.json(user);
})

// get history by userId including Inventory information ordered by newest first
app.get('/api/history/:userId', async (req, res) => {
    const { userId } = req.params;
    const userHistory = await History.findAll({
        where: { userId: `${userId}` },
        include: Inventory,
        order: [['historyId', 'DESC']]
    });
    res.json(userHistory);
})

// get inventory for regular items
app.get('/api/inventory/regular', async (req, res) => {
    const regInventory = await Inventory.findAll({
        where: { isSpecialItem: false },
        order: [['itemId', 'ASC']]
    });
    res.json(regInventory);
})

// get inventory for special items
app.get('/api/inventory/special', async (req, res) => {
    const specInventory = await Inventory.findAll({
        where: { isSpecialItem: true },
        order: [['itemId', 'ASC']]
    });
    res.json(specInventory);
})

//NEW get special item with non-zero quantity


// GET ALL of db items (for debugging)
// Get all users including their inventory history
app.get('/api/all/users', async (req, res) => {
    const allUsers = await User.findAll({
        order: [['userId', 'ASC']],
        include: History
    });
    res.json(allUsers);
})

// Get all histories with item details for each item
app.get('/api/all/history', async (req, res) => {
    const allHistory = await History.findAll({
        order: [['userId', 'ASC']],
        include: Inventory
    });
    res.json(allHistory);
})

// Get all inventory with no filtering
app.get('/api/all/inventory', async (req, res) => {
    const allInventory = await Inventory.findAll({
        order: [['itemId', 'ASC']]
    });
    res.json(allInventory);
})

ViteExpress.listen(app, PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})