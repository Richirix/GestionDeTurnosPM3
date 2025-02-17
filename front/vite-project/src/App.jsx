import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./views/Home/Home";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ScheduleAppointment from "./views/ScheduleAppointment/ScheduleAppointment";
import { useContext, useEffect,  } from "react";
import { UsersContext } from "./context/UsersContext";


function App(){
  const {user}=useContext(UsersContext)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
  
    if (!user && location.pathname !== "/login" && location.pathname !== "/register") {
     navigate("/login");
    }  if (user && (location.pathname === "/login" || window.location.pathname === "/register")) {
    navigate("/home");
    }
    }, [user, navigate,location.pathname]);

    return (
      <div>
        {
          !user ? (
            <main>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          ) : 
          (
            <div>
              <Navbar /> 
              <main>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/my-appointments" element={<MyAppointments />} />
                  <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
                </Routes>
              </main>
            </div>
          )
        }
      </div>
    )

  }

  export default App