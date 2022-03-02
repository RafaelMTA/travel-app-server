import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import crypto from "crypto";
import { User } from "./user";
import { Event } from "./event";

@Entity('paxs')
export class Pax{
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    surname: string;
    @Column()
    email: string;
    @Column()
    occupation: string;
    @Column()
    address:string;
    @Column()
    birthday: string;
    @Column()
    user_id: string;
    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user?: User;
    @Column()
    event_id: string;
    @ManyToOne(() => Event)
    @JoinColumn({ name: "event_id" })
    event?: Event;
    @CreateDateColumn()
    created_at: Date;
    @CreateDateColumn()
    updated_at?: Date;

    constructor(
        name:string, 
        surname:string, 
        email: string,
        occupation: string,
        address:string,
        birthday: string,
        user_id:string, 
        event_id:string,       
        id?:string)
    {
        !id ? this.id = crypto.randomUUID() : this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.occupation = occupation;
        this.address = address;
        this.birthday = birthday;
        this.user_id = user_id;
        this.event_id = event_id;      
        this.created_at = new Date(Date.now());
    }
}