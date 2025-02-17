import { useContext, useEffect,  } from "react";
import AppointmentScheduled from "../../components/AppointmentScheduled/AppointmentScheduled";
import Styles from "./MyAppointments.module.css";
import { UsersContext } from "../../context/UsersContext";

function MyAppointments() {
  const{getUserAppointments,user,userAppointments}=useContext(UsersContext)
 
  useEffect(() => {
    
   getUserAppointments(user)
   
    }, []);
  
    
  return (
    <div className={Styles.containerAppointment}>
    {userAppointments.length > 0 ? (
      userAppointments.map((appointment) => {
        return (
          <AppointmentScheduled
            key={appointment.id}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status}
          />
        );
      })
    ) : (
      <h1>No hay turnos disponibles</h1>
    )}
  </div>
  );
}

export default MyAppointments;
