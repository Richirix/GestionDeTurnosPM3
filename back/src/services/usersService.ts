import { UserDto, UserLoginDTO, UserLoginSuccesDTO, UserRegisterDTO } from "../dto/UserDto";
import { checkCredentials, createCredentialService } from "./credentialService";
import { AppDataSource, UserModel } from "../config/data-source";
import { User } from "../entities/User";
import { Credentials } from "../entities/Credential";



export const getAllUsersService = async (): Promise<UserDto[]> => {
  const users:User[] = await UserModel.find();
  return users;
};

export const getUserByIdService = async (id: string): Promise<UserDto> => {

 const userFound = await UserModel.findOne({
  where:{
    id:parseInt(id,10)
  },
  relations: ["appointments"]
 })
 if (!userFound) throw new Error(`El usuario con id ${id} no existe`)

  return userFound
};

export const registerUserService = async (userData: UserRegisterDTO): Promise<User> => {
  const result = await AppDataSource.transaction( async(entityManager)=>{
    const userCredentials : Credentials = await createCredentialService(entityManager, userData.username,userData.password) 
     const newUser: User = entityManager.create(User, {
      name:userData.name,
      birthdate:userData.birthdate,
      email:userData.email,
      nDni: userData.nDni,
      credentials: userCredentials
    })
    return await entityManager.save(newUser)
  })

 return result

}

export const loginUserService = async (user: UserLoginDTO): Promise<UserLoginSuccesDTO> => {
  const credentialId: number | undefined = await checkCredentials(user.username, user.password)
  const userFound:User | null = await UserModel.findOne({
    where:{
      credentials:{
        id: credentialId
      }
    }
  })
  return{
    login: true,
    user:{
      id: userFound?.id ?? 0,
      name: userFound?.name ?? "",
      email: userFound?.email ?? "",
      birthdate: userFound?.birthdate ?? new Date(),
      nDni: userFound?.nDni ?? 0
    }
  }

}