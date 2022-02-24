import 'dotenv/config';
import jwt from "jsonwebtoken";

type authConfig = {
    secret: string;
    issuer: string;
    algorithm: jwt.Algorithm[];
    expiresIn: string;
}

let config : authConfig = {
    secret: process.env.JWT_SECRET,
    issuer: process.env.JWT_ISSUER,
    algorithm: ['HS256'],
    expiresIn: '1d'
}

export default {
    config
}
