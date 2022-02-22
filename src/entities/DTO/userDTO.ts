export class UserDTO {
    email: string;
    created_at?: Date;
    updated_at?: Date;

    constructor(email: string){
        this.email = email;
    }
}

