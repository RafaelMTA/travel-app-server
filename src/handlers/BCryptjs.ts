import bcryptjs from "bcryptjs";

const hash = async(password:string) : Promise<string | Error> => {
    try{
        return await bcryptjs.hash(password, 10);
    }catch(error){
        return new Error();
    }
}

const validate = async(password:string, hashedPassword:string) : Promise<boolean | Error> => {
    try{
        return await bcryptjs.compare(password, hashedPassword);
    }catch(error){
        return new Error();
    }
}

export default { hash, validate };