import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "@routes/routes";

class App{
    public server;

    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares = () => {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(helmet());
        this.server.use(morgan("dev"));
    }

    routes = () => {
        this.server.use(routes);
    }
}

export default new App().server;