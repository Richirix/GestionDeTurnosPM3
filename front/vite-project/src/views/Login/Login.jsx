import swal from "sweetalert2";
import { useFormik } from 'formik';
import Styles from './Login.module.css'; 
import { loginFormValidate } from '../../helpers/validates';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {UsersContext} from "../../context/UsersContext"


function Login() {
  const {loginUser} = useContext(UsersContext)
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: loginFormValidate,
    onSubmit: (values) => {
        loginUser(values)
        .then((res) => {
          if (res.status === 200) {
            swal.fire({
              icon: "success",
              title: "Usuario Logeado correctamente",
            });
                     
            navigate("/home")
          }
        })
        .catch((err) => {
          
          if (err.response.data.data.includes("")) {
            swal.fire({
              icon: "error",
              title: `${err.response.data.data}`,
              text: "Intentalo nuevamente",
            });
          }
        });
    }
    
  });

  return (
    <form className={Styles.registerForm} onSubmit={formik.handleSubmit}>
      <h2 className={Styles.forTitle}>Iniciar sesión</h2>
      <div className={Styles.fieldContainer}>
        <label className={Styles.fomLabel}>Nombre de usuario</label>
        <input
          className={Styles.formInput}
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label className={Styles.errorMessage}>
          {formik.errors.username ? formik.errors.username : ""}
        </label>
      </div>

      <div className={Styles.fieldContainer}>
        <label className={Styles.fomLabel}>Contraseña</label>
        <input
          className={Styles.formInput}
          name="password"
          type="password"
          placeholder="🔒••••••••"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label className={Styles.errorMessage}>
          {formik.errors.password ? formik.errors.password : ""}
        </label>
      </div>

      <button
        className={Styles.formButton}
        type="submit"
        disabled={formik.errors.username || formik.errors.password}
      >
        Entrar
      </button>
      <br />
      <br />
      <label>
        Aún no tienes una cuenta? <Link to="/register">Regístrate</Link>
      </label>
    </form>
  );
}

export default Login;
