// Packages
import { Router } from "express";
// Routes
import testRouter from "./tests.routes.js";
import authRoutes from "./auth.routes.js";
import userRouter from "./user.routes.js";
import historyRouter from "./history.routes.js";
import inventoryRouter from "./inventory.routes.js";

const appRouter = Router();

appRouter.use('/api/all', testRouter);

appRouter.use ('/api/auth', authRoutes);

appRouter.use('/api/user', userRouter);

appRouter.use('/api/history', historyRouter);

appRouter.use('/api/inventory', inventoryRouter);

export default appRouter;