import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import crypto from "crypto";
import { User } from "./user";
import { Event } from "./event";

@Entity('services')
export class Service{
    @PrimaryColumn()
    id: string;
    @Column()
    title: string;
    @Column()
    description: string;
    @CreateDateColumn()
    arrival: string;
    @CreateDateColumn()
    departure: string;
    @Column()
    address:string;
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
        title:string, 
        description:string, 
        user_id:string, 
        event_id:string,
        arrival:string,
        departure:string,
        address:string,
        id?:string)
    {
        !id ? this.id = crypto.randomUUID() : this.id = id;
        this.title = title;
        this.description = description;
        this.user_id = user_id;
        this.event_id = event_id;
        this.arrival = arrival;
        this.departure = departure;
        this.address = address;
        this.created_at = new Date(Date.now());
    }
}