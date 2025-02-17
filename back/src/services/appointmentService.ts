import { AppoinmentRegisterDTO } from "../dto/AppointmentDto";
import { Appointment, Status } from "../entities/Appointment";
import { AppointmentRepository } from "../repositories/AppointmentRepository";
import { getUserByIdService } from "./usersService";



export const getAllAppointmentsService =async ():Promise<Appointment[]> => {
    return await AppointmentRepository.find()
  };
  
export const getAppointmentByIdService = async  (id: string): Promise<Appointment>  => {
    const appointmentFound = await AppointmentRepository.findOne({
      where:{
        id: parseInt(id,10)
      }
    })
    if(!appointmentFound) throw new Error(`La cita con id ${id} no fue encontrada`)
    return appointmentFound
  };
  
export const registerAppointmentService = async (appointment: AppoinmentRegisterDTO): Promise<Appointment> => {

  await  getUserByIdService(appointment.userId.toString())
    AppointmentRepository.validateAllowAppointment(appointment.date, appointment.time)
    await AppointmentRepository.ValidateExistingAppoint(appointment.userId, appointment.date, appointment.time)
    const newAppointment = AppointmentRepository.create({
      date: appointment.date,
      time: appointment.time,
      user: {id: appointment.userId}
    })
    
    return await AppointmentRepository.save(newAppointment)
  }; 
  
  export const cancelAppointmentService = async (id: string):Promise<Appointment> => {
    const appointmentFound = await AppointmentRepository.findOne({
      where:{
        id: parseInt(id,10)
      }
    })
    if(!appointmentFound) throw new Error(`La cita con id ${id} no fue encontrada`)
    appointmentFound.status = Status.Cancelled
    return await AppointmentRepository.save(appointmentFound)
  };