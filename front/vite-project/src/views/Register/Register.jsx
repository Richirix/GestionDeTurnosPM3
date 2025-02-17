import swal from "sweetalert2";
import { useFormik } from 'formik';
import Styles from './Register.module.css'; 
import { registerFormValidate } from '../../helpers/validates';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {UsersContext} from "../../context/UsersContext"



function Register() {
  const {registerUser} = useContext(UsersContext)

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          birthdate: '',
          nDni: '',
          username: '',
          password: '',
        },
        validate: registerFormValidate,
        initialErrors:{
            name: '',
            email: '',
            birthdate: '',
            nDni: '',
            username: '',
            password: '',

        },
        onSubmit:(values)=>{
            registerUser(values)
            .then((res)=>{
                if (res.status === 201){
                    swal.fire({
                        icon: "success",
                        title:"Usuario registrado con exito"
                    })   
                    formik.resetForm()               
                }
            })
            .catch((err)=>{             
               if (err.response.data.data.includes("email")){
                swal.fire({
                    icon: "error",
                    title:`Ya existe un usuario con el email: ${formik.values.email}`,
                    text: "Intentalo nuevamente"
                })
               } else if (err.response.data.data.includes("username")){
                swal.fire({
                    icon: "error",
                    title:`Ya existe un usuario con el nombre de usuario
                    : ${formik.values.username}`,
                    text: "Intentalo nuevamente"
                })
            }else if (err.response.data.data.includes("nDni")){
                swal.fire({
                    icon: "error",
                    title:`Ya existe un usuario con el numero Dni: ${formik.values.nDni}`,
                    text: "Intentalo nuevamente"
                })
            }
        })
     }
                          
})
    
      return (
      
          <form className={Styles.registerForm} onSubmit={formik.handleSubmit}>
            <h2 className={Styles.forTitle}>Formulario de Registro</h2>
            
            <div className={Styles.fieldContainer}>
              <label className={Styles.fomLabel}>Nombre</label>
              <input
                className={Styles.formInput}
                name="name"
                type="text"
                placeholder='Tu nonbre'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <label className={Styles.errorMessage}>{formik.errors.name ? formik.errors.name : ""}</label>
            </div>
            
            <div className={Styles.fieldContainer}>
              <label className={Styles.fomLabel}>Correo electronico</label>
              <input
                className={Styles.formInput}
                name="email"
                type="text"
                placeholder='email@mail.com'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label className={Styles.errorMessage}>{formik.errors.email ? formik.errors.email : ""}</label>
            </div>
            
            <div className={Styles.fieldContainer}>
              <label className={Styles.fomLabel}>Fecha de nacimiento</label>
              <input
                className={Styles.formInput}
                name="birthdate"
                type="date"
                placeholder='Ejem. 21/09/1994'
                onChange={formik.handleChange}
                value={formik.values.birthdate}
              />
              <label className={Styles.errorMessage}>{formik.errors.birthdate ? formik.errors.birthdate : ""}</label>
            </div>

            <div className={Styles.fieldContainer}>
              <label className={Styles.fomLabel}>Numenro de Dni</label>
              <input
                className={Styles.formInput}
                name="nDni"
                type="text"
                placeholder='nDni'
                onChange={formik.handleChange}
                value={formik.values.nDni}
              />
              <label className={Styles.errorMessage}>{formik.errors.nDni ? formik.errors.nDni : ""}</label>
            </div>

            <div className={Styles.fieldContainer}>
              <label className={Styles.fomLabel}>Crea un nombre de usuario</label>
              <input
                className={Styles.formInput}
                name="username"
                type="text"
                placeholder='Nombre de usuario'
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <label className={Styles.errorMessage}>{formik.errors.username ? formik.errors.username : ""}</label>
            </div>

            <div className={Styles.fieldContainer}>
              <label className={Styles.fomLabel}>Crea Una contraseña</label>
              <input
                className={Styles.formInput}
                name="password"
                type="password"
                placeholder='🔒••••••••'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <label className={Styles.errorMessage}>{formik.errors.password ? formik.errors.password : ""}</label>
            </div>

            <button
            className={Styles.formButton}
            type='submin'
            disabled={
                formik.errors.name||
                formik.errors.email||
                formik.errors.birthdate||
                formik.errors.nDni||
                formik.errors.username||
                formik.errors.password
            }                      
            >Registrar</button>
            <br />
            <br />
            <label>
              Ya tienes tu cuenta ? <Link to="/login">Inicia sesion</Link>
            </label>
         </form>
         
    )
}


export default Register;
    