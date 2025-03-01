import { Router } from "express";
import usersRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRouter";


const router: Router = Router();

router.use("/users",usersRouter)

router.use("/appointment",appointmentsRouter)

export default router;