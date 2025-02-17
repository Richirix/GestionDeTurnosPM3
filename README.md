# 📅 Gestión de Turnos - C-A-T-A-R-S-I-S

## 📝 Descripción

Este proyecto es una aplicación de gestión de turnos para el salón de belleza **C-A-T-A-R-S-I-S**. Permite a los usuarios agendar, cancelar y consultar turnos de manera sencilla, mejorando la experiencia del cliente y optimizando la administración del salón.

## 🚀 Características principales

- 📍 **Registro e inicio de sesión**: Usuarios autenticados para realizar reservas.
- 🗓️ **Reserva de turnos**: Selección de fecha y hora.
- 🛑 **Cancelación de turnos**: Posible hasta el día anterior.
- 🔍 **Historial de turnos**: Seguimiento de turnos reservados y cancelados.

## ⚙️ Instalación y configuración

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Richirix/GestionDeTurnosPM3.git
   cd GestionDeTurnosPM3
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto y completa con los siguientes valores:
   ```bash
   DB_CONNECTION=your_database_url
   EMAIL_SERVICE=your_email_service
   EMAIL_USER=your_email_user
   EMAIL_PASS=your_email_password
   ```

4. Iniciar el servidor backend:

npm run start

5. Iniciar el servidor frontend:

npm run dev


## 🧪 Uso de la aplicación

- Acceder a la página principal para iniciar sesión o registrarse.
- Navegar a la sección de reserva para agendar un turno.
- Revisar el historial para ver turnos pasados y futuros.

## 🛠️ Tecnologías utilizadas

- **Backend**: Node.js, Express
- **Frontend**: React con Vite
- **Base de datos**: PostgreSQL con TypeORM
- **Validación de fechas**: Moment.js

## 🔐 Reglas de validación de citas

- No se pueden agendar citas en fechas pasadas.
- Se requiere al menos 24 horas de anticipación para reservar.
- Las citas están disponibles solo de lunes a viernes, entre las 9:00 y 20:00 horas.
- Solo se puede agendar una nueva cita después de 30 minutos de haber reservado otra.

🌐 Endpoints principales

Registro: POST /users/register

{
  "name": "Ricardo",
  "email": "ricardo@example.com",
  "birthdate": "21-09-1994",
  "nDni": 4545,
  "username": "ricardorr",
  "password": "admin1"
}

Login: POST /users/login

{
  "username": "ricardorr",
  "password": "admin1"
}

Reserva de turno: POST /appointments

{
  "date": "2025-02-20",
  "time": "10:30",
  "service": "Corte de cabello"
}

Cancelar turno: DELETE /appointments/:id

## 🖼️ Capturas de pantalla *(opcional)*
![inicio sesion pm3](https://github.com/user-attachments/assets/bd109225-8b03-4b26-bcc7-b544088acc43)
![registo pm3](https://github.com/user-attachments/assets/43c366b3-fea6-41db-80cf-39274ed78ff3)
![Home pm3](https://github.com/user-attachments/assets/47488d1a-8b7b-402b-8282-6551873f9c9f)
![agendar turnos pm3](https://github.com/user-attachments/assets/125f677a-afa9-4a48-8dfe-414d7f556889)
![turnos pm3](https://github.com/user-attachments/assets/8b855ca2-02d4-4e23-aec1-61d733cb5a1a)


## 👤 Autor

**Ricardo R.**  
📧 [ruizcalderonricardoed@gmail.com](mailto:ruizcalderonricardoed@gmail.com)  
🔗 [LinkedIn](www.linkedin.com/in/ricardoedmundoruizcalderon)

¡Gracias por visitar el repositorio! 🎉

