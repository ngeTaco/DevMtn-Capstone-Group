import express from "express"
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express"
import 'dotenv/config'

const app = express()
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

ViteExpress.listen(app, PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})