// Get /Users => Obtener todos los usuarios
//Get /users/:id => Obtener un usuario por ID
//Post/users/registers Crea un nuevo usuario
import { NextFunction, Request, Response, Router } from "express";
// import UserDto from "../dto/UserDto";
import {getUsersController, getUsersIdController, loginUserController, registerUserController } from "../controllers/usersControlers";
import { UserLoginDTO, UserRegisterDTO } from "../dto/UserDto";
import { mwRegisterData } from "../middlewares/validates";
// import IUser from "../interfaces/IUser";

const usersRouter: Router = Router();

usersRouter.get("/", (req:Request, res:Response )=>getUsersController(req,res));  
            
usersRouter.get("/:id",(req:Request<{id:string }>, res:Response )=> getUsersIdController(req, res));   
     
usersRouter.post("/register",
    (req:Request ,res:Response,next:NextFunction)=>mwRegisterData(req, res, next),
    (req:Request<unknown,unknown,UserRegisterDTO>, res:Response )=>  registerUserController(req, res));

usersRouter.post("/login", (req:Request<unknown,unknown,UserLoginDTO>, res:Response )=> loginUserController(req,res));       

export default usersRouter;