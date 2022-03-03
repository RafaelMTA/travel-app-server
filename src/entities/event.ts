import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import crypto from "crypto";
import { User } from "./user";

@Entity('events')
export class Event{
    @PrimaryColumn()
    id: string;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    start_date: string;
    @Column()
    end_date: string;
    @Column()
    imageURL:string;
    @Column()
    user_id: string;
    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user?: User;
    @CreateDateColumn()
    created_at: Date;
    @CreateDateColumn()
    updated_at?: Date;

    constructor(
        title:string, 
        description:string, 
        user_id:string, 
        start_date: string,
        end_date: string,
        imageURL:string,
        id?:string)
    {
        !id ? this.id = crypto.randomUUID() : this.id = id;
        this.title = title;
        this.description = description;
        this.user_id = user_id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.created_at = new Date(Date.now());
    }
}