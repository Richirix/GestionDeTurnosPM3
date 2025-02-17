import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,JoinTable, ManyToOne} from "typeorm";
import { User } from "./User";

  
export enum Status {
    Active = "active",
    Cancelled = "cancelled",
  }
  
  @Entity({
    name: "appointments",
  })
  export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type: "date", nullable: false})
    date: Date;
  
    @Column({type: "time",nullable: false})
    time: string;
   
    @Column({
      type: "enum",
      enum: Status,
      default: Status.Active,
      nullable: false,
    })
    status: Status;
  
    @ManyToOne(() => User, user => user.appointments, { nullable: false })
    @JoinTable()
    user: User;
  
    @CreateDateColumn()
    createdAt?: Date;
  
    @UpdateDateColumn()
    updatedAt?: Date;
  }
  
  
  