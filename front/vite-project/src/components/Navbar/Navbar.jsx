import { Link, useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Swal from "sweetalert2";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

function Navbar() {
  const navigate = useNavigate()
  const{logOut}=useContext(UsersContext)

  const handleLogOut = () => {
    logOut(); 
    Swal.fire({
      icon: "success",
      title: "Tu sesión fue cerrada correctamente",
    })
    navigate("/login")
  };

  return (
    <div className={Styles.navbarContainer}>
      <nav className={Styles.navbar}>
        <li className={Styles.logo}>
          <Link to="/home" className={`${Styles.navLink}`}>Catarsis</Link>
        </li>

        <ul className={Styles.navbarLinks}>
          <li className={Styles.logo}>
            <Link to="/home" className={`${Styles.navLink}`}>Home</Link>
          </li>

          <li className={Styles.logo}>
            <Link to="/my-appointments" className={`${Styles.navLink}`}>Mis turnos</Link>
          </li>
          <li className={Styles.logo}>
            <Link to="/Schedule-Appointment" className={`${Styles.navLink}`}>Agendar cita</Link>
          </li>
         
            <li className={Styles.navbarItem}>
              <button className={Styles.navLink} onClick={handleLogOut}>
                Cerrar sesión
              </button>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;


