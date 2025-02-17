import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService,loginUserService, registerUserService } from "../services/usersService";
import { UserLoginDTO, UserLoginSuccesDTO, UserRegisterDTO } from "../dto/UserDto";
import { IPostgresError } from "../interfaces/IError";




export const getUsersController = async (req: Request, res: Response): Promise<void> => {
 try {
  const response = await getAllUsersService()
  res.status(200).json({ message:"Obtener el listado de todos los usuarios",
    data: response
 })
}catch (error) {
  res.status(400).json({ message:"Error en el servidor",
      data: error instanceof Error ? error.message:"Error desconocido"
 })
}
};


export const getUsersIdController = async (req: Request<{id:string }>, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const  response = await getUserByIdService(id)
    res.status(200).json({ message:"Obtener el detalle de un usuario especifico" + id,
      data: response
   })
  }catch (error) {
    res.status(404).json({ message:"Error en el servidor",
        data: error instanceof Error ? error.message:"Error desconocido"
   })
  }
};


export const registerUserController = async (req:Request<unknown,unknown,UserRegisterDTO>, res: Response): Promise<void> => {
  try{  const response = await registerUserService(req.body)
    res.status(201).json({ message:"Registro de un nuevo usuario",
      data: response
     });
  }catch(error){

    const err = error as IPostgresError
    res.status(400).json({ 
      message:"Error en el servidor",
      data: err instanceof Error ? err.detail ? err.detail : err.message:"Error desconocido"
    })
  }
}


export const loginUserController = async (req:Request<unknown,unknown,UserLoginDTO>, res: Response): Promise<void> => {
  try {
    const response : UserLoginSuccesDTO | null = await loginUserService(req.body)
    res.status(200).json(response)
    
  } catch (error) {
    res.status(400).json({
      mesagge: "Error en el servidor",
      data:error instanceof Error? error.message:"Error desconocido"
    }) 
  }
};