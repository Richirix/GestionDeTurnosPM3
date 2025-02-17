

interface IAppointmen{
    id: number,
    date: Date,
    time: string,
    userId: number,
    status: Status
}

 export default IAppointmen


 export enum Status{
    Active = "active",
    Cancelled = "cancelled"
}


// Appointment:

// id: ID numérico que identifica al turno.

// date: fecha para la cual fue reservado el turno.

// time: hora para la cual fue reservado el turno.

// userId: ID del usuario que agendó el turno, referencia al usuario

// status: status actual del turno, que puede ser “active” o “cancelled”.

// interface IAppointmen{
//     serId: string;
//   dateTime: Date;
//   status: "scheduled" | "cancelled";
// }

// export default IAppointmen