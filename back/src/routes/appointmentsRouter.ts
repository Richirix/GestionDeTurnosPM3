// Grt/appoiments => Obtner todos los turnos
//Get/appoinments/:id => Obtener un turno por ID
// post /appoinments/schedule => Crear un nuevo turno
// PUT/appoinment/cancel => Cancelar un turno


import { NextFunction, Request, Response, Router } from "express";
import { getAppointmentsController,getAppointmentByIdController,cancelStatusAppointmentController,registerAppointmentController } from "../controllers/appointmentsController";
import { AppoinmentRegisterDTO } from "../dto/AppointmentDto";
import { mwAppointmentRegisterData } from "../middlewares/validates";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/",(req:Request, res:Response) => getAppointmentsController(req, res));  
            
appointmentsRouter.get("/:id",(req:Request<{id:string }>, res:Response )=> getAppointmentByIdController(req, res));  
     
appointmentsRouter.post("/schedule",(req:Request ,res:Response,next:NextFunction)=>mwAppointmentRegisterData(req, res, next),
 (req:Request<unknown,unknown,AppoinmentRegisterDTO>, res:Response)=>registerAppointmentController(req, res));
 
appointmentsRouter.put("/cancel/:id",(req:Request<{id:string }>, res:Response )=> cancelStatusAppointmentController(req, res)); 
    

export default appointmentsRouter;