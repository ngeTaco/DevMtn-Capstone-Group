// Packages
import { Router } from "express";
// Routes
import testRouter from "./tests.routes.js";
//import authRoutes from "./auth.routes.js";

const appRouter = Router();


//appRouter.use ('/api/auth', authRoutes)

appRouter.use('/api/all', testRouter);


export default appRouter;