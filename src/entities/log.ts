import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./user";
import crypto from "crypto";

@Entity('logs')
export class Event{
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    table: string;
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
        name:string, 
        description:string, 
        table:string,
        user_id:string, 
        id?:string)
    {
        !id ? this.id = crypto.randomUUID() : this.id = id;
        this.name = name;
        this.description = description;
        this.table = table;
        this.user_id = user_id;
        this.created_at = new Date(Date.now());
    }
}