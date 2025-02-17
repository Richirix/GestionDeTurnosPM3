import server from "./server";


//PARA IMPORTAR VARIAS VARIABLES REQUERIR DE UN MODULO QUE EXPORTA VARIAS COSAS{ }
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";



AppDataSource.initialize()
    .then(()=>{
        console.log("Conexion exitosa a la base de datos realizada con exito");
        server.listen(PORT,() =>{
          console.log(`Server listening in port ${PORT}`);
    })
})
    .catch((error: Error) =>{
        console.error("Error al conectar con la base de datos:", error);
        
    })


// server.listen(PORT,()=>{
//     console.log(`Server listening in port ${PORT}`);
    
// });

