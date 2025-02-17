import moment from "moment"


export const registerFormValidate = (input) => {
    const errors = {};


    if (!input.name.trim()) {
        errors.name = "El nombre es necesario";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(input.name)) {
        errors.name = "El nombre debe contener solo letras y al menos 2 caracteres";
    }

    if (!input.email.trim()) {
        errors.email = "El correo es necesario";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
        errors.email = "El correo no tiene un formato válido";
    }


    if (!input.birthdate.trim()) {
        errors.birthdate = "La fecha de nacimiento es necesaria";
    } else {
        const [year, month, day] = input.birthdate.split("-");
        const formattedDate = `${day}-${month}-${year}`;
        if (!/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(formattedDate)) {
            errors.birthdate = "La fecha debe tener el formato dd-mm-yyyy";
        }
    }
    
    


    if (!input.nDni.trim()) {
        errors.nDni = "El nDni es necesario";
    } else if (!/^\d{4,}$/.test(input.nDni)) {
        errors.nDni = "El nDni debe ser un número con al menos 4 dígitos";
    }

   
    if (!input.username.trim()) {
        errors.username = "Es necesario crear un usuario";
    } else if (!/^[a-zA-Z0-9_]{3,15}$/.test(input.username)) {
        errors.username = "El usuario debe ser alfanumérico y contener entre 3 y 15 caracteres";
    }

    if (!input.password.trim()) {
        errors.password = "La contraseña es necesaria";
    } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(input.password)) {
        errors.password = "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un símbolo especial";
    } 
    

    return errors;
};

export const loginFormValidate =(input)=>{
    const errors = {}
    if (!input.username.trim()) {
        errors.username = "El usuario es necesario";
    } else if (!/^[a-zA-Z0-9_]{3,15}$/.test(input.username)) {
        errors.username = "El usuario debe ser alfanumérico y contener entre 3 y 15 caracteres";
    }

    if (!input.password.trim()) {
        errors.password = "La contraseña es necesaria";
    } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(input.password)) {
        errors.password = "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un símbolo especial";
    } 
    

    return errors;
}


export const scheduleFormValidate = (input) => {
    const errors = {};
  
    
    const appointmentDate = moment(input.date).hours(input.time.split(":")[0]).minutes(input.time.split(":")[1]);
    if (!appointmentDate.isValid()) {
      errors.date = "La fecha proporcionada no es válida.";
    }
  
    
    const now = moment();
    if (appointmentDate.isBefore(now)) {
      errors.date = "No se pueden agendar citas correspondientes a fechas pasadas.";
    }
  
    
    if (appointmentDate.isBefore(now.add(24, "hours"))) {
      errors.date = "No se puede agendar citas con menos de 24 horas de antelación.";
    }
  
   
    const dayOfWeek = appointmentDate.day();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      errors.date = "No se pueden agendar citas los fines de semana.";
    }
  
    
    const hour = appointmentDate.hour();
    if (hour < 8 || hour >= 20) {
      errors.date = "Las citas no pueden agendarse fuera del horario: 8am - 8pm.";
    }
  
    
    if (!input.date) {
      errors.date = "La fecha es requerida.";
    }
  
    
    if (!input.time) {
      errors.time = "La hora es requerida.";
    }
  
    return errors;
  };