// Packages
import express from "express"
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express"
// Utilities
import 'dotenv/config'
import appRouter from "./routes/index.js";

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

app.use(appRouter);

ViteExpress.listen(app, PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})