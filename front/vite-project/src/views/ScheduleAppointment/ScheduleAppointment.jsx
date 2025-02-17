import { useFormik } from "formik";
import Styles from "./ScheduleAppointment.module.css";
import { scheduleFormValidate } from "../../helpers/validates";
import Swal from "sweetalert2";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

const ScheduleAppointment = () => {
 
    const{createAppointment,user}=useContext(UsersContext)

  const formik = useFormik({
    initialValues: {
      date:"", 
      time:"", 
    },
    initialErrors:{
        date:"La fecha es requerida",
        time:"La hora es requerida"
    },
    validate : scheduleFormValidate,

    onSubmit:  async (values) => {
        const valuesObject={
            ...values,
            userId: user
        }
        try {
            await createAppointment(valuesObject)
            Swal.fire({
                icon:"success",
                title:"Cita agendada con exito"
            })
            
        } catch (err) {
                       
            Swal.fire({
                icon:"error",
                title: `${err.response.data.data}`,
              text: "Intentalo nuevamente",
            })
        } finally{
            formik.resetForm()
        }

    },
  });


    return (
        <>
      <form className={Styles.registerForm} onSubmit={formik.handleSubmit}>
        <h2 className={Styles.forTitle}>Agendar Turno</h2>

        
        <div className={Styles.fieldContainer}>
  <label className={Styles.fomLabel}>Fecha</label>
  <input
    className={Styles.formInput}
    name="date"
    type="date"
    min={new Date().toISOString().split("T")[0]}
    onChange={formik.handleChange}
    value={formik.values.date}
  />
  <label className={Styles.errorMessage}>
    {formik.errors.date ? formik.errors.date : ""}
  </label>
</div>

        
        <div className={Styles.fieldContainer}>
          <label className={Styles.fomLabel}>Hora</label>
          <input
            className={Styles.formInput}
            name="time"
            type="time"
            onChange={formik.handleChange}
            value={formik.values.time}
          />
          <label className={Styles.errorMessage}>
            {formik.errors.time ? formik.errors.time : ""}
          </label>
        </div>

        <button
          className={Styles.formButton}
          type="submit"
          disabled={formik.errors.date || formik.errors.time}
        >
          Agendar
        </button>
      </form>
    </>
  );
};

export default ScheduleAppointment