import bcryptjs from "bcryptjs";

const hash = async(password:string) : Promise<string> => {
    return await bcryptjs.hash(password, 10);
}

const validate = async(password:string, hashedPassword:string) : Promise<boolean | Error> => {
    try{
        return await bcryptjs.compare(password, hashedPassword);
    }catch(error){
        return new Error(`${error}`);
    }
}

export default { hash, validate };