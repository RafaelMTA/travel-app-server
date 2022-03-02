import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import crypto from "crypto";

@Entity("users")
export class User{
    @PrimaryColumn()
    id: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @CreateDateColumn()
    created_at: Date;
    @CreateDateColumn()
    updated_at?: Date;

    constructor(email:string, password:string, id?:string){
        !id ? this.id = crypto.randomUUID() : this.id = id;
        this.email = email;
        this.password = password;       
        this.created_at = new Date(Date.now());     
    }
}