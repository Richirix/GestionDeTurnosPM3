/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Styles from './AppointmentScheduled.module.css';
import { UsersContext } from '../../context/UsersContext';
import Swal from 'sweetalert2';





function AppointmentScheduled({id,date,time,status}) {
    const{cancelUserAppointment}=useContext(UsersContext)
    const handleCacel=()=>{
        cancelUserAppointment(id)
        .then(
            Swal.fire({
                icon: "warning",
                color:"red",
                title:"Cita cancelada con exito"
            })
        ).catch(error)(
            Swal.fire({
                icon:"error",
                title:"Error al cancelar la cita intentelo nuevamente"
            })
        )
    }
    return(
        <div className={Styles.appointmentCard}> 
        <img src='/src/assets/images/catarsisLogo.png'
        alt="Catarsis" 
        className={Styles.appointmentImage} 
      />
            <div className={Styles.appointmentHeader}>
                <h3>Turno #{id}</h3>
                <span className={status === "Active" ? Styles.statusActive : Styles.statusInactive}>{status}</span>
            </div>

            <div className={Styles.appointmentDetails}>
                <p><strong>Fecha:</strong><span>{date}</span></p>
                <p><strong>Hora:</strong><span>{time}</span></p>
            </div>
            <button
            className={`${Styles.cancelButton} ${status === "cancelled" ? Styles.disable : ""}`}
            onClick={handleCacel}
            disabled={status === "cancelled"}
            >
                Cancelar turno
            </button>

        </div>

    )
}



export default AppointmentScheduled