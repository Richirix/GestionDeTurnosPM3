
import moment from 'moment';
import { AppDataSource } from '../config/data-source';
import { Appointment } from '../entities/Appointment';


export const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({
    
  validateAllowAppointment: function (date: Date, time: string, ): void {
    const [hours, minutes] = time.split(":").map(Number); 
    const appointmentDate = moment(date).hours(hours).minutes(minutes).seconds(0).milliseconds(0); 

    if (!appointmentDate.isValid()) {
        throw new Error("La fecha proporcionada no es válida.");
    }

    const now = moment();
    if (appointmentDate.isBefore(now)) {
        throw new Error("No se pueden agendar citas correspondientes a fechas pasadas.");
    }
    if (appointmentDate.isBefore(moment().add(24, "hours"))) {
        throw new Error("No se puede agendar citas con menos de 24 horas de antelación.");
    }
    const dayOfWeek = appointmentDate.day();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        throw new Error("No se pueden agendar citas los fines de semana.");
    }
    const hour = appointmentDate.hour();
    if (hour < 8 || hour >= 20) {
        throw new Error("Las citas no pueden agendarse por fuera del horario: 8am - 20pm.");
    }

  
},


    ValidateExistingAppoint:  async function(userId: number, date: Date, time: string): Promise<void>{
        const appointmentFound = await this.findOne({
            where:{
                user:{
                    id:userId
                },
                date: date,
                time: time
            }
        })
        if(appointmentFound) throw new Error(`La cita con fecha ${date}, y hora: ${time} para el usuario con id: ${userId}, Ya existe`)
    }
});



