import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinColumn, ManyToOne } from "typeorm";
import crypto from "crypto";
import { User } from "./user";

@Entity('events')
export class Event{
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    user_id: string;
    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user?: User;
    @CreateDateColumn()
    created_at: Date;
    @CreateDateColumn()
    updated_at?: Date;

    constructor(name:string, user_id:string, id?:string){
        !id ? this.id = crypto.randomUUID() : this.id = id;
        this.name = name;
        this.user_id = user_id;
        this.created_at = new Date(Date.now());
    }
}