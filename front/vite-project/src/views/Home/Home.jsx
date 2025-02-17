import { Link } from "react-router-dom"
import Styles from './Home.module.css'; 

function Home() {


  return (
    <>
      <div className={Styles.homeContainer}>
      <h1 className={Styles.welcomeTitle}>¡Bienvenid@ a Catarsis!</h1>
      <p className={Styles.welcomeMessage}>
        ¿Quieres{" "}
        <Link to="/Schedule-Appointment" className={Styles.link}>
        agendar
        </Link>
        {" "}un nuevo turno hoy?
    </p>


      <div className={Styles.servicesContainer}>
        <div className={Styles.serviceCard}>
          <h2 className={Styles.serviceTitle}>Uñas Acrílicas</h2>
          <p className={Styles.serviceDescription}>
            Diseños personalizados para resaltar tu estilo.
          </p>
        </div>

        <div className={Styles.serviceCard}>
          <h2 className={Styles.serviceTitle}>Pestañas 1x1</h2>
          <p className={Styles.serviceDescription}>
            Extensiones naturales para una mirada impactante.
          </p>
        </div>

        <div className={Styles.serviceCard}>
          <h2 className={Styles.serviceTitle}>Pedicure</h2>
          <p className={Styles.serviceDescription}>
            Cuida tus pies con nuestro tratamiento premium.
          </p>
        </div>

        <div className={Styles.serviceCard}>
          <h2 className={Styles.serviceTitle}>Skin Care</h2>
          <p className={Styles.serviceDescription}>
            Relájate y renueva tu piel con nuestros cuidados faciales.
          </p>
        </div>
      </div>
    </div>
    </>

  )
}

export default Home
