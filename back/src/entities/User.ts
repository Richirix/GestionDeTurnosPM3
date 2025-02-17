import { Column, CreateDateColumn, Entity, JoinColumn,OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Credentials } from "./Credential"
import { Appointment } from "./Appointment"


@Entity({
    name: "users"
})

export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type:"varchar",
        length: 100,
        nullable: false
    })
    name: string

    @Column({type:"varchar", length:100, unique:true, nullable: false})
    email: string

    @Column({type:"date",nullable:false})
    birthdate: Date

    @Column({type:"integer", nullable:false, unique: true})
    nDni:number
    
    @CreateDateColumn()
    createdAt?:Date

    @UpdateDateColumn()
    updateAT?: Date

    @OneToOne(() => Credentials, {cascade:true}) 
     @JoinColumn() 
     credentials: Credentials;

     @OneToMany(() => Appointment, (appointments) => appointments.user)
  appointments: Appointment[];
}


// interface IUser {
//     id: number,
//     name: string,
//     email: string,
//     birthdate: Date,
//     nDni:number,
//     credentialsId:number
// }
