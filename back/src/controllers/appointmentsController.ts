import { Request, Response } from "express";
import { getAllAppointmentsService, getAppointmentByIdService, cancelAppointmentService,registerAppointmentService } from "../services/appointmentService";
// import IAppointmen from "../interfaces/IAppointmen";
import { AppoinmentRegisterDTO } from "../dto/AppointmentDto";
import { IPostgresError } from "../interfaces/IError";

export const getAppointmentsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getAllAppointmentsService()
    res.status(200).json({ message:"Obtener el listado de todos los turnos de todos los usuaios",
      data: response
   })
  }catch (error) {
    res.status(404).json({ message:"Error en el servidor",
        data: error instanceof Error ? error.message:"Error desconocido"
   })
  }
};


export const getAppointmentByIdController = async (req: Request<{id:string }>, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const response = await getAppointmentByIdService(id)
    res.status(200).json({ message:"Obtener el detalle de un turno especifico" + " " + "id:" +id,
      data: response
   })
  }catch (error) {
    res.status(404).json({ message:"Error en el servidor",
        data: error instanceof Error ? error.message:"Error desconocido"
   })
  }
};


export const registerAppointmentController = async (req:Request<unknown,unknown,AppoinmentRegisterDTO>, res: Response) : Promise<void> => {
  try{ 
    const response =  await registerAppointmentService(req.body)
    res.status(201).json({ 
      message:"Cita creada con exito",
      data: response
     });
  }catch(error){

    const err = error as IPostgresError
    res.status(400).json({ 
      message:"Error en el servidor",
      data: err instanceof Error ? err.detail ? err.detail : err.message:"Error desconocido"
    })
  }
};

export const cancelStatusAppointmentController = async (req:Request<{id:string }>, res: Response): Promise<void> => {
  const { id } = req.params; 
  try {
    const response = await cancelAppointmentService(id)
    res.status(200).json({ message:"Cambiar el estatus de un turno a Cancelled:" + id,
      data: response
   })
  }catch (error) {
    res.status(404).json({ message:"Error en el servidor",
        data: error instanceof Error ? error.message:"Error desconocido"
   })
  }
};