/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useState,  } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const UsersContext = createContext({
  user:"",
  userAppointments:[],
  registerUser: async () => {},
  loginUser: async () =>{},
  createAppointment: async()=>{},
  getUserAppointments:async()=>{},
  logOut: ()=>{},
  cancelUserAppointment:async()=>{}

});

export const UsersProvider = ({ children }) => {
 
  const [user, setUser] = useState(localStorage.getItem("user") ?? false);
  const [userAppointments, setUserAppointments] =useState([])

    
  const registerUser = async (userData) => {
    return await axios.post("http://localhost:3000/users/register", userData);
   
  };

 
  const loginUser = async (loginUser) => {
    const res = await axios.post(`http://localhost:3000/users/login`, loginUser);
    localStorage.setItem("user", res.data.user.id); 
    setUser(res.data.user.id);
    return res
  
  };

   const logOut = ()=>{
    localStorage.removeItem("user")
    setUser(false)
    setUserAppointments([])
   }

  const createAppointment = async (values) => {
     await axios.post(
      `http://localhost:3000/appointment/schedule`,
      values
    );
  
  };

 
  const getUserAppointments = async (userId) => {
   const { data} = await axios.get(`http://localhost:3000/users/${userId}`);
   
   
      setUserAppointments(data.data.appointments)
      
      
   
  };

  const cancelUserAppointment = async(appointmentId)=>{
    await axios.put(`http://localhost:3000/appointment/cancel/${appointmentId}`)
    const newAppointments=userAppointments.map((appointment)=>appointment.id === appointmentId ? {...appointment, status:"cancelled"} : appointment)
    setUserAppointments(newAppointments)
  }


  const value =
  {
    user,
    userAppointments,
    registerUser,
    loginUser,
    logOut,
    createAppointment,
    getUserAppointments,
    cancelUserAppointment
   
  }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );
};
