import { Router } from "express";
import authRoutes from "./auth.routes";
// Import all routes


const appRouter = Router();
appRouter.use ('/api/auth', authRoutes)

// attach to appRouter

export default appRouter;